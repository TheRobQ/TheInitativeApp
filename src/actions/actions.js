import store from '../store'
var actor = [];
var slideIndex = 0;

var random = function() {
  return Math.floor((Math.random() * 20) + 1)
}

function showSlides() {
  $('.mySlides').each(function() {
    $('.mySlides').addClass('hide');
    //console.log($('.mySlides').length);
  })
  slideIndex++;
  if (slideIndex > $('.mySlides').length - 1) {
    slideIndex = 0;
  }
  $('.mySlides').eq(slideIndex).removeClass('hide');
  //console.log(slideIndex);
}
setInterval(showSlides, 10000);
