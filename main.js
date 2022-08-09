'use strict'

//this is first slider
let index = 0;
let slides = document.querySelectorAll(".slides");
let dot = document.querySelectorAll(".dot");

function changeSlide(){

  if(index<0){
    index = slides.length-1;
  }
  
  if(index>slides.length-1){
    index = 0;
  }
  
  for(let i=0;i<slides.length;i++){
    slides[i].style.display = "none";
    dot[i].classList.remove("active");
  }
  
  slides[index].style.display= "block";
  dot[index].classList.add("active");
  
  index++;
  
  setTimeout(changeSlide,5000);
}

changeSlide();

//this is percentage bar

const fillBar = document.querySelector(".two");
const spans = document.querySelectorAll("span");

window.addEventListener("scroll", () => {
  if (document.documentElement.scrollTop >= fillBar.offsetTop) {
    spans.forEach((span) => {
      span.style.width = span.getAttribute("data-width");
    });
  } else {
    spans.forEach((span) => {
      span.style.width = 0;
    });
  }
});
