/*function checkValidation() {
  const name = document.getElementById("yourname");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  function countWords(){
    s = message.value;
    s = s.replace(/(^\s*)|(\s*$)/gi,"");
    s = s.replace(/[ ]{2,}/gi," ");
    s = s.replace(/\n /,"\n");
    return s.split(' ').length;
  }

  if (name.value.trim() == "") {
    alert("Please enter your name.");
    name.focus();
    name.style.border = "1px solid red";
    return false; 
  } else {
    name.style.border = "1px solid #fff";
  }
  
  if (email.value.trim() == "") { 
    alert("Please enter your email address."); 
    email.focus();
    email.style.border = "1px solid red";
    return false; 
  } else if (validateEmail(email.value) == false) {
    alert("Please enter valid email address."); 
    email.focus();
    email.style.border = "1px solid red";
    return false;
  } else {
    email.style.border = "1px solid #fff";
  }
  
  if (message.value.trim() == "") { 
    alert("Please enter message."); 
    message.focus();
    message.style.border = "1px solid red";
    return false; 
  } else if (countWords() < 20) { 
    alert("Please enter more words for the message."); 
    message.focus();
    message.style.border = "1px solid red";
    return false; 
  } else {
    message.style.border = "1px solid #fff";
  }
  
  return true;
}*/


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
      name.focus();
      name.addClass("error");
      $("#yourname").addClass("name__valid");
    } else {
      name.removeClass("error");
      $("#yourname").removeClass("name__valid");
      name.addClass("success");
      return true;
    }
  }

  function emailValidate() {
    if (email.val().length === 0) {
      email.addClass("error");
      $("#email").addClass("email__valid");
    } else if (validateEmail(email.val()) == false) {
      email.addClass("error");
      $("#email").addClass("email__valid");
    } else {
      email.removeClass("error");
      $("#email").removeClass("email__valid");
      email.addClass("success");
      return true;
    }
  }

  function messageValidate() {
    if (message.val().length === 0) { 
      message.addClass("error");
      $("#message").addClass("message__valid");
    } else if (countWords(message.val()) < 10) {
      console.log("Hi");
      message.addClass("error");
      $("#message").addClass("message__valid");
    } else { 
      message.removeClass("error");
      $("#message").removeClass("message__valid");
      message.addClass("success");
      return true;
    }
  }

  /*function validate(field) {
    if field === 'name' {

    }
  }*/

  /*function validate(field) {
    
    if (name.val().length === 0) {
      name.focus();
      name.addClass("error");
      $("#yourname").addClass("name__valid");
    } else if (name.val().length != 0) {
      name.removeClass("error");
      $("#yourname").removeClass("name__valid");
      name.addClass("success");
      return true;
    }
    
    if (email.val().length === 0) {
      email.addClass("error");
      $("#email").addClass("email__valid");
    } else if (validateEmail(email.val()) == false) {
      email.addClass("error");
      $("#email").addClass("email__valid");
    } else {
      email.removeClass("error");
      $("#email").removeClass("email__valid");
      email.addClass("success");
      return true;
    }

    if (message.val().length === 0 || countWords() < 10) { 
      message.addClass("error");
      $("#message").addClass("message__valid");
    } else { 
      message.removeClass("error");
      $("#message").removeClass("message__valid");
      message.addClass("success");
      return true;
    } 

  }*/

  $('input').blur(function(){
    nameValidate();
    emailValidate();
    messageValidate();
    if (nameValidate() == true && emailValidate() == true && messageValidate() == true) {
      
      $(".submit").addClass("submit__success");
    }
  });

  $("button").on("click" , function(){

    if (nameValidate() == true && emailValidate() == true && messageValidate() == true) {
      $(".submit").addClass("submit__success");
    }

    /*if($(email).val().length === 0 || $(name).val().length === 0)
      $(this).removeClass().addClass("submit-error");
    else{
      $(this).removeClass().addClass("submit__success");
    }*/

    window.setTimeout(function(){
      console.log("done");
      $("button").removeClass();
    }, 3000)

    return false;
  });
  
});