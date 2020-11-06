
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var mango1,mango2,mango3,mango4,mango5;
var stone;
var boy;
var chain;
var tree;

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	mango1=new Mango(800,340);
	mango2=new Mango(770,360);
	mango3=new Mango(840,340);
	mango4=new Mango(780,390);
	mango5=new Mango(860,360);

	stone=new Stone(350,535);

	boy=new Boy(400,600,150,300);

	chain=new Chain(stone.body,{x:350,y:535});

	tree=new Tree(10,10);

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  tree.display();

  
  boy.display();
  
  chain.display();

  mango1.display(); 
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  stone.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);

  drawSprites();

}


function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});

}

function mouseReleased(){
    
    chain.released();

}

function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}
}

function keyPressed(){

	if(keyCode === 32){
		Matter.Body.setPosition(stone.body,{x:350,y:535})
		chain.attach(stone.body);
	}
}




