(function () {
  'use strict';
  var orderCallWindow = document.querySelector(".jsOrderCallWindow");
  var orderForm = document.querySelector(".modal__form");
  var replyForm = document.querySelector(".reply__form");
  var detailsForm = document.querySelector(".details__form");
  var orderAccepted = document.querySelector(".jsOrderAccepted");
  var closeButton = document.querySelectorAll(".modal__close-button")[1];
  var closeButton2 = orderAccepted.querySelector(".button");


  if (orderForm) {
    orderForm.addEventListener("submit", function(evt){
      evt.preventDefault();
      orderCallWindow.classList.remove("modal-show");
      orderAccepted.classList.add("modal-show");
    })
  }

  if (replyForm) {
    replyForm.addEventListener("submit", function(evt){
      evt.preventDefault();
      orderAccepted.classList.add("modal-show");
    })
  }

   if (detailsForm) {
    detailsForm.addEventListener("submit", function(evt){
      evt.preventDefault();
      orderAccepted.classList.add("modal-show");
    })
  }

  if (closeButton) {
    closeButton.addEventListener("click", function () {
      orderAccepted.classList.remove("modal-show");
    });
  }

  if (closeButton2) {
    closeButton2.addEventListener("click", function () {
      orderAccepted.classList.remove("modal-show");
    });
  }

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (orderAccepted.classList.contains("modal-show")) {
        orderAccepted.classList.remove("modal-show");
      }
    }
  });
  })();
