(function () {
  'use strict';
  var slider = document.querySelector(".slider");
  var sliderList = document.querySelectorAll(".slider__item");
  var sliders = Array.from(sliderList);
  var image = document.querySelector(".jsImg");
  var description = document.querySelector(".jsGalleryP");

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

        switch(dot.dataset.info) {
          case "excursion": image.src = "img/excursion-mobile.png";
          description.textContent = "Экскурсии по Израилю и знакомство с его историей"
          break;
          case "Hebrew": image.src = "img/Hebrew-mobile.png";
          description.textContent = "Изучение иврита"
          break;
          case "profession": image.src = "img/profession-mobile.png";
          description.textContent = "Обучение современным навыкам и профессиям"
          break;
          case "artprojects": image.src = "img/artprojects-mobile.png";
          description.textContent = "Совместные творческие проекты с израильской молодёжью"
          break;
          case "leadership": image.src = "img/leadership-mobile.png";
          description.textContent = "Развитие лидерства"
          break;
        }
      });
    });
  }
  })();
