(function () {
var tabContainer = document.querySelector(".jsTabs");
var tabsList = document.querySelectorAll(".programms__tab");
var tabs = Array.from(tabsList);

if (tabContainer) {
  tabContainer.addEventListener("click", function(evt) {
    var tab = evt.target.closest(".programms__tab");

    if (tab.classList.contains("programms__tab--active")) return;
    tabs.forEach(function(el) {
      el.classList.remove("programms__tab--active");
    });
    tab.classList.add("programms__tab--active");
  })
}
}());
