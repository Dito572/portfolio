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
    firstSlide.classList.remove('hidden')
    secondSlide.classList.add('hidden')
    thirdSlide.classList.add('hidden')
}

const showSecond = function(){
    secondSlide.classList.remove('hidden')
    firstSlide.classList.add('hidden')
    thirdSlide.classList.add('hidden')
}
const showthird = function(){
    thirdSlide.classList.remove('hidden')
    firstSlide.classList.add('hidden')
    secondSlide.classList.add('hidden')
}


slideButton.addEventListener('click', showFirst);
slideButton2.addEventListener('click', showSecond);
slideButton3.addEventListener('click', showthird);





//API
const url = "http://borjomi.loremipsum.ge/api/send-message";
const formEl = document.querySelector("form");
formEl.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(formEl);
  const formDataSerialized = Object.fromEntries(formData);
  const jsonObject = {
    ...formDataSerialized,
    sendToSelf: formDataSerialized.sendToSelf ? true : false,
  };
  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(jsonObject),
      headers: {
        "Content-Type": "application/json",
      },
    });

  } catch (e) {
    console.error(e);
  }
});


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
