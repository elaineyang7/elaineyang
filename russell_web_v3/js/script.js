function openNav() {
  document.getElementById("overlay").classList.toggle("active");
}

function closeNav() {
  document.getElementById("overlay").classList.remove("active");
}

function adjustLineHeight() {
  let rightNavLine;

  if ($("#line-index")[0]){
    rightNavLine = "line-index";
  } else if ($("#line-about")[0]) {
    rightNavLine = "line-about";
  }

  const documentHeight = $(document).height();
  const windowtHeight = $(window).height();
  const scrollHeight = documentHeight - windowtHeight;
  let rulerHeight;

  if ($(window).width() < 1680) {
    rulerHeight = 345;
  } else {
    rulerHeight = 540;
  }

  const lineHeight = rulerHeight - scrollHeight / documentHeight * rulerHeight;

  $('#' + rightNavLine).css({"height":"" + lineHeight + "px"});
}

function moveLine() {

  let rightNavLine;

  if ($("#line-index")[0]){
    rightNavLine = "line-index";
  } else if ($("#line-about")[0]) {
    rightNavLine = "line-about";
  }

  const documentHeight = $(document).height();
  const windowtHeight = $(window).height();
  const scrollHeight = documentHeight - windowtHeight;
  let rulerHeight;

  if ($(window).width() < 1680) {
    rulerHeight = 345;
  } else {
    rulerHeight = 540;
  }

  const lineHeight = rulerHeight - scrollHeight / documentHeight * rulerHeight;

  const scrollValue = $(window).scrollTop();
  const moveHeight = scrollValue / scrollHeight * (rulerHeight - lineHeight);

  $('#' + rightNavLine).css({"height":"" + lineHeight + "px"});
  $('#' + rightNavLine).css({"transform":"translateY(" + moveHeight + "px)"});

  const curLineHeight = document.getElementById(rightNavLine).getBoundingClientRect().top;
  const curSec2Height = document.getElementById("section2").getBoundingClientRect().top;
  const curSec5Height = document.getElementById("section5").getBoundingClientRect().top;
  const curSec5BotHeight = document.getElementById("section5").getBoundingClientRect().bottom;
  const curSec6Height = document.getElementById("section6").getBoundingClientRect().top;
  const curSec7Height = document.getElementById("section7").getBoundingClientRect().top;
  const curSec7BotHeight = document.getElementById("section7").getBoundingClientRect().bottom;

  if (rightNavLine === "line-index") {
    if (curLineHeight >= curSec2Height && curLineHeight <= curSec6Height || curLineHeight >= curSec7Height) {
      $('#' + rightNavLine).css({"background-color":"#FFC512"});
    } else {
      $('#' + rightNavLine).css({"background-color":"#2B2B2B"});
    }
  } else {
    if (curLineHeight >= curSec5Height && curLineHeight <= curSec5BotHeight || curLineHeight >= curSec7BotHeight) {
      $('#' + rightNavLine).css({"background-color":"#FFC512"});
    } else {
      $('#' + rightNavLine).css({"background-color":"#2B2B2B"});
    }
    const overlayImgHeight = curSec7BotHeight + (curSec7BotHeight - curSec7Height / 3.8);
    console.log(overlayImgHeight);
    console.log(scrollValue);
    if (scrollValue > overlayImgHeight) {
      $('.hobby__overlay--img').addClass('overlay__img--active');
    } else {
      $('.hobby__overlay--img').removeClass('overlay__img--active');
    }
  }
}

function mailLocationTextAnimation() {
  const top  = window.pageYOffset + window.innerHeight;
  const isVisibleMail = top > document.querySelector('#section6').offsetTop;
  const isVisibleLocation = top > document.querySelector('#section2').offsetTop;
  
  if (isVisibleMail) {
    document.getElementsByClassName('mail__content')[0].classList.add('mail__content--active');
  }
  if (isVisibleLocation) {
    document.getElementsByClassName('location__content--text')[0].classList.add('location__content--active');
  }
}

$(window).on("scroll", moveLine)

$('aside li').on('click', function () {
  const goToSection = '.s' + $(this).attr('id');
  $('body, html').animate({
      scrollTop: $(goToSection).offset().top + 1
  })
})

$(window).on("scroll", mailLocationTextAnimation)

$(document).ready(function(){
  adjustLineHeight();
})
