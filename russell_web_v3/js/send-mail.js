$(function(){
  
  var name = $(".yourname");
  var email = $(".email");
  var message = $(".message");

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  function countWords(str) {
    str = str.replace(/(^\s*)|(\s*$)/gi,"");
    str = str.replace(/[ ]{2,}/gi," ");
    str = str.replace(/\n /,"\n");
    return str.split(' ').length;
  }

  function nameValidate() {
    if (name.val().length === 0) {
      name.addClass("error");
      $("#yourname").addClass("name__valid");
      return false;
    } else {
      name.removeClass("error");
      $("#yourname").removeClass("name__valid");
      name.addClass("success");
    }
  }

  function emailValidate() {
    if (email.val().length === 0) {
      email.addClass("error");
      $("#email").addClass("email__valid");
      return false;
    } else if (validateEmail(email.val()) == false) {
      email.addClass("error");
      $("#email").addClass("email__valid");
      return false;
    } else {
      email.removeClass("error");
      $("#email").removeClass("email__valid");
      email.addClass("success");
    }
  }

  function messageValidate() {
    if (message.val().length === 0) { 
      message.addClass("error");
      $("#message").addClass("message__valid");
      return false;
    } else if (countWords(message.val()) < 10) {
      console.log("Hi");
      message.addClass("error");
      $("#message").addClass("message__valid");
      return false;
    } else { 
      message.removeClass("error");
      $("#message").removeClass("message__valid");
      message.addClass("success");
    }
  }

  function validate(field) {
    const className = field.get(0).className;
    
    if (className == 'yourname' || className == 'yourname error')  {
      nameValidate();
    } else if (className == 'email' || className == 'email error') {
      emailValidate();
    } else if (className == 'message' || className == 'message error') {
      messageValidate();
    }

    return field;
  }

  function checkFormValidation() {
    if ($("input[name='yourname']").hasClass("yourname success") && $("input[name='email']").hasClass("email success") && $("textarea[name='message']").hasClass("message success")) {
      $(".submit").addClass("submit__success");
    }
  }

  $('input').blur(function() {
    validate($(this));
    checkFormValidation();    
  });

  $('textarea').blur(function() {
    validate($(this));
    checkFormValidation();
  });  

  $("button").on("click" , function(){
    if (nameValidate() == false || emailValidate() == false || messageValidate() == false) {
      return false;
    }
    checkFormValidation();
  });
  
});