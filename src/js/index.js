require("../scss/style.scss");
require("../js/event_handlers");
require("./swiper.js")
//side-menus-background
const sidewrapper = document.querySelector(".side-menu-wrapper");
const feedback = document.querySelector(".feedback");
const requestcall = document.querySelector(".requestcall");
//initial height
sidewrapper.style.height = document.body.offsetHeight + "px"

const resizeObserver = new ResizeObserver(entries => {
    sidewrapper.style.height = entries[0].target.clientHeight + "px";
    feedback.style.height = entries[0].target.clientHeight + "px";
}
  )
  resizeObserver.observe(document.body)