var bullet,wall,thickness;
var speed,weight;
var collision

function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  thicknees = random(22,83);

  bullet = createSprite(50,200,50,10);
  bullet.shapeColor="white";
  wall = createSprite(1200,200,thickness,height/2);
  collision=0.5*weight*speed*speed/thicknees*thicknees*thicknees;
  wall.shapeColor=80,80,80;
  bullet.velocityX=speed;
}

function draw() {
  background("black"); 

  bullet.collide(wall);

  
  text(thicknees,1500,50);
  if(collision<10){
   wall.shapeColor="green";
  }
  if(collision>10){
   wall.shapeColor="red";
  }
  
  drawSprites();
}