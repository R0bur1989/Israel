(function () {
  "use strict";
  var orderCall = document.querySelector(".jsCall");
  var overley = document.querySelector(".overley");
  var closeButton = document.querySelector(".modal__close-button");
  var scrollX = window.scrollX;
  var scrollY = window.scrollY;

  if (orderCall) {
    orderCall.addEventListener("click", function (evt) {
      evt.preventDefault();
      window.onscroll = function () {
        window.scrollTo(scrollX, scrollY);
      };
      overley.classList.add("modal-show");
    });
  }

  if (closeButton) {
    closeButton.addEventListener("click", function () {
      overley.classList.remove("modal-show");
      window.onscroll = function () {
        return true;
      };
    });
  }

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (overley.classList.contains("modal-show")) {
        overley.classList.remove("modal-show");
        window.onscroll = function () {
          return true;
        };
      }
    }
  });

      overley.addEventListener("click", function (evt) {
        var orderCallWindow = evt.target.closest("article");
      if (orderCallWindow.classList.contains("modal")) return;
      overley.classList.remove("modal-show");
    });

})();
