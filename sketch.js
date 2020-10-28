var wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(1200,400);
  speed = random(223,321);
  weight = random(30,52);
  bullet = createSprite(50,200,50,30);
  bullet.velocityX = speed;  
  thickness = random(22,83);
  wall = createSprite(1000,200,thickness,150);
  wall.shapeColor = color(80,80,80);
}

function draw() {
  background(255);  

  if(hasCollided(bullet, wall)) {

 bullet.velocityX = 0;
 var damage = 0.5* weight* speed* speed/ (thickness* thickness* thickness)

 if (damage>10) {
   wall.shapeColor = ("green");
 }

 if (damage<10) {
   wall.shapeColor = ("red");
 } 

  }
  
  drawSprites();
}

function hasCollided(lbullet, lwall) {
 bulletRightEdge=lbullet.x+lbullet.width;
 wallLeftEdge=lwall.x;
 if (bulletRightEdge>=wallLeftEdge){
   return true;
 }
 return false;
}