(function () {
  "use strict";
  var overlay = document.querySelector(".overlay");
  var orderForm = document.querySelector(".modal__form");
  var replyForm = document.querySelector(".reply__form");
  var detailsForm = document.querySelector(".details__form");
  var orderAccepted = document.querySelector(".jsOrderAccepted");
  var closeButton = document.querySelectorAll(".modal__close-button")[1];
  var closeButton2 = orderAccepted.querySelector(".button");
  var replyPhone = replyForm.querySelector("[name=replyTel]");
  var detailsPhone = detailsForm.querySelector("[name=detailsTel]");

  if (orderForm) {
    orderForm.addEventListener("submit", function (evt) {
      evt.preventDefault();
      orderForm.classList.remove("modal-show");
      orderAccepted.classList.add("modal-show");
    });
  }

  if (replyForm) {
    replyForm.addEventListener("submit", function (evt) {
      evt.preventDefault(); //снимаем класс ошибки с инпута
      if(replyPhone.value.length < 18)
      {
        return replyPhone.classList.add(".input-error");
      }
      overlay.classList.add("modal-show");
      orderAccepted.classList.add("modal-show");
    });
  }

  if (detailsForm) {
    detailsForm.addEventListener("submit", function (evt) {
      evt.preventDefault();
      if(detailsPhone.value.length < 18)
      {
        return detailsPhone.classList.add(".input-error");
      }
      overlay.classList.add("modal-show");
      orderAccepted.classList.add("modal-show");
    });
  }

  if (closeButton) {
    closeButton.addEventListener("click", function () {
      orderAccepted.classList.remove("modal-show");
      overlay.classList.remove("modal-show");
    });
  }

  if (closeButton2) {
    closeButton2.addEventListener("click", function () {
      orderAccepted.classList.remove("modal-show");
      overlay.classList.remove("modal-show");
    });
  }

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (orderAccepted.classList.contains("modal-show")) {
        orderAccepted.classList.remove("modal-show");
        overlay.classList.remove("modal-show");
      }
    }
  });
})();
