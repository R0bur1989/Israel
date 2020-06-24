(function () {
  "use strict";
  var orderCall = document.querySelector(".jsCall");
  var overlay = document.querySelector(".overlay");
  var popup = document.querySelector(".jsOrderCallWindow");
  var popup2 = document.querySelector(".jsOrderAccepted");
  var closeButton = document.querySelector(".modal__close-button");
  var body =  document.querySelector("body");

  var isStorageSupport = true;
  var storageName = "";
  var storageTel = "";

  var form = popup.querySelector(".modal__form");
  var userName = popup.querySelector("[name=name]");
  var phone = popup.querySelector("[name=tel]");
  var check = form.querySelector("#agreement");

  try {
    storageName = localStorage.getItem("name");
    storageTel = localStorage.getItem("tel");
  } catch (err) {
    isStorageSupport = false;
  }

  if (orderCall) {
    orderCall.addEventListener("click", function (evt) {
      evt.preventDefault();
      body.classList.add("overflow-hidden");
      overlay.classList.add("modal-show");
      popup.classList.add("modal-show");
      if (storageName) {
        userName.value = storageName;
        if (storageTel) {
          phone.value = storageTel;
          phone.focus();
        }
      } else {
        userName.focus();
      }
    });
  }

  if (form) {
    form.addEventListener("submit", function (evt) {
      if (!check.checked) {
        evt.preventDefault();
        alert("Нужно Ваше согласие на обработку персональных данных");
      } else if(phone.value.length < 18)
      {
        evt.preventDefault();
        return phone.classList.add("input-error");
      }
      else {
        if (isStorageSupport) {
          localStorage.setItem("name", userName.value);
          localStorage.setItem("tel", phone.value);
        }
      }
    });
  }

  if (closeButton) {
    closeButton.addEventListener("click", function () {
      overlay.classList.remove("modal-show");
      popup.classList.remove("modal-show");
      popup2.classList.remove("modal-show");
      body.classList.remove("overflow-hidden");
    });
  }

  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      if (overlay.classList.contains("modal-show")) {
        overlay.classList.remove("modal-show");
        popup.classList.remove("modal-show");
        popup2.classList.remove("modal-show");
        body.classList.remove("overflow-hidden");
      }
    }
  });

  overlay.addEventListener("click", function (evt) {
    var target = evt.target;
    if (target.classList.contains("modal")) return;
    overlay.classList.remove("modal-show");
    popup.classList.remove("modal-show");
    popup2.classList.remove("modal-show");
    body.classList.remove("overflow-hidden");
  });
})();
