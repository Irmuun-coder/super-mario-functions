// Player position
let x = 100;
let y = 300;
speed = 5;
let movement = true; 
let backward = true;

// Jump state
let jumping = false;
let jumpFrame = 0;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  noStroke();
  background(255, 200, 77); // sky
  fill(255,220,13)
  circle(300,300,300)
  

  // ground
  stroke(0);
  fill(226, 202, 118);
  rect(0, 330, width, 70);
  
  updateJump();
  updateMovement();
  drawPlayer();
}

// ==================================================
// JUMP FUNCTION
// ==================================================
function jump() {
  if (!jumping) {
    jumping = true;
    jumpFrame = 0;
  }
}

function keyPressed() {

 
  
  
}

function updateMovement() {

if (backward === true) {
  if (keyIsDown(LEFT_ARROW) || keyIsDown(65)) {
    x -= speed;
  }
}  
  
if (movement === true) {
  if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)) {
    x += speed;
  
  }
}
  if (keyIsDown() || keyIsDown(38)) {
    jump();
  }
  
  // Keep player on screen
  x = constrain(x, 0, width - 40);
}



// ==================================================
// 🧠 JUMP LOGIC
// ==================================================
function updateJump() {
  if (!jumping) return;

  jumpFrame++;

  let t = jumpFrame / 30;
  let height = sin(t * PI) * 120;
  y = 300 - height;

  if (jumpFrame >= 30) {
    jumping = false;
    y = 300;
  }
}

// ==================================================
// 🎨 DRAW PLAYER
// ==================================================
function drawPlayer() {
  
  let setting = false;
  
  fill(255, 60, 60);
  rect(x, y, 40, 40);
  
  if (x>=300) {
    movement = false;
  }
  if (x < 300){
    movement = true;
  }
   if (x<=75) {
    backward = false;
  }
  if (x > 75) {
    backward = true;
  }
}