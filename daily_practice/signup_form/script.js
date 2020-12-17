$(document).ready(function(){

  $('#signup').click(function(){
    $('.upperBox').css("transform", "translateX(80%)");
    $('.signinForm').addClass('nonedisplay');
    $('.signupForm').removeClass('nonedisplay');
  });

  $('#signin').click(function(){
    $('.upperBox').css("transform", "translateX(0)");
    $('.signupForm').addClass('nonedisplay');
    $('.signinForm').removeClass('nonedisplay');
  });
});
