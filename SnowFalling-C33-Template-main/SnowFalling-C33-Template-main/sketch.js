
function setup() {
  createCanvas(800,400);
  snow=createSprite(400, 200, 50, 50);
  snow.addAnimation("snow1.jpg","snow2.jpg","snow3.jpg","snow4.webp","snow5.webp")
  
}

function draw() {
  background(255,255,255);  
  drawSprites();
}