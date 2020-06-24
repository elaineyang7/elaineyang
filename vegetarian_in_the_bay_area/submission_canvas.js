var canvas1 = document.getElementById("myCanvas1");
if (canvas1.getContext){
	var ctx1 = canvas1.getContext("2d");
}

/*var canvas2 = document.getElementById("myCanvas2");
if (canvas2.getContext){
	var ctx2 = canvas2.getContext("2d");
}*/

var w = canvas1.width;
var h = canvas1.height;

/*
var w2 = canvas2.width;
var h2 = canvas2.height;*/

Run();

function Run(){
	// canvas1
	drawThanks();
	drawConfetti();

	// canvas2
	animarion();

}

function drawThanks(){

	// banner
	var pict = new Image();
	pict.src = "images/banner_form.jpg";
	pict.onload = function() {
		ctx1.drawImage(pict, 0, 0, w, h);
	}
	ctx1.globalCompositeOperation = "destination-over"

	// text
	ctx1.fillStyle = '#285943';
	ctx1.font = '20px "Arial Black"';

    ctx1.fillText('Thank you!', 430, 200);
    ctx1.textAlign = 'center';

    ctx1.font = '16px "Arial Black"';

	ctx1.fillText('The form was submitted successfully.', 500, 220);
    ctx1.textAlign = 'center';

    ctx1.globalAlpha = 1;

	var centerX = canvas1.width / 2;
	var centerY = canvas1.height / 2;

	//draw tick
	ctx1.beginPath();
	ctx1.strokeStyle = 'white';
	ctx1.moveTo(centerX+45,centerY-50);
	ctx1.lineTo(centerX-5,centerY-15);
	ctx1.lineTo(centerX-30,centerY-40);
	ctx1.lineWidth = 10;
	ctx1.strokeStyle = 'white';
	ctx1.stroke();

	//draw circle
	ctx1.beginPath();
	ctx1.arc(centerX, centerY-35, 50, 0, 2 * Math.PI, false);
	ctx1.fillStyle = '#8FBC94';
	ctx1.fill();
	ctx1.lineWidth = 5;
	ctx1.strokeStyle = '#8FBC94';
	ctx1.stroke();

	// draw rectangle
	ctx1.strokeStyle = '8FBC94';
	ctx1.lineWidth = '5';

	ctx1.fillStyle = '#f3f3f3';
	ctx1.globalAlpha = 0.9;
	ctx1.strokeRect(275, 50, 450, 200);
	ctx1.fillRect(275, 50, 450, 200);

}


function drawConfetti(){
	//particles
  	var mp = 50; //max particles
  	var types = ['circle', 'circle', 'triangle', 'triangle', 'line'];
  	var colors = [
  		[238, 96, 169],
    	[68, 213, 217],
    	[245, 187, 152],
    	[144, 148, 188],
    	[235, 234, 77]];
  	var angles = [
  		[4,0,4,4],
    	[2,2,0,4],
    	[0,4,2,2],
    	[0,4,4,4]];
  	var particles = [];

  	// random
	for (var i = 0; i < mp; i++) {
		particles.push({
			x: Math.random() * w, // x coordinate
			y: Math.random() * h, // y coordinate
			r: Math.random() * 10 + 1, // radius
			d: Math.random() * mp, //density
			l: Math.floor(Math.random() * 65 +- 30), // line angle
			a: angles[Math.floor(Math.random() * angles.length)], // triangle rotation
			c: colors[Math.floor(Math.random() * colors.length)], // color
			t: types[Math.floor(Math.random() * types.length)] // shape
		})
  	}

  	// draw circle, triangle, line randomly
  	function Confetti() {
		for (var i = 0; i < mp; i++) {
			var p = particles[i];
			var op = (p.r <= 3) ? 0.4 : 0.8;

			if (p.t == 'circle'){
				ctx1.fillStyle = "rgba(" + p.c + ", "+ op +")";
				ctx1.beginPath();
				ctx1.moveTo(p.x, p.y);
				ctx1.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
        		ctx1.fill();
      		} else if (p.t == 'triangle'){
        		ctx1.fillStyle = "rgba(" + p.c + ", "+ op +")";
        		ctx1.beginPath();
        		ctx1.moveTo(p.x, p.y);
        		ctx1.lineTo(p.x + (p.r * p.a[0]), p.y + (p.r * p.a[1]));
        		ctx1.lineTo(p.x + (p.r * p.a[2]), p.y + (p.r * p.a[3]));
        		ctx1.closePath();
        		ctx1.fill();
      		} else if (p.t == 'line') {
        		ctx1.strokeStyle = "rgba(" + p.c + "," + op +")";
        		ctx1.beginPath();
        		ctx1.moveTo(p.x, p.y);
        		ctx1.lineTo(p.x + p.l, p.y + (p.r * 5));
        		ctx1.lineWidth = 5;
        		ctx1.stroke();
      		}
		}
	}
  	Confetti();
}

function animarion(){
	var x = 10;
	var y = 10;
	var vx = 4;
	var vy = 2;
	var radius = 20;
	var color = '#8FBC94';

	function ball() {
		ctx2.beginPath();
		ctx2.arc(x, y, radius, 0, Math.PI * 2, true);
		ctx2.closePath();
		ctx2.fillStyle = color;
		ctx2.fill();
	}

	function drawball(){
		ctx2.clearRect(0, 0, w2, h2);
		ball();
		if (x + vx > w2 || x + vx < 0){
    		vx = -vx;
    	}
  		if (y + vy > h2 || y + vy < 0){
    		vy = -vy;
    	}

  		x += vx;
  		y += vy;
	}

	setInterval(drawball, 10);
}
