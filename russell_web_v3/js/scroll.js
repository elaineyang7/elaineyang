function scrollRotate() {
  let image = document.getElementById("gear");
  image.style.transform = "rotate(" + window.pageYOffset/30 + "deg)";
}

window.onscroll = function () {
  scrollRotate();
};

$(document).ready(function() {
  $(this).addClass('active');
  $('.portfolio__nav').on('click', 'a', function() {
      $('.portfolio__nav a').removeClass('active');
      $(this).addClass('active');
  });
});




function ul(index) {
	console.log('click!' + index)
	
	var underlines = document.querySelectorAll(".underline");
  console.log(underlines)
  underlines[0].style.transform = 'translate3d(' + index * 200 + '%,0,0)';

	for (var i = 0; i < underlines.length; i++) {
		underlines[i].style.transform = 'translate3d(' + index * 200 + '%,0,0)';
	}
}