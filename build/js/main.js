!function(){"use strict";var e=document.querySelector(".jsFaq");e&&e.addEventListener("click",function(e){e.target.closest("li").children[1].classList.toggle("faq__hide")})}(),function(){"use strict";var t=document.querySelector(".jsOrderCallWindow"),e=document.querySelector(".modal__form"),o=document.querySelector(".reply__form"),s=document.querySelector(".details__form"),n=document.querySelector(".jsOrderAccepted"),r=document.querySelectorAll(".modal__close-button")[1],c=n.querySelector(".button");e&&e.addEventListener("submit",function(e){e.preventDefault(),t.classList.remove("modal-show"),n.classList.add("modal-show")}),o&&o.addEventListener("submit",function(e){e.preventDefault(),n.classList.add("modal-show")}),s&&s.addEventListener("submit",function(e){e.preventDefault(),n.classList.add("modal-show")}),r&&r.addEventListener("click",function(){n.classList.remove("modal-show")}),c&&c.addEventListener("click",function(){n.classList.remove("modal-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&n.classList.contains("modal-show")&&n.classList.remove("modal-show")})}(),$(document).ready(function(){$(".tel").mask("0-000-000-00-00")}),function(){var e=document.querySelector(".jsTabs"),t=document.querySelectorAll(".programms__tab"),o=Array.from(t),s=document.querySelector(".jsHeader"),n=document.querySelector(".jsP1"),r=document.querySelector(".jsP2"),c="Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto cupiditate porro iste natus beatae ipsam, illum vitae sequi eius reiciendis at repellat quo perspiciatis corrupti officia unde quis exercitationem doloribus!";e&&e.addEventListener("click",function(e){var t=e.target.closest(".programms__tab");if(!t.classList.contains("programms__tab--active"))switch(o.forEach(function(e){e.classList.remove("programms__tab--active")}),t.classList.add("programms__tab--active"),t.dataset.info){case"culture":s.textContent="Общие",n.textContent=c,r.textContent=c;break;case"study":s.textContent="Академические",n.textContent="Провести семестр или год за рубежом, знакомясь с различными культурами и идеями, традициями и стилем жизни — вот что такое учеба за границей! Израиль — это не только центр религиозного мира, это также академический центр, живая лаборатория идей и творческого исследования.",r.textContent="Может быть, Вы заинтересованы в изучении социологии, мира, юриспруденции, биологии, сравнительной религии, законодательного и делового администрирования или искусства? Здесь, в Израиле, Вы сможете изучить все это в удивительной университетской среде.";break;case"business":s.textContent="Стажировки",n.textContent=c,r.textContent=c;break;case"volonteur":s.textContent="Волонтёрство",n.textContent=c,r.textContent=c;break;case"religion":s.textContent="Религиозные",n.textContent=c,r.textContent=c}})}(),function(){"use strict";var e=document.querySelector(".jsCall"),t=document.querySelector(".jsOrderCallWindow"),o=document.querySelector(".modal__close-button");e&&e.addEventListener("click",function(e){e.preventDefault(),t.classList.add("modal-show")}),o&&o.addEventListener("click",function(){t.classList.remove("modal-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&t.classList.contains("modal-show")&&t.classList.remove("modal-show")})}(),function(){"use strict";var e=document.querySelector(".slider"),t=document.querySelectorAll(".slider__item"),o=Array.from(t),s=document.querySelector(".jsImg"),n=document.querySelector(".jsGalleryP");e&&e.addEventListener("click",function(e){var t=e.target.closest(".slider__item");if(!t.classList.contains("slider__item--active"))switch(o.forEach(function(e){e.classList.remove("slider__item--active")}),t.classList.add("slider__item--active"),t.dataset.info){case"excursion":s.src="img/excursion-mobile.png",n.textContent="Экскурсии по Израилю и знакомство с его историей";break;case"Hebrew":s.src="img/Hebrew-mobile.png",n.textContent="Изучение иврита";break;case"profession":s.src="img/profession-mobile.png",n.textContent="Обучение современным навыкам и профессиям";break;case"artprojects":s.src="img/artprojects-mobile.png",n.textContent="Совместные творческие проекты с израильской молодёжью";break;case"leadership":s.src="img/leadership-mobile.png",n.textContent="Развитие лидерства"}})}();