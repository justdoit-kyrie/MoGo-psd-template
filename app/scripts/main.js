const menuToggle = document.querySelector(".header-toggle");
const menuHeader = document.querySelector(".header-menu");
const closeBtn = document.querySelector(".close-btn");

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
