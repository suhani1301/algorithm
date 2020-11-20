var fixedrect,movingrect

var gameObject1, gameObject2, gameObject3;
var object1,object2;

function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(200,200,50,50);
  fixedrect.shapeColor="yellow";

  movingrect=createSprite(400, 200, 50, 50);
  movingrect.shapeColor="yellow";

  gameObject1=createSprite(100, 200, 50, 50);
  gameObject1.shapeColor="yellow";
gameObject1.velocityX=2
  gameObject2=createSprite(500, 200, 50, 50);
  gameObject2.shapeColor="yellow";
  gameObject2.velocityX=-2
}

function draw() {
  background(0);
  movingrect.x=mouseX ;
  movingrect.y=mouseY;
bounceoff(gameObject1,gameObject2)
if(isTouching(movingrect,gameObject2))
{
  gameObject2.shapeColor="red";
  movingrect.shapeColor="red";
}
else
{
  gameObject2.shapeColor="yellow";
  movingrect.shapeColor="yellow";
}
  
  drawSprites();
}

