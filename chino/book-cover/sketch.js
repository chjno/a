function setup(){
	createCanvas(500, 500);
	background(200);
}

function draw(){
	text(mouseX + ', ' + mouseY, mouseX, mouseY);
}

function mousePressed(){
	print('(' + mouseX + ', ' + mouseY + ')');
}