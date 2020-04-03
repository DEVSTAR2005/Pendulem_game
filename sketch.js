const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var swig,bar;


function setup(){
  var canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

  var option=
  {
    isStatic:true
  }

  bar = Bodies.rectangle(600,200,500,25,option);
  swig = Bodies.rectangle(600,300,500,25);

  lin = new Chain(swig,{x:600,y:200})



  World.add(world,bar);
  World.add(world,swig);
}

function draw(){
  background(50);
  Engine.update(engine);

  rectMode(CENTER)
  rect(bar.position.x,bar.position.y,500,25)
  rect(swig.position.x,swig.position.y,50,50)

  if(keyDown("space"))
  {
    swig.position.x = mouseX   ;
    swig.position.y = mouseY   ;
  }

  lin.display();

}
