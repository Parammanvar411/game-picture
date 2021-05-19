const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg;
var dragon,monster,superman,zombies;

function preload(){
     bg= loadImage("GamingBackground.png");
    
}
function setup(){
    var canvas = createCanvas(1500,700);
    engine = Engine.create();
    world = engine.world;

    ground= new Ground(600,500, 2400, 20);
    dragon=new Dragon(600,200,200);
    dragon.x=600;
    dragon.y=600;

    superman= new Hero(600,200,200);
    monster=new Monster(600,500,200);
    monster.x=600;
    zombies=new CoronaVirus(width,height,200);
    zombies.x=500;
    zombies.y=600;
    
}
function draw(){
    background(bg);
    Engine.update(engine);
   ground.display();
    dragon.display();
    superman.display();
    monster.display();
    zombies.display();
    
}
function mouseDragged() {
    Matter.Body.setPosition(superman.body, { x: mouseX, y: mouseY });
  }