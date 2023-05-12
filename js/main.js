// menu
let menu = document.querySelector(".menu__icon");

menu.onclick = () => {
  menu.classList.toggle("move");
};

// slider
var swiper = new Swiper(".services__content", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 25000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// header

let header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});
