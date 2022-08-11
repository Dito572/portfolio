// ეს არის სლაიდერი
const slideShowImages = document.querySelectorAll(".images .slideshow-image");

const imageDelayTime = 5000;

let imageCounter = 0;

slideShowImages[imageCounter].style.display = 'block';

setInterval(nextImage, imageDelayTime);


function nextImage(){
    slideShowImages[imageCounter].style.display = "none";
    imageCounter = (imageCounter + 1) % slideShowImages.length;
    slideShowImages[imageCounter].style.display = "block";
}

// სქილების პროცენტები

const progress = document.querySelector(".about-me-section");

const spans = document.querySelectorAll(".about-me-section span");

window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop >= progress.offsetTop){
        spans.forEach((span) => {
            span.style.width = span.getAttribute("data-width");
        });
    }else { 
        spans.forEach((span) =>{
            span.style.width = 0;
        });
    }
});
