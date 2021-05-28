
var bullet, wall, speed, weight, thickness;


function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet=createSprite(100, 200, 30, 15);
  bullet.velocityX=speed;
  bullet.shapecolor = color(255, 255, 255);
  
  wall=createSprite(1200,200, thickness,height/2);
  wall.shapeColor=color(80,80,80);

}

function draw() {
  background(0);
  
  if(wall.x - bullet.x < (bullet.width + wbullet.width)/2){
    bullet.velocityX = 0;

  var deformation = (0.5 * wieght * speed * speed)/22500;
  if(deformation < 80){
    bullet.shapeColor = "green";
  }
  if(deformation > 80 && deformation < 180){
    bullet.shapeColor = color(230,230,0);
  }
  if(deformation > 180){
    bullet.shapeColor = "red";
  }
}

  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness *thickness *thickness)

    |
    if(damage>10{
      wall.shapeColor=color(255,0,0);

    }


    if(damage<10){
      wall.shapeColor=color(0,255,0)
    }
  }
  drawSprites();
}

function hasCollided(Lbullet, Lwall) {

  bulletRightEdge=1bullet.x +1bullet.width;
  wallLeftEdge=1wall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}
