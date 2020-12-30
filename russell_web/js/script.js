function openNav() {
  document.getElementById("overlay").style.width = "100%";
}

function closeNav() {
  document.getElementById("overlay").style.width = "0%";
}



$(document).ready(function() {

  /* Contact */
  /*https://formspree.io/*/
  $('.submit').click(function (event) {
    console.log('Click')

    var companyName = $('.companyname').val()
    var yourName = $('.yourname').val()
    var email = $('.email').val()
    var project = $('.project').val()
    var statusElm = $('.status')

    statusElm.empty()

    if(companyName.length >= 2) {
      statusElm.append("<div>companyName Valid</div>")
    } else {
      event.preventDefault()
      statusElm.append("<div>companyName Not Valid</div>")
    }

    if(yourName.length >= 2) {
      statusElm.append("<div>yourName Valid</div>")
    } else {
      event.preventDefault()
      statusElm.append("<div>yourName Not Valid</div>")
    }

    if(email.length >= 5 && email.includes('@') && email.includes('.')) {
      statusElm.append("<div>Email Valid</div>")
    } else {
      event.preventDefault()
      statusElm.append("<div>Email Not Valid</div>")
    }

    if(project.length >= 2) {
      statusElm.append("<div>project Valid</div>")
    } else {
      event.preventDefault()
      statusElm.append("<div>project Not Valid</div>")
    }

  })
});


function changeDot() {
  const scrollValue = $(window).scrollTop();
  const heightSec2 = $('.about').offset().top;
  const heightSec3 = $('.logo').offset().top;
  const heightSec4 = $('.print').offset().top;
  const heightSec5 = $('.vi').offset().top;
  const heightSec6 = $('.mail').offset().top;
  const heightSec7 = $('.contact').offset().top;
  const heightSec8= $('.footer').offset().top;

  if (scrollValue < heightSec2) {
      $('aside li').not('.bar1').removeClass('active');
      $('.bar1').addClass('active');
  } else if (scrollValue < heightSec3) {
      $('aside li').not('.bar2').removeClass('active');
      $('.bar2').addClass('active');
  } else if (scrollValue < heightSec4) {
      $('aside li').not('.bar3').removeClass('active');
      $('.bar3').addClass('active');
  } else if (scrollValue < heightSec5) {
      $('aside li').not('.bar4').removeClass('active');
      $('.bar4').addClass('active');
  } else if (scrollValue < heightSec6) {
      $('aside li').not('.bar5').removeClass('active');
      $('.bar5').addClass('active');
  } else if (scrollValue < heightSec7) {
      $('aside li').not('.bar6').removeClass('active');
      $('.bar6').addClass('active');
  } else if (scrollValue < heightSec8) {
      $('aside li').not('.bar7').removeClass('active');
      $('.bar7').addClass('active');
  } else {
      $('aside li').not('.bar8').removeClass('active');
      $('.bar8').addClass('active');
  }
}

$(window).on("scroll", changeDot)

$('aside li').on('click', function () {
  const goToSection = '.s' + $(this).attr('id');
  $('body, html').animate({
      scrollTop: $(goToSection).offset().top + 1
  })
})