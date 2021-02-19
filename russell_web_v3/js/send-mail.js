function checkValidation() {
  const name = document.forms["ContactForm"]["yourname"]; 
  const email = document.forms["ContactForm"]["email"];
  const message = document.forms["ContactForm"]["message"]; 

  function validateEmail(email) {
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.match(email);
  }

  if (name.value == "") { 
    window.alert("Please enter your name."); 
    name.focus(); 
    return false; 
  } 

  if (email.value == "") { 
    window.alert("Please enter your email address."); 
    email.focus(); 
    return false; 
  }
  
  if (validateEmail(email) == false) {
    window.alert("Please enter valid email address."); 
    email.focus(); 
    return false;
  }

  if (message.value == "") { 
    window.alert("Please enter message."); 
    message.focus(); 
    return false; 
  }

  return true; 
}