require("../scss/style.scss");
require("../js/event_handlers");
require("./swiper.js")
// const swiper = new Swiper('.swiper', {
//     speed: 400,
//     spaceBetween: 100,
//   });
const swiper = new Swiper('.swiper', {
  breakpoints: {
      768: {
          slidesPerView: 2,
      },
      1440: {
          slidesPerView: 3
      },
  },
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  slidesPerView: 1,
});