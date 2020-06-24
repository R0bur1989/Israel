
  "use strict";
  var page = document.querySelector(".jsPage");

  /* Индекс слайда по умолчанию */
  var slideIndex = 3;
  showSlides(slideIndex);

  /* Функция увеличивает индекс на 1, показывает следующй слайд*/
  function plusSlide() {
    showSlides((slideIndex += 1));
    page.textContent = slideIndex;
  }

  /* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
  function minusSlide() {
    showSlides((slideIndex -= 1));
    page.textContent = slideIndex;
  }

  /* Основная функция слайдера */
  function showSlides(n) {
    var i;
    var slides = document.querySelectorAll(".feedback__item");

    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
  }

