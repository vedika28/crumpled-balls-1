var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody, ground, paper;
var dustbinLine1, dustbinLine2, dustbinLine3;
var sound, sound2;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);

	paper = new Paper();

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	//World.add(world, ground);

	ground = new Ground();

	dustbinLine1 = new Dustbin(650, 630, 200, 20);
	dustbinLine2 = new Dustbin(540, 590, 20, 100);
	dustbinLine3 = new Dustbin(760, 590, 20, 100);

	Engine.run(engine);

}

function draw() {
	rectMode(CENTER);
	background(0);

	Engine.update(engine);

	paper.display();
	ground.display();

	dustbinLine1.display();
	dustbinLine2.display();
	dustbinLine3.display();

	drawSprites();

}

function keyPressed() {
	if (keyDown(UP_ARROW)) {
		Matter.Body.applyForce(paper.body, paper.body.position, { x: 100, y: -100 });
	}

}



