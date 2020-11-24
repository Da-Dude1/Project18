
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
  img1=loadImage("boy.png")
  img2= loadImage("tree.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
	ground= new Ground(400,680,800,20)
	
	mango= new Mango(600,400,20,20)
	mango1= new Mango(500,430,20,20)
  mango2= new Mango(700,430,20,20)
  tree=new Tree(600,460,280,20)
 

	stone= new Stone(200,350,50)
	chain= new SlingShot(stone.body,{x:100,y:550})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display()
  
  mango.display()
  mango1.display()
  mango2.display()
  image(img1,200,600,300,300)
  
 

  tree.display()
  tree.visible=false
  image(img2,600,500,300,300)
  mango.display()
  mango1.display()
  mango2.display()
  chain.display()
  stone.display()
  
  detectollision(stone,mango)
  detectollision(stone,mango1)
  detectollision(stone,mango2)
  
  drawSprites();
  
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    chain.fly()
}

function detectollision(Lstone,Lmango){
    stoneBodyPosition= Lstone.body.position
    mangoBodyPosition= Lmango.body.position

    var distance= dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
    if (distance <= Lstone+ Lmango.r) {
      Matter.Body.setStatic (Lmango.body,false)
    }

}
