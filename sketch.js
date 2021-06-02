var grid = 50;
var width = 1366;
var carGroup1,logGroup1;
var grassHeight = 100;
var gameState = "play";
var carAnimation, logAnimation, playerAnimation;
var school;
function preload()
{
 
}

function setup() {
  createCanvas(1366,2700);
  carGroup1 = new Group();
  logGroup1 = new Group();
  
 
   
 }

function draw() {
  background("skyblue");
 //Grasses where player can rest
 for(var i=0;i<6;i++){
  var bottomGrass1=createSprite(683,height-50(i*400),width,grassHeight);
  if(i%2===0)//adding road
  {
    var road=createSprite(683,height-150-(i*400)-grassHeight,width,300)
    road.shapeColor="black";
  }
bottomGrass1.shapeColor="grey";
}

  drawSprites();
}