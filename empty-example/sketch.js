
function setup() {
  createCanvas(600, 600);
  background(255);
}

function draw() {
  if(mouseIsPressed){
     var cx = map(mouseX, 0, width, 0, 255); 
     var cy = map(mouseY, 0, height, 255, 0); 
     var nsize = width/8+cos(mouseY*PI/180)*width/16; 
     stroke(cy,0,cx);
     fill(cx,cy,150,50);
     rect(mouseX,mouseY,nsize,50,10);
  }  
