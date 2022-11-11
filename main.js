'use strict'

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
//მეორე სლაიდერი
const slideButton = document.querySelector('.rec-btn1')
const slideButton2 = document.querySelector('.rec-btn2')
const slideButton3 = document.querySelector('.rec-btn3')

const firstSlide = document.querySelector('.rec-slide')
const secondSlide = document.querySelector('.secondSlide')
const thirdSlide = document.querySelector('.thirdSlide')

const showFirst = function() {
  secondSlide.classList.add('hidden')
  thirdSlide.classList.add('hidden')
  firstSlide.classList.remove('hidden')
}

const showSecond = function(){
    firstSlide.classList.add('hidden')
    thirdSlide.classList.add('hidden')
    secondSlide.classList.remove('hidden')
}
const showthird = function(){
  firstSlide.classList.add('hidden')
  secondSlide.classList.add('hidden')
  thirdSlide.classList.remove('hidden')
}

slideButton2.addEventListener('click', showSecond);
slideButton3.addEventListener('click', showthird);
slideButton.addEventListener('click', showFirst);


//პროექტების გაფილტვრა

filterSelection("all")
function filterSelection(c) {
  let x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    removeClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
  }
}

function addClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}
function removeClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}


//მოდალი
const modal = document.querySelector('.modal');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
