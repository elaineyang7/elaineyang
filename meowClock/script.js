var wakeuptime = 8;
var noon = 12;
var lunchtime = 12;
var breaktime = lunchtime + 3;
var dinnertime = 18;
var partytime;
var evening = 18;

updateClock();

// Getting the clock to increment once a second
var oneSecond = 1000;
setInterval( updateClock, oneSecond);

// Getting the Party Time Button To Work
var partyButton = document.getElementById("partyTimeButton");
partyButton.addEventListener("click", partyEvent);
partyEvent();

// Activates Wake-Up selector
var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");
wakeUpTimeSelector.addEventListener("change", wakeUpEvent);

// Activates Lunch selector
var lunchTimeSelector =  document.getElementById("lunchTimeSelector");
lunchTimeSelector.addEventListener("change", lunchEvent);

// Activates break Time selector
var breakTimeSelector =  document.getElementById("breakTimeSelector");
breakTimeSelector.addEventListener("change", breakEvent);

// Activates dinner Time selector
var dinnerTimeSelector =  document.getElementById("dinnerTimeSelector");
dinnerTimeSelector.addEventListener("change", dinnerEvent);


function showCurrentTime(){
	// display the string on the webpage
  var clock = document.getElementById('clock');

  var currentTime = new Date();

  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var meridian = "AM";

  // Set hours
	if (hours >= noon){
		meridian = "PM";
	}
	if (hours > noon){
		hours = hours - 12;
	}

  // Set Minutes
  if (minutes < 10){
      minutes = "0" + minutes;
  }

  // Set Seconds
  if (seconds < 10){
      seconds = "0" + seconds;
  }

  // put together the string that displays the time
  var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";

  clock.innerText = clockTime;
}


// Getting the clock to increment on its own and change out messages and pictures
function updateClock(){
  var time = new Date().getHours();
  var messageText;
  var image = "images/normal.jpg";

  var timeEventJS = document.getElementById("timeEvent");
  var lolcatImageJS = document.getElementById('lolcatImage');

  if (time == partytime){
    image = "images/party.jpg";
    messageText = "Let's party!";
  } else if (time == wakeuptime){
    image = "images/wakeup.jpg";
    messageText = "Wake up!";
  } else if (time == lunchtime){
    image = "images/lunch.jpg";
    messageText = "Let's have lunch!";
  } else if (time == breaktime){
    image = "images/break.jpg";
    messageText = "Time to take a break!";
  } else if (time == dinnertime){
    image = "images/dinner.jpg";
    messageText = "Bring me food!";
  } else if (time < noon){
    image = "images/morning.jpg";
    messageText = "Good morning!";
  } else if (time > noon && time < evening){
    image = "images/afternoon.jpg";
    messageText = "Good afternoon!";
  } else if (time >= evening){
    image = "images/evening.jpg";
    messageText = "Good evening!";
  } else{
    image = "images/normal.jpg";
    messageText = "Am I cute?";
  }

  console.log(messageText);
  timeEventJS.innerText = messageText;
  lolcatImage.src = image;

  showCurrentTime();
}

function partyEvent(){
  if (partytime < 0){
    partytime = new Date().getHours();
    partyTimeButton.innerText = "Party Over!";
    partyTimeButton.style.backgroundColor = "#e6b295";
  } else{
    partytime = -1;
    partyTimeButton.innerText = "Party Time!";
    partyTimeButton.style.backgroundColor = "#e6b295";
  }
}

function wakeUpEvent(){
  wakeuptime = wakeUpTimeSelector.value;
}

function lunchEvent(){
  lunchtime = lunchTimeSelector.value;
}

function breakEvent(){
  breaktime = breakTimeSelector.value;
}

function dinnerEvent(){
  dinnertime = dinnerTimeSelector.value;
}
