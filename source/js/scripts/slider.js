(function () {
  'use strict';
  var slider = document.querySelector(".slider");
  var sliderList = document.querySelectorAll(".programms__tab");
  var sliders = Array.from(sliderList);
  var image = document.querySelector(".jsImg");

  if (slider) {
    console.log(slider);
    console.log(sliders);
    slider.addEventListener("click", function(evt) {
      var dot = evt.target.closest(".slider__item");

      if (dot.classList.contains("slider__item--active")) return;

      dot.addEventListener("click", function() {
        sliders.forEach(function(el) {
          el.classList.remove("slider__item--active");
        });
        dot.classList.add("slider__item--active");
      });
    });
  }
  })();
