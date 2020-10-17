const engine=Matter.Engine;
const world=Matter.World;
const bodies=Matter.Bodies;
var myEngine, myWorld, ground, object;
function setup() {
  createCanvas(800,400);
  myEngine=engine.create();
  myWorld=myEngine.world;
  var options={
    isStatic:true
  }
  ground=bodies.rectangle(400,380,800,10,options);
  world.add(myWorld,ground);
  var objOptions={
    restitution:1
  }
  object=bodies.circle(400,100,50,objOptions);
  world.add(myWorld,object);
}

function draw() {
  background(255,255,255); 
  engine.update(myEngine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 600,10)
  ellipseMode(RADIUS);
  ellipse(object.position.x,object.position.y,50,50);
}