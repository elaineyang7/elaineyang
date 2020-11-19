var l = document.getElementById("login");
var r = document.getElementById("register");
var b = document.getElementById("btn");

function register() {
  document.getElementById("login").style.left = "-400px";
  document.getElementById("register").style.left = "50px";
  document.getElementById("btn").style.left = "110px";
}

function login() {
  document.getElementById("login").style.left = "50px";
  document.getElementById("register").style.left = "450px";
  document.getElementById("btn").style.left = "0";
}
