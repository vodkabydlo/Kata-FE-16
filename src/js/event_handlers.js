function readMore () {
    document.querySelector(".body__about-text").classList.toggle("expanded-about");
    document.querySelector(".body__about-text-expand span").classList.toggle("expand-text");
    document.querySelector(".body__about-text-expand img").classList.toggle("expand-arrow");  
}

const readMoreButton = document.getElementById("read_button");
readMoreButton.addEventListener("click", function(){readMore()}, false)
