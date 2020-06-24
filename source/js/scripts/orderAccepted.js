// (function () {
//   "use strict";
//   var overlay1 = document.querySelector(".overlay--1");
//   var orderForm = document.querySelector(".modal__form");
//   var replyForm = document.querySelector(".reply__form");
//   var detailsForm = document.querySelector(".details__form");
//   var orderAccepted = document.querySelector(".overlay--2");
//   var closeButton = document.querySelectorAll(".modal__close-button")[1];
//   var closeButton2 = orderAccepted.querySelector(".button");

//   var scrollX = window.scrollX;
//   var scrollY = window.scrollY;

//   if (orderForm) {
//     orderForm.addEventListener("submit", function (evt) {
//       evt.preventDefault();
//       overlay1.classList.remove("modal-show");
//       orderAccepted.classList.add("modal-show");
//     });
//   }

//   if (replyForm) {
//     replyForm.addEventListener("submit", function (evt) {
//       evt.preventDefault(); снимаем класс ошибки с инпута
//        if(!количество символов = нужному количеству) { добавляем класс, который вешает на инпут красный текст return}

//       orderAccepted.classList.add("modal-show");
//     });
//   }

//   if (detailsForm) {
//     detailsForm.addEventListener("submit", function (evt) {
//       evt.preventDefault();
//       window.onscroll = function () {
//         window.scrollTo(scrollX, scrollY);
//       };
//       orderAccepted.classList.add("modal-show");
//     });
//   }

//   if (closeButton) {
//     closeButton.addEventListener("click", function () {
//       orderAccepted.classList.remove("modal-show");
//       window.onscroll = function () {
//         return true;
//       };
//     });
//   }

//   if (closeButton2) {
//     closeButton2.addEventListener("click", function () {
//       orderAccepted.classList.remove("modal-show");
//       window.onscroll = function () {
//         return true;
//       };
//     });
//   }

//   window.addEventListener("keydown", function (evt) {
//     if (evt.keyCode === 27) {
//       if (orderAccepted.classList.contains("modal-show")) {
//         orderAccepted.classList.remove("modal-show");
//         window.onscroll = function () {
//           return true;
//         };
//       }
//     }
//   });
// })();
