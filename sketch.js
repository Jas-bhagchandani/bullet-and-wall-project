var bullet,wall,thickness;
var speed,weight;

function setup() {
  createCanvas(1200,400);
  bullet=createSprite(50, 200, 35, 20);
  bullet.shapeColor=color(255,255,255);

  thickness=random(22,83)
  
  wall=createSprite(1100,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
  
  speed=random(223,321);
  
  weight=random(30,52);
  bullet.velocityX=speed;

  
}

function draw() {
  background(0);
  

 

if(hascollided(bullet,wall))
bullet.velocityX=0;

var damage= 0.5*weight*speed*speed/(thickness* thickness *thickness);

if (damage>10)
{
  wall.shapeColor=color(255,0,0);
}

if(damage<10)
{
  wall.shapeColor=color(0,255,0);
}
  

  drawSprites();
}

function hascollided(Lbullet,Lwall)
{
bulletRightEdge=bullet.x+bullet.width;
wallLeftEdge=wall.x;
if(bulletRightEdge>=wallLeftEdge)
{
  return true
}
return false;




}