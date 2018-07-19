function setup(){
	createCanvas(500, 500);
	background(200);
}

function draw(){
	text(mouseX + ', ' + mouseY, 0,0)
}

function mousePressed(){
	print('(' + mouseX + ', ' + mouseY + ')');
}