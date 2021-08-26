var ship, ship_floating , edges;
var shipImage;
function preload(){
ship_floating = loadAnimation("ship1.png","ship2.png","ship3.png");
seaImg = loadImage("sea.png");

}

function setup(){
  createCanvas(400,400);
  //creating ship
ship = createSprite(200,200,250,250);
ship.addAnimation("floating", ship_floating);
edges = createEdgeSprites();

//adding scale and position to ship
ship.scale = 0.5;
ship.Y = 50; 
sea = createSprite(200,200,600,20);
sea.addImage('sea',seaImage);
sea.velocityY = -2;

}

function draw() {
  background("blue");
  if(sea.x<0) {
    sea.x  = sea.width /2;
  }
}

  //logging the y position of the trex
 // console.log(ship.x)
  
  //float when space key is pressed
  if(keyDown("space")){
    ship.velocityX = -10;
  }
  
  ship.velocityX = trex.velocityX + 0.5;
  
  //stop  
  ship.collide(sea);
  drawSprites();








