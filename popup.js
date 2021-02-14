$(function () {
           
  $("#popup").dialog({
      modal: true,
      title: "Happy Lunar New Year",
      width: 550,
      height: 570,
      open: function (event, ui) {
          setTimeout(function () {
              $("#popup").dialog("close");
          }, 3000);
      }
  });

});