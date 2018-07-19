function setup(){
	createCanvas(500, 500);
}

function draw(){
	background(200);
	text(mouseX + ', ' + mouseY, mouseX, mouseY);
	text('click', 100, 100);
}

function mousePressed(){
	location.href = '../index.html'
}