
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1, bob2, bob3, bob4, bob5;
var roof1, rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

  roof1 = new roof(350,100,300,30);

	bob1 = new bob(250,300);
	bob2 = new bob(300,300);
	bob3 = new bob(350,300);
	bob4 = new bob(400,300);
	bob5 = new bob(450,300);

  rope1 = new rope(bob1.body,roof1.body,-100,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("WHITE");

  roof1.display();

  rope1.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  drawSprites();
 
}



