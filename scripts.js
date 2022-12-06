// import Typed from 'typed.js';

let head = document.querySelector('.header');
let Slide = document.getElementsByClassName('slide');
let Slides = document.getElementsByClassName('slides');
let work = document.querySelector('.about');
let SS = document.getElementsByClassName('ss');

window.onscroll = () =>{
    nav();
    slide();
    slides();
}

function nav(){
  if(window.scrollY > 400){
    // head.style.background = "Black";
    head.classList.add('active');
 }else {
//head.style.background= "none";
    head.classList.remove('active');
 }
}





let menu = document.querySelector('.icon');

let navbar = document.querySelector('.nav_container');

menu.addEventListener('click', () =>{
    navbar.classList.toggle('active');
   // head.style.background = "black";
})


function slide(){
  if(document.documentElement.scrollTop >= 200 && document.documentElement.scrollTop <= 900){
    Slide[0].style.left ='0%';
  }
  else if(document.documentElement.scrollTop >= 900 && document.documentElement.scrollTop <= 1500){
    Slide[1].style.left = '0%';
  }
  else if (document.documentElement.scrollTop >= 2500){
    Slide[2].style.left = '0%';
  }
}

function slides(){
  if(document.documentElement.scrollTop >= 1400 && document.documentElement.scrollTop <= 2000){
    Slides[0].style.right ='0%';
  }
  else if(document.documentElement.scrollTop >= 1800 && document.documentElement.scrollTop <= 2500){
    Slides[1].style.right = '0%';
  }
}
// slide();


// let word;

// var theWords = {
//   String:["Bashir's Uni", "WELCOME"],
//   typeSpeed:100,
//   backSpeed:50,
//   loop:true
// }

// word = new Typed(".Type", theWords);




var swiper = new Swiper(".courses_container", {
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 2,
      },
    },
  });

 






