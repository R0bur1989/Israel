(function($) {
  $(function() {
    $(".jsTabs").on("click", ".programms__tab:not(.programms__tab--active)", function() {
      $(this)
        .addClass("programms__tab--active")
        .siblings()
        .removeClass("programms__tab--active")
        .closest("div.programms__container")
        .find("div.programms__info")
        .removeClass("programms__info--active")
        .eq($(this).index())
        .addClass("programms__info--active");
    });
  });
})(jQuery);
