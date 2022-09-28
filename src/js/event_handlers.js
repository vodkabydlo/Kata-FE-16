// v 1.0
// function readMore () {
//     document.querySelector(".body__about-text").classList.toggle("expand-content");
//     document.querySelector(".body__about-text-expand span").classList.toggle("expand-text");
//     document.querySelector(".body__about-text-expand img").classList.toggle("expand-arrow");  
// }

// const readMoreButton = document.getElementById("read_button");
// readMoreButton.addEventListener("click", function(){readMore()}, false)



//v 2.0
const f = (selector) => document.querySelector(selector);

function expandBodyParts (place) {
    f(`.${place}-expand-content`).classList.toggle("expand-content");
    f(`.${place}-expand-text`).classList.toggle("expand-text");
    f(`.${place}-expand-arrow`).classList.toggle("expand-arrow");  
}
function addReadMoreListeners() {
//add expandable body parts here into parts array:
    const places = ["about","brands", "types"];
    places.forEach(place => {
        f(`.${place}-expand-button`).addEventListener("click", function(){expandBodyParts(place)}, false)
    });
}
// left
const openBurger = document.getElementById("openBurger");
const closeBurger = document.getElementById("closeBurger");
const expandLeftMenu = () => document.querySelector(".side-menu-wrapper").classList.toggle("menu-expanded");
openBurger.addEventListener("click", function(){expandLeftMenu()}, false);
closeBurger.addEventListener("click", function(){expandLeftMenu()}, false);
addReadMoreListeners();

//right 
const openFeedback = document.getElementById("openFeedback");
const closeFeedback = document.getElementById("closeFeedback");
const expandFeedback = () => {
    document.querySelector(".feedback__close").classList.toggle("visible");
    document.querySelector(".feedback").classList.toggle("menu-expanded")
};
openFeedback.addEventListener("click", function(){expandFeedback()}, false);
closeFeedback.addEventListener("click", function(){expandFeedback()}, false);
