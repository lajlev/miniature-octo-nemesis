//=require vendor/jquery
//=require vendor/jquery.jribbble
//=require vendor/jquery.event.swipe
//=require vendor/unslider.min
//=require vendor/jquery.instagram

$(document).ready(function() {

  // API Ref: http://api.dribbble/players/:id/shots
  $.jribbble.getShotsByPlayerId('victorerixon', function (playerShots) {
    var html = [];
    $.each(playerShots.shots, function (i, shot) {
      html.push('<a href="' + shot.url + '" title="' + shot.title + '">');
      html.push('<img class="rounded" src="' + shot.image_url  + '" ');
      html.push('alt="' + shot.title + '"></a></li>');
    });

    $('#dribble-shots').html(html.join(''));
  }, {page: 1, per_page: 12});


  $("#instagram-image").instagram({
    userId: '1853198',
    show: 1,
    accessToken: '1853198.ab103e5.af22f08d75fd47d781a516698a2c2104',
    image_size: 'low_resolution'
  });
});


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
