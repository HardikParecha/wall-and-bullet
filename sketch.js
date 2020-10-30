
var wall,thickness;
var bullet,speed,weight

function setup() {
  createCanvas(1600,400);

  thickness=random(22,83);
  weight=random(30,52);
  speed=random(223,321);

  bullet=createSprite(50, 200, 50, 10);
  bullet.shapeColor=color(255,255,255);
  wall=createSprite(1200, 200, thickness,height/2);

  
}

function draw() {
  background(0,0,0); 
  bullet.velocityX=speed;

  if(wall.x-bullet.x < bullet.width/2 + wall.width/2){
    bullet.velocityX=0;
  }

  if(hasCollided(bullet,wall)){
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }
    
    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }
  
  drawSprites();
}

function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x +bullet.width;
  wallLeftEdge=wall.x;
 if(bulletRightEdge>=wallLeftEdge)
{
  return true;
} 

return false;

}