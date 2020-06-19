(function () {
  "use strict";
  var forward = document.querySelector(".jsForward");
  var back = document.querySelector(".jsBack");
  var slider = document.querySelector(".slider")

  if (slider) {
    slider.addEventListener("click", function (evt) {
      var dot = evt.target.closest(".slider__item");

      if (dot.classList.contains("slider__item--active")) return;

      sliders.forEach(function (el) {
        el.classList.remove("slider__item--active");
      });
      dot.classList.add("slider__item--active");

    });
  }
})();
