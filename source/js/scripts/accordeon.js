(function () {
  'use strict';
  var faq = document.querySelector(".jsFaq");


  if (faq) {
    faq.addEventListener("click", function(evt) {
      var target = evt.target;

      if( target.closest("li").children[1].style.display === "none") {
        target.closest("li").children[1].style.display = "block";
      } else {
        target.closest("li").children[1].style.display = "none";
      }
    })
  }
  })();
