const owl = $('.owl-carousel');

owl.owlCarousel({
	center: true,
	loop: true,
	margin: 30,
	startPosition: 1,
	items: 3,
	responsive: {
		850: {
			items: 3
		},

		1000 : {
			margin: 20,
			items: 3
		},
	
		1200: {
			margin:30
		},

		
	}

});

$('.slider__btn--prev').click(function () {
	owl.trigger('prev.owl.carousel');
});


$('.slider__btn--next').click(function () {
	owl.trigger('next.owl.carousel');
});


// Nav Icon

const navBtn = document.querySelector('.nav__toggle')
const menuIcon = document.querySelector('.menu-icon')
const nav = document.querySelector('.nav')

// document.querySelector('.menu-icon-wrapper').onclick = function(){
//     document.querySelector('.menu-icon').classList.toggle('menu-icon-active');
// }

navBtn.onclick = function() {
	menuIcon.classList.toggle('menu-icon--active')
	nav.classList.toggle('nav--mobile')
	document.body.classList.toggle('no-scroll')
}

// document.querySelector('.nav__toggle').onclick = function() {
// 	document.querySelector('.nav').classList.add('nav--mobile')
// }

// document.querySelector('.nav__toggle').onclick = function() {
// 	document.querySelector('.nav').classList.remove('nav--mobile')
// }