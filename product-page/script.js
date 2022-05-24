$(document).ready(function() {

  $('.color-choose input').on('click', function() {
      var headphonesColor = $(this).attr('data-image');

      $('.active').removeClass('active');
      $('.left-column img[data-image = ' + headphonesColor + ']').addClass('active');
      $(this).addClass('active');
  });

});

$("button").click(function() {
  $('html, body').animate({
    scrollTop: $("#anchor").offset().top
  }, 1000);
});
