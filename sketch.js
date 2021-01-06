const Constraint=Matter.Constraint
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var boy, boyImg;
var tree, treeImg;
var stone, stoneImg;
function preload()
{
boyImg= loadImage("boy.png");
treeImg= loadImage("tree.png");
stoneImg= loadImage("stone.png")
}

function setup() {
	createCanvas(1000, 800);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
stone1= new Stone (90,525,10,10);
ground1= new Ground (500,610,1000,10);
	Engine.run(engine);
mango1= new Mango (692,370,50,50);
mango2= new Mango (772,400,50,50); 
mango3= new Mango (792,320,50,50);
mango4= new Mango (882,330,50,50); 
mango5= new Mango (912,350,50,50); 
//912
slingshot = new Slingshot(stone1.body, {x:80, y:525})
}


function draw() {
  rectMode(CENTER);
  background("white");
  
image(boyImg, 130,570, 175,175); 
image(treeImg, 805,420, 400,400);
stone1.display();
ground1.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
slingshot.display();
detectCollision(stone1, mango1);
detectCollision(stone1, mango2);
detectCollision(stone1, mango3);
detectCollision(stone1, mango4);
detectCollision(stone1, mango5);
}




function mouseDragged(){
    
      Matter.Body.setPosition(this.stone, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
       slingshot.attach(this.stone);
    }
}
function detectCollision(lstone, lmango){
  mangoBodyPosition= lmango.body.position
  stone1BodyPosition = lstone.body.position

  var distance= dist(stone1BodyPosition.x, stone1BodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y )
if (distance<= lmango.r+lstone.r){
  Matter.Body.setStatic(lmango.body, false);
}
}


