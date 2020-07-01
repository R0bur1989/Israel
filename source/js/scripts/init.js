$(document).ready(function(){
  $('.slickSlider').slick(
    {
      arrows: false,
      dots: true,
      fade: true,
    });
});


// window.addEventListener("resize", function() {
//   if (window.innerWidth >= 1095) {
//     $('.gallerySlider').slick('unslick');
//     sliderIsLive = false;
//   }
//   else {
//     if (sliderIsLive) {
//       $('.gallerySlider').slick();
//       sliderIsLive = true;
//     }
//   }
// });
