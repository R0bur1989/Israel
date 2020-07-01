// (function () {
//   "use strict";
//   var slider = document.querySelector(".slider");
//   var sliderList = slider.querySelectorAll(".slider__item");
//   var sliders = Array.prototype.slice.call(sliderList);
//   var image = document.querySelector(".jsImg");
//   var description = document.querySelector(".jsGalleryP");

//   if (slider) {
//     slider.addEventListener("click", function (evt) {
//       var dot = evt.target;
//       //.closest(".slider__item")
//       if (!dot.classList.contains("slider__item")) return;

//       if (dot.classList.contains("slider__item--active")) return;

//       sliders.forEach(function (el) {
//         el.classList.remove("slider__item--active");
//       });
//       dot.classList.add("slider__item--active");

//       switch (dot.dataset.info) {
//         case "excursion":
//           image.src = "img/excursion-mobile.jpg";
//           description.textContent =
//             "Экскурсии по Израилю и знакомство с его историей";
//           break;
//         case "Hebrew":
//           image.src = "img/Hebrew-mobile.jpg";
//           description.textContent = "Изучение иврита";
//           break;
//         case "profession":
//           image.src = "img/profession-mobile.jpg";
//           description.textContent = "Обучение современным навыкам и профессиям";
//           break;
//         case "artprojects":
//           image.src = "img/artprojects-mobile.jpg";
//           description.textContent =
//             "Совместные творческие проекты с израильской молодёжью";
//           break;
//         case "leadership":
//           image.src = "img/leadership-mobile.jpg";
//           description.textContent = "Развитие лидерства";
//           break;
//       }
//     });
//   }
// })();
