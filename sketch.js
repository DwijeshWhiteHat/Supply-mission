var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,packageIMG
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(1300, 600);
	rectMode(CENTER);

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.rectangle(width/2 , 200 , 50 ,50, {restitution:2, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(650, 580, 1300, 20 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
 rect(ground.position.x,ground.position.y,1300,20);
 imageMode(CENTER);
 image(packageIMG,packageBody.position.x,packageBody.position.y,50,50);
 drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on
    Matter.Body.setStatic(packageBody, false);
  }
}



