function openNav() {
  document.getElementById("overlay").classList.toggle("active");
}

function closeNav() {
  document.getElementById("overlay").classList.remove("active");
}

function changeDot() {
  const scrollValue = $(window).scrollTop();
  const heightSec2 = $('#section2').offset().top;
  const heightSec3 = $('#section3').offset().top;
  const heightSec4 = $('#section4').offset().top;
  const heightSec5 = $('#section5').offset().top;
  const heightSec6 = $('#section6').offset().top;
  const heightSec7 = $('#section7').offset().top;
  const heightSec8= $('#section8').offset().top;

  var progress1 = scrollValue / heightSec2 * 100;
  var progress2 = (scrollValue - heightSec2) / (heightSec3 - heightSec2) * 100;
  var progress3 = (scrollValue - heightSec3) / (heightSec4 - heightSec3) * 100;
  var progress4 = (scrollValue - heightSec4) / (heightSec5 - heightSec4) * 100;
  var progress5 = (scrollValue - heightSec5) / (heightSec6 - heightSec5) * 100;
  var progress6 = (scrollValue - heightSec6) / (heightSec7 - heightSec6) * 100;
  var progress7 = (scrollValue - heightSec7) / (heightSec8 - heightSec7) * 100;

  if (scrollValue < heightSec2) {
    $('aside li').not('.bar1').removeClass('rightNav-line');
    $('.bar1').addClass('rightNav-line');
    $('.rightNav-line').css({"transform":"translateY(" + progress1 + "%)"});
  } else if (scrollValue < heightSec3) {
    $('aside li').not('.bar2').removeClass('rightNav-line');
    $('.bar2').addClass('rightNav-line');
    $('.rightNav-line').css({"transform":"translateY(" + progress2 + "%)"});
  } else if (scrollValue < heightSec4) {
    $('aside li').not('.bar3').removeClass('rightNav-line');
    $('.bar3').addClass('rightNav-line');
    $('.rightNav-line').css({"transform":"translateY(" + progress3 + "%)"});
  } else if (scrollValue < heightSec5) {
    $('aside li').not('.bar4').removeClass('rightNav-line');
    $('.bar4').addClass('rightNav-line');
    $('.rightNav-line').css({"transform":"translateY(" + progress4 + "%)"});
  } else if (scrollValue < heightSec6) {
    $('aside li').not('.bar5').removeClass('rightNav-line');
    $('.bar5').addClass('rightNav-line');
    $('.rightNav-line').css({"transform":"translateY(" + progress5 + "%)"});
  } else if (scrollValue < heightSec7) {
    $('aside li').not('.bar6').removeClass('rightNav-line');
    $('.bar6').addClass('rightNav-line');
    $('.rightNav-line').css({"transform":"translateY(" + progress6 + "%)"});
  } else if (scrollValue < heightSec8) {
    $('aside li').not('.bar7').removeClass('rightNav-line');
    $('.bar7').addClass('rightNav-line');
    $('.rightNav-line').css({"transform":"translateY(" + progress7 + "%)"});
  } else {
    $('aside li').not('.bar8').removeClass('rightNav-line');
    $('.bar8').addClass('rightNav-line');
  }
  
}

$(window).on("scroll", changeDot)

$('aside li').on('click', function () {
  const goToSection = '.s' + $(this).attr('id');
  $('body, html').animate({
      scrollTop: $(goToSection).offset().top + 1
  })
})

document.addEventListener('scroll', function (e) {
  var top  = window.pageYOffset + window.innerHeight,
      isVisibleMail = top > document.querySelector('#section6').offsetTop;
      isVisibleLocation = top > document.querySelector('#section2').offsetTop;
       
   if (isVisibleMail) {
     document.getElementsByClassName('mail__content')[0].classList.add('mail__content--active');
   }
   if (isVisibleLocation) {
    document.getElementsByClassName('location__content--text')[0].classList.add('location__content--active');
  }
});