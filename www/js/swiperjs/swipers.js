var swiper = new Swiper(".profile-swiper .swiper-container", {
  slidesPerView: 3,
  spaceBetween: 20,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".profile-swiper .button-next",
    prevEl: ".profile-swiper .button-prev",
  },
});
