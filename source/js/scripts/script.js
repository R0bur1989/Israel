(function () {
  "use strict";
  var orderCall = document.querySelector(".jsCall");
  var orderCallWindow = document.querySelector(".jsOrderCallWindow");
  var closeButton = document.querySelector(".modal__close-button");

  if (orderCall) {
    orderCall.addEventListener("click", function (evt) {
      evt.preventDefault();
      orderCallWindow.classList.add("modal-show");
    });
  }

  if (closeButton) {
    closeButton.addEventListener("click", function () {
      orderCallWindow.classList.remove("modal-show");
    });
  }

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (orderCallWindow.classList.contains("modal-show")) {
        orderCallWindow.classList.remove("modal-show");
      }
    }
  });
})();
