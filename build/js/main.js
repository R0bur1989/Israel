!function(){"use strict";var e=document.querySelector(".jsFaq");e&&e.addEventListener("click",function(e){var t=e.target;"none"===t.closest("li").children[1].style.display?t.closest("li").children[1].style.display="block":t.closest("li").children[1].style.display="none"})}(),function(){"use strict";var t=document.querySelector(".jsOrderCallWindow"),e=document.querySelector(".modal__form"),s=document.querySelector(".reply__form"),o=document.querySelector(".details__form"),c=document.querySelector(".jsOrderAccepted"),n=document.querySelectorAll(".modal__close-button")[1],r=c.querySelector(".button");e&&e.addEventListener("submit",function(e){e.preventDefault(),t.classList.remove("modal-show"),c.classList.add("modal-show")}),s&&s.addEventListener("submit",function(e){e.preventDefault(),c.classList.add("modal-show")}),o&&o.addEventListener("submit",function(e){e.preventDefault(),c.classList.add("modal-show")}),n&&n.addEventListener("click",function(){c.classList.remove("modal-show")}),r&&r.addEventListener("click",function(){c.classList.remove("modal-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&c.classList.contains("modal-show")&&c.classList.remove("modal-show")})}(),$(document).ready(function(){$(".tel").mask("0-000-000-00-00")}),function(){var e=document.querySelector(".jsTabs"),t=document.querySelectorAll(".programms__tab"),s=Array.from(t);e&&e.addEventListener("click",function(e){var t=e.target.closest(".programms__tab");t.classList.contains("programms__tab--active")||(s.forEach(function(e){e.classList.remove("programms__tab--active")}),t.classList.add("programms__tab--active"))})}(),function(){"use strict";var e=document.querySelector(".jsCall"),t=document.querySelector(".jsOrderCallWindow"),s=document.querySelector(".modal__close-button");e&&e.addEventListener("click",function(e){e.preventDefault(),t.classList.add("modal-show")}),s&&s.addEventListener("click",function(){t.classList.remove("modal-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&t.classList.contains("modal-show")&&t.classList.remove("modal-show")})}(),function(){"use strict";var e=document.querySelector(".slider"),t=document.querySelectorAll(".programms__tab"),s=Array.from(t);document.querySelector(".jsImg");e&&(console.log(e),console.log(s),e.addEventListener("click",function(e){var t=e.target.closest(".slider__item");t.classList.contains("slider__item--active")||t.addEventListener("click",function(){s.forEach(function(e){e.classList.remove("slider__item--active")}),t.classList.add("slider__item--active")})}))}();