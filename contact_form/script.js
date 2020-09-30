console.log("It works")

$(document).ready(function() {
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
})


//const btn = document.getElementById('button');

//var templateParams = {
//    companyName: document.getElementById("companyname").value,
//    yourName: document.getElementById("yourname").value,
//    email: document.getElementById("email").value,
//    project: document.getElementById("project").value
//
//const service_id = "gmail";
//const template_id = "template_3mos6ub";
//const userID = "user_ZSYMwrYIJHJF1Mi1yX8F7"

//emailjs.send(service_id, template_id, templateParams, userID)
//    .then(function(response) {
//       console.log('SUCCESS!', response.status, response.text);
//    }, function(error) {
//       console.log('FAILED...', error);
//    });
/*


const btn = document.getElementById('button');

document.getElementById('form')
  .addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'gmail';
    const templateID = 'template_3mos6ub';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btn.value = 'SUBMIT';
        alert('Sent!');
      }, (err) => {
        btn.value = 'SUBMIT';
        alert(JSON.stringify(err));
      });
  });
*/

/*
function <strong>fxnForEmailSending</strong>() {


  var companyName = document.getElementById("companyname").value;
  var yourName = document.getElementById("yourname").value;
  var email = document.getElementById("email").value;
  var project = document.getElementById("project").value;

  var service_id = ‘gmail';
  var template_id = template_3mos6ub';

  var templateParams = {
    companyName: document.getElementById("companyname").value,
    yourName: document.getElementById("yourname").value,
    email: document.getElementById("email").value,
    project: document.getElementById("project").value
  };

  emailjs.send(service_id, template_id, templateParams); <strong>// name and email will be sent as template parameter.</strong>

}*/
