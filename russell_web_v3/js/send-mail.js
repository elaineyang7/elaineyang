function checkValidation() {
  const name = document.forms["ContactForm"]["yourname"]; 
  const email = document.forms["ContactForm"]["email"];
  const message = document.forms["ContactForm"]["message"]; 

  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  
  
  if (message.value == "") { 
    window.alert("Please enter message."); 
    message.focus(); 
    return false; 
  }

  return true; 
}