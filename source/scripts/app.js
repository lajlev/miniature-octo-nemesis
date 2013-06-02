//=require vendor/jquery
//=require vendor/jquery.event.swipe
//=require vendor/unslider.min


//// Slider settings ////
$('.slider').unslider({
  speed: 500,               //  The speed to animate each slide (in milliseconds)
  delay: 9000,              //  The delay between slide animations (in milliseconds)
  keys: false,               //  Enable keyboard (left, right) arrow shortcuts
  dots: true,               //  Display dot navigation
  fluid: true              //  Support responsive design. May break non-responsive designs
});

//Slider next & prev btns
var unslider = $('.slider').unslider();

$('.unslider-arrow').click(function(e) {
  e.preventDefault();
  var fn = this.className.split(' ')[1];

  //  Either do unslider.data('unslider').next() or .prev() depending on the className
  unslider.data('unslider')[fn]();
});
