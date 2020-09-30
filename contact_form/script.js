console.log("It works")

$(document).ready(function() {
  $('.submit').click(function (event) {
    console.log('Click')

    var companyName = $('.companyname').val()
    var yourName = $('.yourname').val()
    var email = $('.email').val()
    var project = $('.project').val()
    var statusElm = $('.status')

/*
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
    }*/

    if (!name.value or !email.value or !message.value) {
      alertify.error 'Please check your entries'
      return false
    } else {
      $.ajax
        method: 'POST'
        url: '//formspree.io/joyfulelaine7@gmail.com'
        data: $('form').serialize()
        datatype: 'json'
      event.preventDefault()
      $(this).get(0).reset()
      alertify.success 'Message sent'
    }
  })
})
