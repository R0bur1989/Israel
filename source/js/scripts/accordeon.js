(function () {
  "use strict";
  var faq = document.querySelector(".jsFaq");

  if (faq) {
    faq.addEventListener("click", function (evt) {
      var target = evt.target;
      target.closest("li").children[1].classList.toggle("faq__hide");
    });
  }
})();
