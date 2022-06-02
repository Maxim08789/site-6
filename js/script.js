//меню - бургер
const menuIcon = document.querySelector(".menu__icon");
const menuBody = document.querySelector(".menu__body");
function toggleMenuIcon() {
	menuIcon.classList.toggle("active");
	menuBody.classList.toggle("active");
}
menuIcon.addEventListener("click", toggleMenuIcon);
/// лок-скролл для меню - бургера
$(".menu__icon").click(function () {
	$('body').toggleClass('lock-scroll');
});




function ibg() {
	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
		}
	}
}
ibg();


///Спойлер
if (window.matchMedia('(max-width: 768px)').matches) {
	$(document).ready(function () {
		$('.spoiler__title').click(function (event) {
			if ($('.spoiler').hasClass('one')) {  //если добавить к .spoiler класс 'one', то получится "аккардеон"
				$('.spoiler__title').not($(this)).removeClass('active');
				$('.spoiler__content').not($(this).next()).slideUp(200);
			}
			$(this).toggleClass('active').next().slideToggle(200);
		});
	});
}

///Слайдер
$('.slider__body').slick({
	arrows: true,
	dots: false,
	slidesToShow: 1,
	autoplay: false,
	/* скорость автоплея
	autoplaySpeed: 10000,
	*/
	/* возможность задавать собственные ширины для элемента слайдера
	variableWidth: true,
	*/
	pauseOnHover: true,
	pauseOnDotsHover: true,
	adaptiveHeight: true,
});


///Табы
const tabsBtn = document.querySelectorAll(".tabs__btn");
const tabsItems = document.querySelectorAll(".tabs__item");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
	item.addEventListener("click", function () {
		let currentBtn = item;
		let tabId = currentBtn.getAttribute("data-tab");
		let currentTab = document.querySelector(tabId);

		if (!currentBtn.classList.contains('active-tab')) {
			tabsBtn.forEach(function (item) {
				item.classList.remove('active-tab');
			});

			tabsItems.forEach(function (item) {
				item.classList.remove('active-tab');
			});

			currentBtn.classList.add('active-tab');
			currentTab.classList.add('active-tab');
		}
	});
}

document.querySelector('.tabs__nav-btn').click();