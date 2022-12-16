const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  centerInsufficientSlides: true,
  centeredSlides: true,
});

window.onload = () => {
  const location = document.querySelector("#nav-city");
  // location.append("Город");
  if (ymaps) {
    location.append(ymaps.geolocation.city);
  } else {
    location.append("Россия");
  }
};
