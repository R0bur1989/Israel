(function () {
  "use strict";
  var faq = document.querySelector(".jsFaq");

  if (faq) {
    faq.addEventListener("click", function (evt) {
      var target = evt.target;
      target.children[1].classList.toggle("faq__hide");
      //closest("li")
    });
  }
})();
