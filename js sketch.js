var a = prompt('Enter the first variable: ');
var b = prompt('Enter the second variable: ');
function setup(){
  background("lightblue");
}

  
function draw()
{
  background("lightblue"); 
  
}
function swap(){
[a, b] = [b, a];
background("lightblue"); 
  
console.log("The value of a after swapping:" ,+a);
console.log("The value of b after swapping:",+b);
}

var draw = createsprite


var b2 = createButton("Click here to swap the numbers.");
  b2.mousePressed(swap);
  


  var b = createSprite(200,200);
  b.setAnimation("background_landscape11_1")
 var hero = createSprite(200,345,200,345)
 hero.shapeColor="red"
 
 var enemy1 = createSprite(200,250,10,10)
 enemy1.shapeColor="red"
 
 var enemy2 = createSprite(200,150,10,10)
 enemy2.shapeColor="red"
 
 var enemy3 = createSprite(200,70,10,10)
 enemy3.shapeColor="red"
 
 var enemy4 = createSprite(30,30,10,10)
 enemy4.shapeColor="red"
 
 var enemy5= createSprite(350,30,10,10)
 enemy5.shapeColor="red"
 
 
 var net = createSprite(200,20,200,20)
 net.setAnimation("musk_1")
 net.scale=0.1
 
 var goal =0;
 var death = 0;
 
 hero.setAnimation("kidportrait_07_1");
 hero.scale=.2;
 enemy1.setAnimation("enemy_1");
 enemy1.scale=.1;
 enemy2.setAnimation("enemy_2");
 enemy2.scale=.1;
 enemy3.setAnimation("enemy_3");
 enemy3.scale=.1;
 enemy4.setAnimation("enemy_4");
 enemy4.scale=.1;
 enemy5.setAnimation("enemy_5")
 enemy5.scale=.1;
 
 enemy1.setVelocity(-10,0);
 enemy2.setVelocity(10,0);
 enemy3.setVelocity(-10,0);
 enemy4.setVelocity(0,10);
 enemy5.setVelocity(0,-10);
 
 
 function draw() {
   
 //background(b);
 
 createEdgeSprites()
 
 
 
 
 enemy1.bounceOff(edges)
 enemy2.bounceOff(edges)
 enemy3.bounceOff(edges)
 enemy4.bounceOff(edges)
 enemy5.bounceOff(edges)
 hero.bounceOff(edges)
 
 if(keyDown(UP_ARROW)){
   hero.y=hero.y-5
 }
 
 if(keyDown(DOWN_ARROW)){
   hero.y=hero.y+5
 }
 
 if(keyDown(LEFT_ARROW)){
   hero.x=hero.x-5
 }
 
 if(keyDown(RIGHT_ARROW)){
   hero.x=hero.x+5
 }
 
 if(hero.isTouching(enemy1)|| hero.isTouching(enemy2)|| hero.isTouching(enemy3)||hero.isTouching(enemy4)||hero.isTouching(enemy5)){
   playSound("sound://category_achievements/bubbly_game_achievement_sound.mp3")
   hero.x=5
   hero.y=350
   death = death+1
 }
 if(hero.isTouching(net)){
   playSound("sound://category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3")
   hero.x=5
   hero.y=345
   goal=goal+1
 }
 textSize(20)
   fill("blue")
   text("Goals:"+goal,320,350);
   
 
 textSize(20)
   fill("blue")
   text("death:"+death,20,350);
   
 
   textSize(25)
   fill("maroon")
   text("You Win",180,200);
   
       
    if(hero.isTouching(net))
       {
       goal =  + 1;
         //Reset the striker by adding center value of x and y 
         hero.x=200;
         hero.y=200;
         hero.velocityX=0;
         hero.velocityY=0;
       }
       
   
 
   // Score
   
      //add the condition to check  either of the player’s score reaches 5
      if(hero.isTouching(net))
       {
         fill("maroon");
         textSize(18);
         //add the text for GameOver
         text(" score ",170,160);
       }
       
       if(hero.isTouching(net))
       {
        goal =  + 1;
         //Reset the hero by adding center value of x and y 
         hero.x=200;
        hero.y=200;
         hero.velocityX=0;
         hero.velocityY=0;
       }
  
       function serve() {
   striker.velocityX = 10;
   striker.velocityY = 5;
  
 }
 
 
 
 drawSprites()
 }
 
















 