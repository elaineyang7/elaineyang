function scrollRotate() {
  let image = document.getElementById("gear");
  image.style.transform = "rotate(" + window.pageYOffset/30 + "deg)";
}

window.onscroll = function () {
  scrollRotate();
};
