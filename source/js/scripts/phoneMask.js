(function () {
  $(document).ready(function () {
    // $(".tel").mask("+7 (999) 999 99 99");
    $('.tel').mask('+7 (000) 000 00 00', {'translation': {0: {pattern: /[0-9*]/}}});
  });
})();
