
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1,dustbin2,dustbin3,ground;

function preload()
{
	
}

function setup() {
	createCanvas(1500,400);
	background(255,255,255);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	dustbin1 = new Dustbin( 1195,250,25,200);
	dustbin2 = new Dustbin(955,250,25,200);
	dustbin3 = new Dustbin(1075,344,268,20);

	ground = new Ground(750,363,1500,20);

	ball = new Paper(450,200,10);

	keyPressed();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ball.display();
  
  drawSprites();

}

function keyPressed() {
 if (keyCode === UP_ARROW){
	 Matter.Body.applyForce(ball.body,ball.body.position,{x:13,y:-20});

}

}
	 


