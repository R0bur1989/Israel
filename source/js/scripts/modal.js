// (function () {
//   "use strict";
//   var orderCall = document.querySelector(".jsCall");
//   var overlay = document.querySelector(".overlay--1");
//   var closeButton = document.querySelector(".modal__close-button");
//   var body =  document.querySelector("body");

//   var isStorageSupport = true;
//   var storageName = "";
//   var storageTel = "";

//   var form = overlay.querySelector(".modal__form");
//   var userName = overlay.querySelector("[name=name]");
//   var phone = overlay.querySelector("[name=tel]");
//   var check = form.querySelector("#agreement");

//   try {
//     storageName = localStorage.getItem("name");
//     storageTel = localStorage.getItem("tel");
//   } catch (err) {
//     isStorageSupport = false;
//   }

//   if (orderCall) {
//     orderCall.addEventListener("click", function (evt) {
//       evt.preventDefault();
//       body.classList.add("overflow-hidden");
//       overlay.classList.add("modal-show");
//       if (storageName) {
//         userName.value = storageName;
//         if (storageTel) {
//           phone.value = storageTel;
//           phone.focus();
//         }
//       } else {
//         userName.focus();
//       }
//     });
//   }

//   if (form) {
//     form.addEventListener("submit", function (evt) {
//       if (!check.checked) {
//         evt.preventDefault();
//         alert("Нужно Ваше согласие на обработку персональных данных");
//       } else {
//         if (isStorageSupport) {
//           localStorage.setItem("name", userName.value);
//           localStorage.setItem("tel", phone.value);
//         }
//       }
//     });
//   }

//   if (closeButton) {
//     closeButton.addEventListener("click", function () {
//       overlay.classList.remove("modal-show");
//       body.classList.remove("overflow-hidden");
//     });
//   }

//   window.addEventListener("keydown", function (evt) {
//     if (evt.keyCode === 27) {
//       if (overlay.classList.contains("modal-show")) {
//         overlay.classList.remove("modal-show");
//         body.classList.remove("overflow-hidden");
//       }
//     }
//   });

//   overlay.addEventListener("click", function (evt) {
//     var orderCallWindow = evt.target.closest("article");
//     if (orderCallWindow.classList.contains("modal")) return;
//     overlay.classList.remove("modal-show");
//     body.classList.remove("overflow-hidden");
//   });
// })();
