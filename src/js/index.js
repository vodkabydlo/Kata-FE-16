require("../scss/style.scss");
require("../js/event_handlers");
require("./swiper.js")

// const swiper = new Swiper('.swiper', {
//   breakpoints: {
//       768: {
//           slidesPerView: 2,
//       },
//       1440: {
//           slidesPerView: 3
//       },
//   },
//   navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//   },
//   slidesPerView: 1,
// });

//side-menu-background
const sidewrapper = document.querySelector(".side-menu-wrapper");
//initial height
sidewrapper.style.height = document.body.offsetHeight + "px"

const resizeObserver = new ResizeObserver(entries => 
    sidewrapper.style.height = entries[0].target.clientHeight + "px"
  )
  resizeObserver.observe(document.body)