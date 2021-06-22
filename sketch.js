var bgimg,snow,snowimg;

function preload(){
  bgimg=loadImage("snow2.jpg")
  snowimg =loadImage("snow4.png")  
  
}

function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background(bgimg);  
  spawnsnow();
  drawSprites();

}

function spawnsnow(){
  if(frameCount%50 === 0){
     snow=createSprite(random(0,800),0,20,20);
     snow.addImage(snowimg);
     snow.scale=0.2;
     snow.velocityY=5;
     snow.lifetime=200;
  }
}