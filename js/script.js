

/* Код для реализации слайдера Swiper */
const swiper = new Swiper('.swiper-container', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

	// And if we need scrollbar
	scrollbar: {
		el: '.swiper-scrollbar',
	},
});

/* ************************************************************************* */

/* Данный код позволяет поределить на каком устройстве открыта страница */
const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/OperaMini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/iEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};

/* ************************************************************************* */

/* Добавляем проверку на каком устройстве открыта страница,
	а именно, если на мобильном то дабавляем к body класс _touch ,
		а если на ПК то добавляем к body класс _pc*/
if (isMobile.any()) {
	document.body.classList.add(`_touch`);
}
else {
	document.body.classList.add(`_pc`);
}

/* ************************************************************************* */

/* Меню "Бургер" */

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');

if (iconMenu) {

	iconMenu.addEventListener("click", function (e) {
		/* Добавляем класс .lock для запрета скролинга страница при ОТКРЫТОМ меню */
		document.body.classList.toggle('lock');
		/* Добавляем класс .active в код html к классу menu__body при нажатии на кнопку меню (menu__icon) */
		iconMenu.classList.toggle('active');
		/* Добавляем класс .active для анимации иконки бургер-меню */
		menuBody.classList.toggle('active');
	});

}

/* Закрытие меню при клике на один из пунктов */
const menuLinks = document.querySelectorAll('.menu__link');
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => { menuLink.addEventListener("click", onMenuLinkClick); });

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if (iconMenu.classList.contains('active')) {
			document.body.classList.remove('lock');
			iconMenu.classList.remove('active');
			menuBody.classList.remove('active');
		}
	}
}

/* ************************************************************************* */

/* Меню "Оборудование" */
const catalogBar = document.querySelector('.catalog__bar');
const equipmentMenu = document.querySelector('.equipment');
const menuCatalog = document.querySelector('.catalog__body');
if (equipmentMenu) {
	equipmentMenu.addEventListener("click", function (e) {
		/* Добавляем класс .activeMenu в код html к классу catalog__bar */
		catalogBar.classList.toggle('activeMenu')
		/* Добавляем класс .activeMenu в код html к классу equipment */
		equipmentMenu.classList.toggle('activeMenu');
		/* Добавляем класс .activeMenu в код html к классу catalog__body */
		menuCatalog.classList.toggle('activeMenu');
	});

	/* Закрытие меню при клике на один из пунктов */
	const catalogItems = document.querySelectorAll('.catalog__item');
	if (catalogItems.length > 0) {
		catalogItems.forEach(catalogItem => { catalogItem.addEventListener("click", onMenuLinkClick); });

		function onMenuLinkClick(e) {
			const catalogItem = e.target;
			/* Проверяем добавлен ли класс activeMenu (contains) в код html к классу equipment */
			if (equipmentMenu.classList.contains('activeMenu')) {
				/* Удаляем класс activeMenu из кода html у класса */
				equipmentMenu.classList.remove('activeMenu')
				/* Удаляем класс activeMenu из кода html у класса catalog__bar */
				catalogBar.classList.remove('activeMenu')
				/* Удаляем класс activeMenu из кода html у класса catalog__body */
				menuCatalog.classList.remove('activeMenu');
			}
		}
	}
}


/* ************************************************************************* */

/* Меню "footer" */
const titInfo = document.querySelector('.titInfo');
const information = document.querySelector('.ul__info');

const titEq = document.querySelector('.titEq');
const equipment = document.querySelector('.ul__eq');

const titSent = document.querySelector('.titSent');
const sentence = document.querySelector('.ul__sent');

const titCont = document.querySelector('.titCont');
const contacts = document.querySelector('.ul__cont');

/* Разворачиваем пункт "Информация" */
if (titInfo) {
	titInfo.addEventListener("click", function (e) {
		/* Добавляем класс activeUl в код html к классам ul */
		titInfo.classList.toggle('activeUl');
		information.classList.toggle('activeUl');
	});
}
/* Разворачиваем пункт "Оборудование" */
if (titEq) {
	titEq.addEventListener("click", function (e) {
		titEq.classList.toggle('activeUl');
		equipment.classList.toggle('activeUl');
	});
}
/* Разворачиваем пункт "Предложения" */
if (titSent) {
	titSent.addEventListener("click", function (e) {
		titSent.classList.toggle('activeUl');
		sentence.classList.toggle('activeUl');
	});
}
/* Разворачиваем пункт "Контакты" */
if (titCont) {
	titCont.addEventListener("click", function (e) {
		titCont.classList.toggle('activeUl');
		contacts.classList.toggle('activeUl');
	});
}




