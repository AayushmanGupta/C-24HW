// You could have multiple flags like: start, launch to indicate the state of the game.

//const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as 
const Engine = Matter.Engine

*/

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var tanker;
var CannonBall, ShootBalls;

function setup() {
    //Setup the canvas, the ground, the tanker, the shooting ball and the bubble balls.
     var canvas = createCanvas(780,400);
    engine = Engine.create();
    world = engine.world;

    tanker = new Tanker(20,20,50,50);
    ground = new Ground(600,height,1200,20)


}

function draw() {
// Remember to update the Matter Engine and set the background.
tanker.display();

}


function keyReleased() {
    // Call the shoot method for the cannon.
    if (MousePressedOver) {
        sBalls.velocityX = 3;
        sBalls.velocityY = 0;
    }
}
