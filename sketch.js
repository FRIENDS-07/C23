const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var bodies;
var ball;

var box1,box2;
var ground1;

function setup() {

  createCanvas(1000,500);

  engine = Engine.create();
  world = engine.world;

  box1 = new box(800,200);
  box2 = new box(835,130);

  ground1 = new ground();
  
}

function draw() {

  background("black");  

  Engine.update(engine);

  box1.display();
  box2.display();
  ground1.display();

}