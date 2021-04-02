function openNav() {
  document.getElementById("overlay").classList.toggle("active");
}

function closeNav() {
  document.getElementById("overlay").classList.remove("active");
}

function changeDot() {

  let rightNavLine;

  if ($("#line-index")[0]){
    rightNavLine = "line-index";
  } else if ($("#line-about")[0]) {
    rightNavLine = "line-about";
  }

  var lineHeight = document.getElementById(rightNavLine);  

  const scrollValue = $(window).scrollTop();
  const heightSec2 = $('#section2').offset().top;
  const heightSec3 = $('#section3').offset().top;
  const heightSec4 = $('#section4').offset().top;
  const heightSec5 = $('#section5').offset().top;
  const heightSec6 = $('#section6').offset().top;
  const heightSec7 = $('#section7').offset().top;
  const heightSec8= $('#section8').offset().top;

  const progress1 = scrollValue / heightSec2 * 100;
  const progress2 = (scrollValue - heightSec2) / (heightSec3 - heightSec2) * 100;
  const progress3 = (scrollValue - heightSec3) / (heightSec4 - heightSec3) * 100;
  const progress4 = (scrollValue - heightSec4) / (heightSec5 - heightSec4) * 100;
  const progress5 = (scrollValue - heightSec5) / (heightSec6 - heightSec5) * 100;
  const progress6 = (scrollValue - heightSec6) / (heightSec7 - heightSec6) * 100;
  const progress7 = (scrollValue - heightSec7) / (heightSec8 - heightSec7) * 100;

  const curSec2Height = document.getElementById("section2").getBoundingClientRect().top;
  const curSec5Height = document.getElementById("section5").getBoundingClientRect().top;
  const curSec5BotHeight = document.getElementById("section5").getBoundingClientRect().bottom;
  const curSec6Height = document.getElementById("section6").getBoundingClientRect().top;
  const curSec7Height = document.getElementById("section7").getBoundingClientRect().top;
  const curSec7BotHeight = document.getElementById("section7").getBoundingClientRect().bottom;

  console.log(progress1);
  /*if (scrollValue < heightSec2) {
    $('aside li').not('.bar1').removeClass(rightNavLine);
    $('.bar1').addClass(rightNavLine);
    $('.' + rightNavLine).css({"transform":"translateY(" + progress1 + "%)"});
  } else if (scrollValue < heightSec3) {
    $('aside li').not('.bar2').removeClass(rightNavLine);
    $('.bar2').addClass(rightNavLine);
    $('.' + rightNavLine).css({"transform":"translateY(" + progress2 + "%)"});    
  } else if (scrollValue < heightSec4) {
    $('aside li').not('.bar3').removeClass(rightNavLine);
    $('.bar3').addClass(rightNavLine);
    $('.' + rightNavLine).css({"transform":"translateY(" + progress3 + "%)"});
  } else if (scrollValue < heightSec5) {
    $('aside li').not('.bar4').removeClass(rightNavLine);
    $('.bar4').addClass(rightNavLine);
    $('.' + rightNavLine).css({"transform":"translateY(" + progress4 + "%)"});
  } else if (scrollValue < heightSec6) {
    $('aside li').not('.bar5').removeClass(rightNavLine);
    $('.bar5').addClass(rightNavLine);
    $('.' + rightNavLine).css({"transform":"translateY(" + progress5 + "%)"});
  } else if (scrollValue < heightSec7) {
    $('aside li').not('.bar6').removeClass(rightNavLine);
    $('.bar6').addClass(rightNavLine);
    $('.' + rightNavLine).css({"transform":"translateY(" + progress6 + "%)"});
  } else if (scrollValue < heightSec8) {
    $('aside li').not('.bar7').removeClass(rightNavLine);
    $('.bar7').addClass(rightNavLine);
    $('.' + rightNavLine).css({"transform":"translateY(" + progress7 + "%)"});
  } else {
    $('aside li').not('.bar8').removeClass(rightNavLine);
    $('.bar8').addClass(rightNavLine);
  }*/

  if (rightNavLine === "line-index") {
    console.log(rightNavLine);
    if (scrollValue < heightSec2) {
      $('aside li').not('.bar1').removeAttr('id', rightNavLine);
      $('aside li').not('.bar1').removeClass('line-black');
      $('aside li').not('.bar1').removeClass('line-yellow');
      $('.bar1').removeClass('line-yellow');
      $('.bar1').attr('id', rightNavLine);
      $('.bar1').addClass('line-black');
      $('#' + rightNavLine).css({"transform":"translateY(" + progress1 + "%)"}); 
      if (curSec2Height <= lineHeight.getBoundingClientRect().top) {
        $('.bar1').removeClass('line-black');
        $('.bar1').addClass('line-yellow');
      }
    } else if (scrollValue < heightSec3) {
      $('aside li').not('.bar2').removeAttr('id', rightNavLine);
      $('aside li').not('.bar2').removeClass('line-black');
      $('aside li').not('.bar2').removeClass('line-yellow');
      $('.bar2').attr('id', rightNavLine);
      $('.bar2').addClass('line-yellow');
      $('#' + rightNavLine).css({"transform":"translateY(" + progress2 + "%)"});
    } else if (scrollValue < heightSec4) {
      $('aside li').not('.bar3').removeAttr('id', rightNavLine);
      $('aside li').not('.bar3').removeClass('line-black');
      $('aside li').not('.bar3').removeClass('line-yellow');
      $('.bar3').attr('id', rightNavLine);
      $('.bar3').addClass('line-yellow');
      $('#' + rightNavLine).css({"transform":"translateY(" + progress3 + "%)"});
    } else if (scrollValue < heightSec5) {
      $('aside li').not('.bar4').removeAttr('id', rightNavLine);
      $('aside li').not('.bar4').removeClass('line-black');
      $('aside li').not('.bar4').removeClass('line-yellow');
      $('.bar4').attr('id', rightNavLine);
      $('.bar4').addClass('line-yellow');
      $('#' + rightNavLine).css({"transform":"translateY(" + progress4 + "%)"});
    } else if (scrollValue < heightSec6) {
      $('aside li').not('.bar5').removeAttr('id', rightNavLine);
      $('aside li').not('.bar5').removeClass('line-black');
      $('aside li').not('.bar5').removeClass('line-yellow');
      $('.bar5').attr('id', rightNavLine);
      $('.bar5').addClass('line-yellow');
      $('#' + rightNavLine).css({"transform":"translateY(" + progress5 + "%)"});
      if (curSec6Height <= lineHeight.getBoundingClientRect().top) {
        $('.bar5').removeClass('line-yellow');
        $('.bar5').addClass('line-black');
      }
    } else if (scrollValue < heightSec7) {
      $('aside li').not('.bar6').removeAttr('id', rightNavLine);
      $('aside li').not('.bar6').removeClass('line-black');
      $('aside li').not('.bar6').removeClass('line-yellow');
      $('.bar6').attr('id', rightNavLine);
      $('.bar6').addClass('line-black');
      $('#' + rightNavLine).css({"transform":"translateY(" + progress5 + "%)"});
      if (curSec7Height <= lineHeight.getBoundingClientRect().top) {
        $('.bar6').removeClass('line-black');
        $('.bar6').addClass('line-yellow');
      }
    } else if (scrollValue < heightSec8) {
      $('aside li').not('.bar7').removeAttr('id', rightNavLine);
      $('aside li').not('.bar7').removeClass('line-black');
      $('aside li').not('.bar7').removeClass('line-yellow');
      $('.bar7').attr('id', rightNavLine);
      $('.bar7').addClass('line-yellow');
      $('#' + rightNavLine).css({"transform":"translateY(" + progress6 + "%)"});
    } else {
      $('aside li').not('.bar8').removeAttr('id', rightNavLine);
      $('aside li').not('.bar8').removeClass('line-black');
      $('aside li').not('.bar8').removeClass('line-yellow');
      $('.bar8').attr('id', rightNavLine);
      $('.bar8').addClass('line-yellow');
      $('#' + rightNavLine).css({"transform":"translateY(" + progress7 + "%)"});
    }
  } else {
    if (scrollValue < heightSec2) {
      $('aside li').not('.bar1').removeAttr('id', rightNavLine);
      $('aside li').not('.bar1').removeClass('line-black');
      $('aside li').not('.bar1').removeClass('line-yellow');
      $('.bar1').attr('id', rightNavLine);
      $('.bar1').removeClass('line-yellow');
      $('.bar1').addClass('line-black');
      $('#' + rightNavLine).css({"transform":"translateY(" + progress1 + "%)"}); 
    } else if (scrollValue < heightSec3) {
      $('aside li').not('.bar2').removeAttr('id', rightNavLine);
      $('aside li').not('.bar2').removeClass('line-black');
      $('aside li').not('.bar2').removeClass('line-yellow');
      $('.bar2').attr('id', rightNavLine);
      $('.bar2').removeClass('line-yellow');
      $('.bar2').addClass('line-black');
      $('#' + rightNavLine).css({"transform":"translateY(" + progress2 + "%)"}); 
    } else if (scrollValue < heightSec4) {
      $('aside li').not('.bar3').removeAttr('id', rightNavLine);
      $('aside li').not('.bar3').removeClass('line-black');
      $('aside li').not('.bar3').removeClass('line-yellow');
      $('.bar3').attr('id', rightNavLine);
      $('.bar3').removeClass('line-yellow');
      $('.bar3').addClass('line-black');
      $('#' + rightNavLine).css({"transform":"translateY(" + progress3 + "%)"}); 
    } else if (scrollValue < heightSec5) {
      $('aside li').not('.bar4').removeAttr('id', rightNavLine);
      $('aside li').not('.bar4').removeClass('line-black');
      $('aside li').not('.bar4').removeClass('line-yellow');
      $('.bar4').attr('id', rightNavLine);
      $('.bar4').removeClass('line-yellow');
      $('.bar4').addClass('line-black');
      $('#' + rightNavLine).css({"transform":"translateY(" + progress4 + "%)"});
      if (curSec5Height <= lineHeight.getBoundingClientRect().top) {
        $('.bar4').removeClass('line-black');
        $('.bar4').addClass('line-yellow');
      }
    } else if (scrollValue < heightSec6) {
      $('aside li').not('.bar5').removeAttr('id', rightNavLine);
      $('aside li').not('.bar5').removeClass('line-black');
      $('aside li').not('.bar5').removeClass('line-yellow');
      $('.bar5').attr('id', rightNavLine);
      $('.bar5').addClass('line-yellow');
      $('#' + rightNavLine).css({"transform":"translateY(" + progress5 + "%)"});
      if (curSec5BotHeight <= lineHeight.getBoundingClientRect().top) {
        $('.bar5').removeClass('line-yellow');
        $('.bar5').addClass('line-black');
      }
    } else if (scrollValue < heightSec7) {
      $('aside li').not('.bar6').removeAttr('id', rightNavLine);
      $('aside li').not('.bar6').removeClass('line-black');
      $('aside li').not('.bar6').removeClass('line-yellow');
      $('.bar6').attr('id', rightNavLine);
      $('.bar6').addClass('line-black');
      $('#' + rightNavLine).css({"transform":"translateY(" + progress5 + "%)"});
    } else if (scrollValue < heightSec8) {
      $('aside li').not('.bar7').removeAttr('id', rightNavLine);
      $('aside li').not('.bar7').removeClass('line-black');
      $('aside li').not('.bar7').removeClass('line-yellow');
      $('.bar7').attr('id', rightNavLine);
      $('.bar7').addClass('line-black');
      $('#' + rightNavLine).css({"transform":"translateY(" + progress6 + "%)"});
      if (curSec7BotHeight <= lineHeight.getBoundingClientRect().top) {
        $('.bar7').removeClass('line-black');
        $('.bar7').addClass('line-yellow');
      }
    } else {
      $('aside li').not('.bar8').removeAttr('id', rightNavLine);
      $('aside li').not('.bar8').removeClass('line-black');
      $('aside li').not('.bar8').removeClass('line-yellow');
      $('.bar8').attr('id', rightNavLine);
      $('.bar8').addClass('line-yellow');
      $('#' + rightNavLine).css({"transform":"translateY(" + progress7 + "%)"});
    }
  }

  
  
}

function mailLocationTextAnimation() {
  const top  = window.pageYOffset + window.innerHeight,
      isVisibleMail = top > document.querySelector('#section6').offsetTop;
      isVisibleLocation = top > document.querySelector('#section2').offsetTop;
       
   if (isVisibleMail) {
     document.getElementsByClassName('mail__content')[0].classList.add('mail__content--active');
   }
   if (isVisibleLocation) {
    document.getElementsByClassName('location__content--text')[0].classList.add('location__content--active');
  }
}

$(window).on("scroll", changeDot)

$('aside li').on('click', function () {
  const goToSection = '.s' + $(this).attr('id');
  $('body, html').animate({
      scrollTop: $(goToSection).offset().top + 1
  })
})

$(window).on("scroll", mailLocationTextAnimation)


