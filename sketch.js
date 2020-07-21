const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint
var engine, world;
var box1;
var gameState="onSling";
var slingShot,score=0;    
var player;

function preload(){
    backgroundImg=loadImage("bg1.png")
  getBackGroundImage()
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    player=new Bird (74,222,20,20)
    slingShot=new SlingShot(player.body,{x:80,y:224})
    ground1=new Ground(470,268,200,10)
    ground2=new Ground(824,207,200,10)
    ground = new Ground(600,height,1200,20)
    box1 =new Box (443,257,20,20)
    box2 =new Box (467,259,20,20)
    box3 =new Box (486,259,20,20)
    box4 =new Box (508,259,20,20)
    box5 =new Box (527,259,20,20)
    box6 =new Box (456,235,20,20)
       box7 =new Box (471,235,20,20)
    box8 =new Box (492,235,20,20)
    box9 =new Box (512,235,20,20)
   box10 =new Box (466,210,20,20)
    box11 =new Box (500,210,20,20)
    box12 =new Box (482,189,20,20)
     box13=new Box (790,193,20,20)
   box14=new Box (811,193,20,20)
    box15=new Box (829,193,20,20)
    box16=new Box (810,168,20,20)
   

     }

function draw(){
    background(backgroundImg);
    text(mouseX+"  "+mouseY,100,100)
    textSize(30)
    text("score" +":"+score, 1000,80,)
    
    box1.score();
    box2.score();
    box3.score();
   box4.score();
   box5.score();
    Engine.update(engine);
    player.display();
     ground.display();
     ground1.display();
     ground2.display();
     box1.display();
     box2.display();
     box3.display();
     box4.display();
     box5.display();
     box6.display();
     box7.display();
    box8.display();
   box9.display();
    box10.display();
    box11.display();
     box12.display();
 box13.display();
    box14.display();
     box15.display();
     box16.display();



}
function mouseDragged(){
    if(gameState==="onSling"){
        Matter.Body.setPosition(player.body, {x: mouseX , y: mouseY});
}
}


function mouseReleased(){
  
gameState="launched"

}

function keyPressed(){
if(keyCode === 32){
    slingShot.attach(player.body);
    gameState="onSling"
}
}
async function getBackGroundImage(){ 
    var apiResponse= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
     console.log(apiResponse);
      var apiJson=await apiResponse.json();
      console.log(apiJson);
       var dateTime=apiJson.datetime;
       console.log(dateTime) 
       var hour=dateTime.slice(11,13) 
       console.log(hour) 
       if(hour>06 && hour<18){
            backgroundImg = loadImage("bg1.png"); 
        }else{
             backgroundImg = loadImage("bg2.png"); 
        }
}