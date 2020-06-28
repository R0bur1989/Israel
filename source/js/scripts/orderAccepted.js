(function () {
  "use strict";
  var overlay = document.querySelector(".overlay");
  var replyForm = document.querySelector(".reply__form");
  var detailsForm = document.querySelector(".details__form");
  var orderAccepted = document.querySelector(".jsOrderAccepted");
  var closeButton = document.querySelectorAll(".modal__close-button")[1];
  var closeButton2 = orderAccepted.querySelector(".button");
  var replyPhone = replyForm.querySelector("[name=replyTel]");
  var detailsPhone = detailsForm.querySelector("[name=detailsTel]");
  var body =  document.querySelector("body");



  if (replyForm) {
    replyForm.addEventListener("submit", function (evt) {
      replyPhone.classList.remove("input-error");
      evt.preventDefault(); //снимаем класс ошибки с инпута
      if(replyPhone.value.length < 18)
      {
        return replyPhone.classList.add("input-error");
      }
      overlay.classList.add("modal-show");
      orderAccepted.classList.add("modal-show");
    });
  }

  if (detailsForm) {
    detailsForm.addEventListener("submit", function (evt) {
      detailsPhone.classList.remove("input-error");
      evt.preventDefault();
      if(detailsPhone.value.length < 18)
      {
        return detailsPhone.classList.add("input-error");
      }
      overlay.classList.add("modal-show");
      orderAccepted.classList.add("modal-show");
    });
  }

  if (closeButton) {
    closeButton.addEventListener("click", function () {
      orderAccepted.classList.remove("modal-show");
      overlay.classList.remove("modal-show");
      body.classList.remove("overflow-hidden");
    });
  }

  if (closeButton2) {
    closeButton2.addEventListener("click", function () {
      orderAccepted.classList.remove("modal-show");
      overlay.classList.remove("modal-show");
      body.classList.remove("overflow-hidden");
    });
  }

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (orderAccepted.classList.contains("modal-show")) {
        orderAccepted.classList.remove("modal-show");
        overlay.classList.remove("modal-show");
        body.classList.remove("overflow-hidden");
      }
    }
  });
})();
