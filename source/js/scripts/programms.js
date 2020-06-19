(function () {
  var tabContainer = document.querySelector(".jsTabs");
  var tabsList = document.querySelectorAll(".programms__tab");
  var tabs = Array.from(tabsList);
  var header = document.querySelector(".jsHeader");
  var paragraph1 = document.querySelector(".jsP1");
  var paragraph2 = document.querySelector(".jsP2");

  if (tabContainer) {
    tabContainer.addEventListener("click", function (evt) {
      var tab = evt.target.closest(".programms__tab");

      if (tab.classList.contains("programms__tab--active")) return;
      tabs.forEach(function (el) {
        el.classList.remove("programms__tab--active");
      });
      var paragraph1Text = paragraph1.textContent;
      var paragraph2Text = paragraph2.textContent;
      tab.classList.add("programms__tab--active");

      switch (tab.dataset.info) {
        case "culture":
          header.textContent = "Общие";
          paragraph1.textContent = paragraph1Text;
          paragraph2.textContent = paragraph2Text;
          break;
        case "study":
          header.textContent = "Академические";
          paragraph1.textContent = paragraph1Text;
          paragraph2.textContent = paragraph2Text;
          break;
        case "business":
          header.textContent = "Стажировки";
          paragraph1.textContent = paragraph1Text;
          paragraph2.textContent = paragraph2Text;
          break;
        case "volonteur":
          header.textContent = "Волонтёрство";
          paragraph1.textContent = paragraph1Text;
          paragraph2.textContent = paragraph2Text;
          break;
        case "religion":
          header.textContent = "Религиозные";
          paragraph1.textContent = paragraph1Text;
          paragraph2.textContent = paragraph2Text;
          break;
      }
    });
  }
})();
