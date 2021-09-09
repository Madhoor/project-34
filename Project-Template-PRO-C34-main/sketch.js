const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(3000, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);

  hero = new Hero(200,800,250);
  rope = new Rope(hero.body, { x: 500, y: 50 });
  monster = new Monster(1100,550,300);

  // 1st row
  box1 = new Box(600, 100, 70, 70);
  box1a = new Box(600, 100, 70, 70);
  box1b = new Box(600, 100, 70, 70);
  box1c = new Box(600, 100, 70, 70);
  box1d = new Box(600, 100, 70, 70);
  box1e = new Box(600, 100, 70, 70);
  box5 = new Box(600, 200, 70, 70);
  
// 2nd row
  box2 = new Box(900, 100, 70, 70);
  box3 = new Box(900, 100, 70, 70);
  box4 = new Box(900, 100, 70, 70);
  box6 = new Box(900, 200, 70, 70);
  box7 = new Box(900, 200, 70, 70);
  box2a = new Box(900, 100, 70, 70);
  box2b = new Box(900, 100, 70, 70);
  box2c = new Box(900, 100, 70, 70);
 

  // 3rd row

  box3a = new Box(700,100,70,70);
  box3b = new Box(700,100,70,70);
  box3c = new Box(700,100,70,70);
  box3d = new Box(700,100,70,70);
  box3e = new Box(700,100,70,70);
  box3f = new Box(700,100,70,70);
 
 // 4th row

box4a = new Box(800,100,70,70);
box4b = new Box(800,100,70,70);
box4c = new Box(800,100,70,70);
box4d = new Box(800,100,70,70);
box4e = new Box(800,100,70,70);


}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();

  
  box1a.display();
  box1b.display();
  box1c.display();
  box1d.display();
  box1e.display();

  box2a.display();
  box2b.display();
  box2c.display();

  box3a.display();
  box3b.display();
  box3c.display();
  box3d.display();
  box3e.display();
  box3f.display();


  box4a.display();
  box4b.display();
  box4c.display();
  box4d.display();
  box4e.display();

  hero.display();
  rope.display();
  monster.display();

}
function mouseDragged(){

Matter.Body.setPosition(hero.body, {x:mouseX, y:mouseY });


}