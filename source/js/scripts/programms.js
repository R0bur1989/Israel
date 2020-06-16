(function () {
  var tabContainer = document.querySelector(".jsTabs");
  var tabsList = document.querySelectorAll(".programms__tab");
  var tabs = Array.from(tabsList);
  var header = document.querySelector(".jsHeader");
  var paragraph1 = document.querySelector(".jsP1");
  var paragraph2 = document.querySelector(".jsP2");
  var textCap =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto cupiditate porro iste natus beatae ipsam, illum vitae sequi eius reiciendis at repellat quo perspiciatis corrupti officia unde quis exercitationem doloribus!";

  if (tabContainer) {
    tabContainer.addEventListener("click", function (evt) {
      var tab = evt.target.closest(".programms__tab");

      if (tab.classList.contains("programms__tab--active")) return;
      tabs.forEach(function (el) {
        el.classList.remove("programms__tab--active");
      });
      tab.classList.add("programms__tab--active");

      switch (tab.dataset.info) {
        case "culture":
          header.textContent = "Общие";
          paragraph1.textContent = textCap;
          paragraph2.textContent = textCap;
          break;
        case "study":
          header.textContent = "Академические";
          paragraph1.textContent =
            "Провести семестр или год за рубежом, знакомясь с различными культурами и идеями, традициями и стилем жизни — вот что такое учеба за границей! Израиль — это не только центр религиозного мира, это также академический центр, живая лаборатория идей и творческого исследования.";
          paragraph2.textContent =
            "Может быть, Вы заинтересованы в изучении социологии, мира, юриспруденции, биологии, сравнительной религии, законодательного и делового администрирования или искусства? Здесь, в Израиле, Вы сможете изучить все это в удивительной университетской среде.";
          break;
        case "business":
          header.textContent = "Стажировки";
          paragraph1.textContent = textCap;
          paragraph2.textContent = textCap;
          break;
        case "volonteur":
          header.textContent = "Волонтёрство";
          paragraph1.textContent = textCap;
          paragraph2.textContent = textCap;
          break;
        case "religion":
          header.textContent = "Религиозные";
          paragraph1.textContent = textCap;
          paragraph2.textContent = textCap;
          break;
      }
    });
  }
})();
