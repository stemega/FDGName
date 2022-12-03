let font;
let points;
function preload(){
 font = loadFont("Roboto-Regular.ttf"); 
}
function setup() {
  createCanvas(400, 400);
  let size = width/2;
  points = font.textToPoints("FDG", width/2-size, height/2, size);
  frameRate(6);
 
}

function draw() {
  background(0);
  for(i=0; i < points.length; i++){
    circle(points[i].x+random()*1.3, points[i].y+random()*1.3, map(i, 0, points.length, 4, 15));
  }
}