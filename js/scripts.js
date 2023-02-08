// Custom Scripts
function burgerMenu() {
  const burger = document.querySelector('.burger')
  const menu = document.querySelector('.menu')
  const body = document.querySelector('body')

  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active')
      burger.classList.add('active-burger')
      body.classList.add('locked')
    } else {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
  window.addEventListener('resize', () => {
    if (window.innerWidth > 767.98) {
      menu.classList.remove('active')
      burger.classList.remove('active-burger')
      body.classList.remove('locked')
    }
  })
}
burgerMenu()


function fixedNav() {
  const nav = document.querySelector('nav')
  const breakpoint = 500
  if (window.scrollY >= breakpoint) {
    nav.classList.add('fixed')
  } else {
    nav.classList.remove('fixed')
  }
}
window.addEventListener('scroll', fixedNav)
;
let swiper = new Swiper(".swiper", {
  slidesPerView: perView(),
  loop: true,
  freeMode: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  direction: getDirection(),


  on: {
    resize: function () {
      swiper.changeDirection(getDirection());
    },
  },
});

function perView() {
	let slidesMob = window.innerWidth <= 768 ? 3 : 5;
	return slidesMob;
}
perView();

function getDirection() {
  let windowWidth = window.innerWidth;
  let direction = window.innerWidth <= 100 ? "vertical" : "horizontal";
  return direction;
}
;
