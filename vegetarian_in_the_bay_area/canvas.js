function drawGrid(w, h, stroke, steps){
	var canvas = document.getElementById("myCanvas");
	if (canvas.getContext){
		var ctx = canvas.getContext("2d");
	}
	ctx.save();
	ctx.beginPath();
	for (var i = 0; i < w; i += steps) {
		ctx.moveTo(i, 0);
		ctx.lineTo(i, h);
	}
	for(var i = 0; i < h; i += steps) {
		ctx.moveTo(0, i);
		ctx.lineTo(w, i);
	}
	ctx.strokeStyle = stroke;
	ctx.stroke();
	ctx.restore();
}

//drawGrid(1000, 300, '#eee', 10);



function Confetti() {
	//canvas init
  	var canvas = document.getElementById("myCanvas2");
	var ctx = canvas.getContext("2d");


	//canvas dimensions
	var W =1000;
	var H = 300;
  
  	//particles
  	var mp = 10; //max particles
  	var types = ['circle', 'circle', 'triangle', 'triangle', 'line'];
  	var colors = [
    	[238, 96, 169],
    	[68, 213, 217],
    	[245, 187, 152],
    	[144, 148, 188],
    	[235, 234, 77]
  	];
  	var angles = [
    	[4,0,4,4],
    	[2,2,0,4],
    	[0,4,2,2],
    	[0,4,4,4]
  	];
  
  	var particles = [];
  	for (var i = 0; i < mp; i++) {
    	particles.push({
      		x: Math.random() * W, //x-coordinate
      		y: Math.random() * H, //y-coordinate
      		r: Math.random() * 8 + 1, //radius
      		d: Math.random() * mp, //density
      		l: Math.floor(Math.random()*65+-30), // line angle
      		a: angles[Math.floor(Math.random()*angles.length)], // triangle rotation
      		c: colors[Math.floor(Math.random()*colors.length)], // color
      		t: types[Math.floor(Math.random()*types.length)] //shape 
    	})
  	}
  
  	function draw(){
    	ctx.clearRect(0, 0, W, H);
    

    	for (var i = 0; i < mp; i++) {
      		var p = particles[i];
      		var op = (p.r <= 3) ? 0.4 : 0.8;
      
      		if (p.t == 'circle'){
        		ctx.fillStyle = "rgba(" + p.c + ", "+ op +")";
        		ctx.beginPath();
        		ctx.moveTo(p.x, p.y);
        		ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
        		ctx.fill();
      		} else if (p.t == 'triangle'){
        		ctx.fillStyle = "rgba(" + p.c + ", "+ op +")";
        		ctx.beginPath();
        		ctx.moveTo(p.x, p.y);
        		ctx.lineTo(p.x + (p.r*p.a[0]), p.y + (p.r*p.a[1]));
        		ctx.lineTo(p.x + (p.r*p.a[2]), p.y + (p.r*p.a[3]));
        		ctx.closePath();
        		ctx.fill(); 
      		} else if (p.t == 'line') {
        		ctx.strokeStyle = "rgba(" + p.c + "," + op +")";
        		ctx.beginPath();
        		ctx.moveTo(p.x, p.y);
        		ctx.lineTo(p.x + p.l, p.y + (p.r * 5));
        		ctx.lineWidth = 5;
        		ctx.stroke();
      		} 

    	}
    	update();
  	}

  	function update() {

    	for (var i = 0; i < mp; i++) {
      		var p = particles[i];
      		p.y += Math.cos(p.d) + 1 + p.r / 2;
      		p.x += Math.sin(0) * 2;
      
      		if (p.x > W + 5 || p.x < -5 || p.y > H) {
       			particles[i] = {
          		x: Math.random() * W,
          		y: -10,
          		r: p.r,
          		d: p.d,
          		l: p.l,
          		a: p.a,
          		c: p.c,
          		t: p.t
        	};
      	}
    }
}

//animation loop
setInterval(draw, 23);
//draw();  
}

//window.onload = function(){
//  Confetti();
  
//   window.resizeWindow = function() {
//     Confetti();
//   };

//   window.addEventListener('resize', resizeWindow, false);
//}




function draw(){
	var canvas = document.getElementById("myCanvas");
	if (canvas.getContext){
		var ctx = canvas.getContext("2d");
	
		var pict = new Image();
        pict.src = "images/banner_form.jpg";
        pict.onload = function() {
            ctx.drawImage(pict, 0, 0, 1000, 300);
        }
		ctx.globalCompositeOperation = "destination-over"
		
		ctx.fillStyle = '#285943';
        ctx.font = '20px "Arial Black"';

        ctx.fillText('Thank you!', 430, 200);
        ctx.textAlign = 'center';
        
        ctx.fillStyle = '#285943';
        ctx.font = '16px "Arial Black"';

        ctx.fillText('The form was submitted successfully.', 500, 220);
        ctx.textAlign = 'center';
		
		
        
        
        ctx.globalAlpha = 1;
        var centerX = canvas.width / 2;
      	var centerY = canvas.height / 2;
      	//draw tick
      	ctx.beginPath();
      	ctx.moveTo(centerX+45,centerY-50);
      	ctx.lineTo(centerX-5,centerY-15);
      	ctx.lineTo(centerX-30,centerY-40);
      	ctx.lineWidth = 10;
      	ctx.strokeStyle = 'ffffff';
      	ctx.stroke();
      	
      	//draw circle
      	ctx.beginPath();
      	ctx.arc(centerX, centerY-35, 50, 0, 2 * Math.PI, false);
      	ctx.fillStyle = '#8FBC94';
      	ctx.fill();
      	ctx.lineWidth = 5;
      	ctx.strokeStyle = '#8FBC94';
      	ctx.stroke();
    
      	
		
		ctx.strokeStyle = '8FBC94';
        ctx.lineWidth = '5';
        
        ctx.fillStyle = '#f3f3f3';
		ctx.globalAlpha = 0.9;
        ctx.strokeRect(275, 50, 450, 200);
        ctx.fillRect(275, 50, 450, 200);
        
        
        
        
        var W =1000;
		var H = 300;
  
  		//particles
  		var mp = 50; //max particles
  		var types = ['circle', 'circle', 'triangle', 'triangle', 'line'];
  		var colors = [
    		[238, 96, 169],
    		[68, 213, 217],
    		[245, 187, 152],
    		[144, 148, 188],
    		[235, 234, 77]
  		];
  		var angles = [
    		[4,0,4,4],
    		[2,2,0,4],
    		[0,4,2,2],
    		[0,4,4,4]
  		];
  
  		var particles = [];
  			for (var i = 0; i < mp; i++) {
    			particles.push({
      			x: Math.random() * W, //x-coordinate
      			y: Math.random() * H, //y-coordinate
      			r: Math.random() * 10 + 1, //radius
      			d: Math.random() * mp, //density
      			l: Math.floor(Math.random()*65+-30), // line angle
      			a: angles[Math.floor(Math.random()*angles.length)], // triangle rotation
      			c: colors[Math.floor(Math.random()*colors.length)], // color
      			t: types[Math.floor(Math.random()*types.length)] //shape 
    		})
  		}
        


		function Confetti() {
    		for (var i = 0; i < mp; i++) {
      			var p = particles[i];
      			var op = (p.r <= 3) ? 0.4 : 0.8;
      
      			if (p.t == 'circle'){
        			ctx.fillStyle = "rgba(" + p.c + ", "+ op +")";
        			ctx.beginPath();
        			ctx.moveTo(p.x, p.y);
        			ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
        			ctx.fill();
      			} else if (p.t == 'triangle'){
        			ctx.fillStyle = "rgba(" + p.c + ", "+ op +")";
        			ctx.beginPath();
        			ctx.moveTo(p.x, p.y);
        			ctx.lineTo(p.x + (p.r*p.a[0]), p.y + (p.r*p.a[1]));
        			ctx.lineTo(p.x + (p.r*p.a[2]), p.y + (p.r*p.a[3]));
        			ctx.closePath();
        			ctx.fill(); 
      			} else if (p.t == 'line') {
        			ctx.strokeStyle = "rgba(" + p.c + "," + op +")";
        			ctx.beginPath();
        			ctx.moveTo(p.x, p.y);
        			ctx.lineTo(p.x + p.l, p.y + (p.r * 5));
        			ctx.lineWidth = 5;
        			ctx.stroke();
      			}
      		}
      		
      	}
      	//update();
      	
  		function update() {

    		for (var i = 0; i < mp; i++) {
      			var p = particles[i];
      			p.y += Math.cos(p.d) + 1 + p.r / 2;
      			p.x += Math.sin(0) * 2;
      
      			if (p.x > W + 5 || p.x < -5 || p.y > H) {
       				particles[i] = {
          				x: Math.random() * W,
          				y: -10,
          				r: p.r,
          				d: p.d,
          				l: p.l,
          				a: p.a,
          				c: p.c,
          				t: p.t
        			};
      			}
    		}
    	}
		
		//animation loop
		//setInterval(Confetti, 23);
		Confetti();
	}
	
}

//Confetti();
draw();



function animarion(){
	var cnv = document.getElementById('myCanvas2');
    var ctx1 = cnv.getContext('2d');
                // x and y variables determine the position of the ball:
    x = 100;
    y = 100;

                // change variable determines how far the ball moves during a redraw and which direction
    change = 4;

                // width and height determine the dimensions of the box.
    w = 1000;
    h = 300;

    function animate() {
    	ctx1.fillStyle = 'lightgray';
        ctx1.fillRect(0, 0, w, h);
        ctx1.fillStyle = 'red';
        ctx1.beginPath();
        ctx1.arc(x, y, 10, 0, Math.PI * 2, true);
         ctx1.fill();

        if (x >= w || x <= 0) { // checks ball position from left/right edges
        	change = -change
                            // executed if condition is true, change switched to reverse direction of ball.           
        }

        x = x + change; // updates horizontal position of ball

    }

    setInterval(animate, 10);
}

animarion();