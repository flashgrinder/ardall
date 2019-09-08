document.addEventListener('DOMContentLoaded', function(){

	var mySwiper1 = new Swiper('.swiper-header', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,
		speed: 2000,
		effect: 'fade',
		allowTouchMove: false,
		watchSlidesProgress: true,
		autoplay: {
			delay: 4000
		},

		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			dynamicMainBullets: 6,
			clickable: true
		},

		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}
	});

	var mySwiper2 = new Swiper('.swiper-footer', {
		// Optional parameters
		direction: 'horizontal',
		loop: true,
		slidesPerView: 3,
		spaceBetween: 30,
		disableOnInteraction: false,
		speed: 2000,
		allowTouchMove: true,
		watchSlidesProgress: true,
		autoplay: {
			delay: 4000
		},

		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
			// type: 'bullets',
			dynamicMainBullets: 3,
			dynamicBullets: true,
			clickable: true,
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + (index + 1) + '</span>';
			}
		},

		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}
	});







	// Шпаргалка
	// var btn = document.querySelectorAll('.screenButton'),
	// 	cart = document.querySelectorAll('.screenButton__cart'),
	// 	houseTwo = document.querySelector('.screenHouse__two'),
	// 	shopBlock = document.querySelector('.shop'),
	// 	one = document.querySelector('.one'),
	// 	two = document.querySelector('.two'),
	// 	three = document.querySelector('.three'),
	// 	four = document.querySelector('.four'),
	// 	five = document.querySelector('.five'),
	// 	six = document.querySelector('.six'),
	// 	seven = document.querySelector('.seven');

	// for (let i = 0; i < btn.length; i++) {
	// 	btn[i].addEventListener('mouseover', function() {
	// 		cart[i].classList.add('screenButton__cart-animation');
	// 		houseTwo.classList.add('screenHouse__two-animation');
	// 	});
	// 	btn[i].addEventListener('mouseout', function() {
	// 		cart[i].classList.remove('screenButton__cart-animation');
	// 	});
	// }

	// function arrow() {
	// 	one.classList.add('one-anim');
	// 	two.classList.add('two-anim');
	// 	three.classList.add('three-anim');
	// 	four.classList.add('four-anim');
	// 	five.classList.add('five-anim');
	// 	six.classList.add('six-anim');
	// 	seven.classList.add('seven-anim');
	// 	houseTwo.classList.add('screenHouse__two-animation');
	// }

	// houseTwo.addEventListener('mouseover', function () {
	// 	houseTwo.classList.add('screenHouse__two-animation');
	// 	arrow();
	// });
	// shopBlock.addEventListener('mouseout', function () {
	// 	houseTwo.classList.remove('screenHouse__two-animation');
	// 	one.classList.remove('one-anim');
	// 	two.classList.remove('two-anim');
	// 	three.classList.remove('three-anim');
	// 	four.classList.remove('four-anim');
	// 	five.classList.remove('five-anim');
	// 	six.classList.remove('six-anim');
	// 	seven.classList.remove('seven-anim');
	// 	houseTwo.classList.remove('screenHouse__two-animation');
	// });

	// // Прогресс бар
	// var progress = document.querySelector('.progress');

	// window.addEventListener('scroll', progressBar);

	// function progressBar(e) {
	// 	var windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
	// 	var windowHeigth = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	// 	var per = windowScroll / windowHeigth * 100;

	// 	progress.style.width = per + '%';
	// }

	// // Мобильное меню
	// var burger = document.querySelector('.mobile-burger'),
	// 	menu = document.querySelector('.mobile-menu'),
	// 	link = document.querySelectorAll('.mobile-menu > ul > li > a');

	// 	function menuAnim() {
	// 		menu.classList.toggle('active');
	// 	}
	// 	burger.addEventListener('click', menuAnim);

	// 	for (var i = 0; i < link.length; i++) {
	// 		link[i].addEventListener('click', function(){
	// 			menu.classList.remove('active');
	// 		});
			
	// 	}

	// // Слайдер
	// $('.aboutComp__slider').slick({
	// 	autoplay: true,
	// 	speed: 300,
	// 	slidesToShow: 1,
	// 	infinite: true,
	// 	pauseOnFocus: false,
	// 	pauseOnHover: false,
	// 	fade: true,
	// 	arrows: false,
	// 	dots: false
	// })

});