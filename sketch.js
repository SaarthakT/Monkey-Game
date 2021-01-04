
var monkey ,ground, monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  
}



function setup() {
  createCanvas(600, 355);
  monkey = createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1

  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x = ground.width/2;
  console.log(ground.x)
   
  
}


function draw() {
    background("lightblue");
      if(keyDown("space")&& monkey.y >= 305) {
        monkey.velocityY = -12;
        }
  
      monkey.velocityY = monkey.velocityY + 0.8
     // ground.velocityX=ground.velocityX+0.4
  
    if (ground.x=ground.width/2){
      ground.x=ground.width/2;
    }
    monkey.collide(ground);
  

  
  drawSprites();
  foodGroup();
}




function foodGroup() {
  if (frameCount % 80 === 0) {
   var banana = createSprite(400,165,10,40);
    banana.addImage(bananaImage)
    banana.y = Math.round(random(200,250));
    banana.scale = 0.1;
    banana.velocityX = -3;
    
    
    banana.lifetime = 205
    
    console.log(monkey.depth)
    console.log(banana.depth)
    banana.depth = monkey.depth
    monkey.depth = monkey.depth + 1;
    }
}

function obstacleGroup() {
    if (frameCount % 300 === 0) {
    var obstacle = createSprite(400,165,10,40);
    obstacle.addImage(bananaImage)
    obstacle.y = Math.round(random(200,250));
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    
    
    obstacle.lifetime = 205
    
    console.log(monkey.depth)
    console.log(obstacle.depth)
    obstacle.depth = monkey.depth
    monkey.depth = monkey.depth + 1;
    }
}