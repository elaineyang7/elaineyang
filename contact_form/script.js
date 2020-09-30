$(document).ready(function() {

	$('#someForm').on('submit', function(e) {
		e.preventDefault();

    var companyName = $('.companyname').val();
    var yourName = $('.yourname').val();
    var email = $('.email').val();
    var project = $('.project').val();

		//pretend we don't need validation

		//send to formspree
		$.ajax({
			url : 'https://formspree.io/joyfulelaine7@gmail.com',
			method : 'POST',
			data : {
				CompanyName : companyName,
				Name : yourName,
				Email : email,
				Project : project,
				_subject : companyName + "'s Project",
			},
			dataType : "json",
			success : function() {
				console.log('success');
				$('#formBlock').hide();
				$('#thankyouBlock').show();
			}

		});

	});

});


/*$(document).ready(function() {
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
*/
