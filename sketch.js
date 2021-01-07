var PLAY = 1;

var END = 0;

var gameState = 1;

var sword, fruit, monster, fruitGroup, enemyGroup, score, r, randomFruit;

var swordImage, fruit1, fruit2, fruit3, fruit4, monsterImage, gameOverImage;


function preload() {
  //images loaded
  swordImage = loadImage("sword.png");
  monsterImage = loadAnimation("alien1.png", "alien2.png")
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  gameOverImage = loadImage("gameover.png");
  
}

function setup() {
  createCanvas(600, 600);

  //creating sword
  sword = createSprite(40, 200, 20, 20);
  sword.addImage(swordImage);
  sword.scale = 0.7
  sword.setCollider("rectangle", 0, 0, 40, 40);

  score = 0;

  fruitGroup = createGroup();
  enemyGroup = createGroup();

}

function draw() {
  background("lightblue");

  if (gameState === PLAY) {

    fruits();
    Alien();

    sword.y = World.mouseY;
    sword.x = World.mouseX;

    if (fruitGroup.isTouching(sword)) {
      fruitGroup.destroyEach();
      score = score + 1;
        } 
    else if (enemyGroup.isTouching(sword)) {
      gameState = END;

      fruitGroup.destroyEach();
      enemyGroup.destroyEach();
      fruitGroup.setVelocityXEach(0);
      enemyGroup.setVelocityXEach(0);

      sword.addImage(gameOverImage);
      sword.x = 200;
      sword.y = 200;
      
    }

    if (score===10){
     text("THANK YOU FOR EVERYTHING",50,550)
    }    
   
    if (score===20){
      text("YOU BOTH MEAN EVERYTHING TO ME",50,550)
     }    

    if (score===30){
      text("THANK YOU FOR BELIEVING IN ME WHEN I DIDN'T BELIEVE MYSELF",50,550)
     }    

    if (score===40){
      text("THANK YOU FOR GETTING ME THROUGH THICK AND THIN",50,550)
     }    

    if (score===50){
      text("I LOVE YOU BOTH A LOT AND I APPRECIATE YOUR EFFORT AND LOVE IN ",50,550)
      text("BRINGING ME UP TO BE A BETTER INDIVIDUAL",50,570)
    }    

    if (score===60){
      text("YOU BOTH ARE THE BEST",50,550)
     }    

    if (score===70){
      text("THANKS FOR ALWAYS MAKING THINGS EASIER FOR ME",50,550)
     }    

    if (score===80){
      text("I AM MUCH LUCKY TO HAVE YOU BOTH AS MY PARENTS AND I THANK GOD",50,550)
      text(" FOR GIVING ME YOU",50,570)
     }  
     
    if (score===90){
      text("YOUR UNCONDITIONAL LOVE AND CARE MEANS EVERYTHING TO ME",50,550)
     }  

    if (score===100){
      text("YOU BOTH ARE THE MOST WONDERFUL MENTORS AND BEST FRIENDS",50,550)
      text(" A PERSON COULD EVER HAVE",50,570)
     }  
  }

   
  drawSprites();

  //Display score
  text("Score : " + score, 300, 30);
}


function Alien() {
  if (World.frameCount % 200 === 0) {
    monster = createSprite(400, 200, 20, 20);
    monster.addAnimation("moving", monsterImage);
    monster.y = Math.round(random(200, 300));
    monster.velocityX = -8;
    monster.setLifetime = 50;

    enemyGroup.add(monster);
  }
}
sound
function fruits() {
  if (World.frameCount % 80 === 0) {
    fruit = createSprite(400, 200, 20, 20);
    fruit.scale = 0.2;
    //fruit.debug=true;
    r = Math.round(random(1, 4));
    if (r == 1) {
      fruit.addImage(fruit1);
    } else if (r == 2) {
      fruit.addImage(fruit2);
    } else if (r == 3) {
      fruit.addImage(fruit3);
    } else {
      fruit.addImage(fruit4);
    }

    fruit.y = Math.round(random(50, 340));

    fruit.velocityX = -7;
    fruit.setLifetime = 100;

    fruitGroup.add(fruit);
  }
}
