window.addEventListener("DOMContentLoaded", () => {
  let progress = document.getElementById("progressbar"),
    totalHight = document.body.scrollHeight - window.innerHeight;
  window.onscroll = function () {
    let progressHeight = (window.pageYOffset / totalHight) * 100;
    progress.style.height = progressHeight + "%";
  };

  new Swiper(".swiper-container", {
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    // Отступы между слайдами
    spaceBetween: 19,
    // Бесконечный слайдер
    loop: false,
    //Ширина экрана. Количество слайдов для показа
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      1100: {
        slidesPerView: 2,
      },
      1640: {
        slidesPerView: 3,
      },
    },
  });
});
