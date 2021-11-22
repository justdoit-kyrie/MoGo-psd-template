const menuToggle = document.querySelector(".header-toggle");
const menuHeader = document.querySelector(".header-menu");
const closeBtn = document.querySelector(".close-btn");
const header = document.querySelector("header");
const headerTop = header.querySelector(".header-top");

menuToggle.addEventListener("click", (e) => {
  menuHeader.classList.add("open");
});

window.addEventListener("click", (e) => {
  if (
    menuHeader === e.target.closest(".header-menu") ||
    e.target.matches(".header-toggle")
  )
    return;
  menuHeader.classList.remove("open");
});

const menuLink = document.querySelectorAll(".header-menu-link");
Array.from(menuLink).forEach((item) => {
  item.addEventListener("click", (e) => {
    menuHeader.classList.remove("open");
  });
});

const wedoItemHeader = document.querySelectorAll(".wedo-item-header");
const wedoItem = document.querySelectorAll(".wedo-item");
Array.from(wedoItemHeader).forEach((item) => {
  item.addEventListener("click", (e) => {
    Array.from(wedoItem).forEach((item) => {
      item.classList.remove("active");
    });
    e.target.closest(".wedo-item").classList.add("active");
  });
});

// slick slider
$(document).ready(function () {
  $(".quote-main").slick({
    prevArrow:
      "<button type='button' class='slick-prev pull-left'><i class='fal fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:
      "<button type='button' class='slick-next pull-right'><i class='fal fa-angle-right' aria-hidden='true'></i></button>",
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});
