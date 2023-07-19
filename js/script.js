new Swiper('.rewiews__slider', {
	loop: true,
	watchOverflow: false,
	autoHeight: true,
	pagination: {
		el: '.rewiews__slider-pagination',
		clickable: true,
		bulletActiveClass: 'active',
		bulletClass: 'dots__dot',
	},
	navigation: {
		nextEl: '.rewiews__btn-next',
		prevEl: '.rewiews__btn-prev',
	},
	spaceBetween: 10,
	breakpoints: {
		576: {
			slidesPerView: 1,
			spaceBetween: 10
		},
		767: {
			slidesPerView: 2,
			spaceBetween: 20
		},
		991: {
			slidesPerView: 3,
			spaceBetween: 30
		},
		1180: {
			slidesPerView: 4,
			spaceBetween: 40
		}
	},
});
new Swiper('.include__slider', {
	loop: true,
	watchOverflow: true,
	pagination: {
		el: '.include__slider-pagination',
		clickable: true,
		bulletActiveClass: 'active',
		bulletClass: 'dots__dot',
	},
	navigation: {
		nextEl: '.include__btn-next',
		prevEl: '.include__btn-prev',
	},
	spaceBetween: 10,
	slidesPerView: 1,
	breakpoints: {
		576: {
			slidesPerView: 2,
			spaceBetween: 10
		},
		840: {
			slidesPerView: 3,
			spaceBetween: 20
		},
		1180:{
			slidesPerView: 4,
			spaceBetween: 40
		},
	},
});
new Swiper('.doctors__slider', {
	loop: true,
	watchOverflow: false,
	pagination: {
		el: '.doctors__slider-pagination',
		clickable: true,
		bulletActiveClass: 'active',
		bulletClass: 'dots__dot',
	},
	navigation: {
		nextEl: '.doctors__btn-next',
		prevEl: '.doctors__btn-prev',
	},
	spaceBetween: 10,
	slidesPerView: 1,
	breakpoints: {
		576: {
			slidesPerView: 2,
			spaceBetween: 20
		},
		840: {
			slidesPerView: 3,
			spaceBetween: 30
		},
		1180: {
			slidesPerView: 4,
			spaceBetween: 40
		}
	},
});
new Swiper('.videos__slider', {
	loop: true,
	watchOverflow: true,
	autoHeight: false,
	pagination: {
		el: '.videos__slider-pagination',
		clickable: true,
		bulletActiveClass: 'active',
		bulletClass: 'dots__dot',
	},
	navigation: {
		nextEl: '.videos__btn-next',
		prevEl: '.videos__btn-prev',
	},
	slidesPerView: 1,
	breakpoints: {
		1180: {
			slidesPerView: 2,
			spaceBetween: 40
		}
	},
});
new Swiper('.programs__slider', {
	loop: true,
	watchOverflow: true,
	autoHeight: true,
	pagination: {
		el: '.programs__slider-pagination',
		clickable: true,
		bulletActiveClass: 'active',
		bulletClass: 'dots__dot',
	},
	navigation: {
		nextEl: '.programs__btn-next',
		prevEl: '.programs__btn-prev',
	},
	slidesPerView: 1,
	breakpoints: {
		1180: {
			slidesPerView: 2,
			spaceBetween: 40
		}
	},
});
new Swiper('.advatages__slider', {
	loop: true,
	watchOverflow: true,
	pagination: {
		el: '.advatages__slider-pagination',
		clickable: true,
		bulletActiveClass: 'active',
		bulletClass: 'dots__dot',
	},
	navigation: {
		nextEl: '.advatages__btn-next',
		prevEl: '.advatages__btn-prev',
	},
	spaceBetween: 10,
	slidesPerView: 1,
	breakpoints: {
		576: {
			slidesPerView: 2,
			spaceBetween: 10
		},
		840: {
			slidesPerView: 3,
			spaceBetween: 20
		},
		1180:{
			slidesPerView: 4,
			spaceBetween: 40
		},
	},
});
new Swiper('.clinic__slider', {
	loop: true,
	watchOverflow: true,
	pagination: {
		el: '.clinic__slider-pagination',
		clickable: true,
		bulletActiveClass: 'active',
		bulletClass: 'dots__dot',
	},
	navigation: {
		nextEl: '.clinic__btn-next',
		prevEl: '.clinic__btn-prev',
	},
	spaceBetween: 10,
	slidesPerView: 'auto',
	breakpoints: {
		767: {
			spaceBetween: 20
		},
		991: {
			spaceBetween: 30
		},
		1180:{
			spaceBetween: 40
		},
	},
});
new Swiper('.license__slider', {
	loop: true,
	watchOverflow: true,
	pagination: {
		el: '.license__slider-pagination',
		clickable: true,
		bulletActiveClass: 'active',
		bulletClass: 'dots__dot',
	},
	navigation: {
		nextEl: '.license__btn-next',
		prevEl: '.license__btn-prev',
	},
	spaceBetween: 10,
	slidesPerView: 2,
	breakpoints: {
		767: {
			slidesPerView: 3,
			spaceBetween: 20
		},
		991: {
			slidesPerView: 4,
			spaceBetween: 40
		},
	},
});

const $ = document.querySelector.bind(document),
$$ = document.querySelectorAll.bind(document),
body = $('body');

body.addEventListener("click", chooseOptionClick);
function chooseOptionClick(){
	if(event.target.closest('.custom-input')) customInputActive();
	if(event.target.matches('.scroll')) scrollInto(event.target, event);
	if(event.target.parentElement.matches('.spoiler')||
		event.target.matches('.spoiler')) openSpoiler(event.target.closest('.spoiler'));
}
customInputActive();
function customInputActive(){
	$$('.custom-input input').forEach(item=>{
		item.parentElement.classList.remove('active');
		if(item.checked) item.parentElement.classList.add('active');
	});
}

function scrollInto(el, ev){
	ev.preventDefault();
	$(`#${el.dataset.scroll}`).scrollIntoView({
		block: 'start',
		behavior: 'smooth',
	});
}

function openSpoiler(el){
	if(el.matches('.active')) {
		closeSpoiler(el);
		return;
	}
	el.nextElementSibling.style.maxHeight = `${el.nextElementSibling.scrollHeight}px`;
	el.classList.add('active');
}

function closeSpoiler(el){
	el.nextElementSibling.style = '';
	el.classList.remove('active');
}

window.addEventListener("resize", showMoreText);
showMoreText();
function showMoreText(){
	$$('.show-more').forEach(item=>{
		if(item.scrollHeight> item.offsetHeight){
			item.insertAdjacentHTML(
				'beforeend',
				`<a href="${'#'}" class="review__text-more">... Читать полностью</a>`);
		} else if(item.querySelector('.review__text-more'))item.querySelector('.review__text-more').remove();
	});
}