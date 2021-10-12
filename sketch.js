
var mario , marioImg
var coin ,coinImage, obstacle, obstacleImage
var coinGroup, obstacleGroup
var score=0;
var survivalTime=0;
var backgroundImage;

function preload(){
  
  
  marioImg = loadImage("mario.png")
  coinImage = loadImage("coin.png");
  obstaceImage = loadImage("obstacle.png");
  
backgroundImage=loadImage("background.jpg");
 
}



function setup() {
createCanvas(800,400);

 background.velocityX=-4;
 background.x=background.width/2
  
 mario=createSprite(80,315,20,20); 
 mario.addImage(marioImg);
 mario.scale=0.3;
 
 ground=createSprite(400,350,900,10);
 ground.velocityX=-4;
 ground.x=ground.width/2
  
 coinGroup = createGroup();
 obstacleGroup=createGroup();
 

}


function draw() {
  background(backgroundImage);

  if(ground.x<0){
      ground.x=ground.width/2;
  }
  ground.visible=false;
  
  if(keyDown("space")&& mario.y >= 100) {
        mario.velocityY = -12;
  }
  mario.velocityY = mario.velocityY + 0.8
  mario.collide(ground);
 drawSprites(); 
  
 textSize(20);
  text("score:"+score,100,50);
  
  if(background.x<0){
      background.x=background.width/2;
  }
  if(coinGroup.isTouching(mario)){
    coinGroup.destroyEach();
    score=score+2;
  }
  
  if(obstacleGroup.isTouching(mario)){
    mario.scale=0.2;
  }
  
 spawncoins(); 
 spawnobstacles();
}
function spawncoins() {
  
  if (frameCount % 181 === 0) {
    var coin = createSprite(800,130,20,20);
    coin.y = Math.round(random(120,200));
    coin.addImage(coinImage);
    coin.scale = 0.3;
    coin.velocityX = -5;
    coin.lifetime =-1;
    
    coinGroup.add(coin);
  }
}
function spawnobstacles() {
  
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(400,330,20,20);
    obstacle.addImage(obstaceImage);
    obstacle.scale = 0.3;
    obstacle.velocityX = -3;
    obstacle.lifetime =-1;
    
    obstacle.depth = mario.depth;
    mario.depth = mario.depth + 1;
    
    obstacleGroup.add(obstacle);
  }
}




