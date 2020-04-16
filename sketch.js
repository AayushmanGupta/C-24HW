// You could have multiple flags like: start, launch to indicate the state of the game.

//const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as 
const Engine = Matter.Engine

*/


var tanker;
var sBalls, tBalls;

function setup() {
    //Setup the canvas, the ground, the tanker, the shooting ball and the bubble balls.
     var canvas = createCanvas(780,400);
     tanker = new Tanker(20,20,50,50);

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
