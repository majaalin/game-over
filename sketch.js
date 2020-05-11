let screen = 0;
let y = -20;
let x = 200;
let speed = 2;
let score = 0;
let bg;
let crab;
let allGarbage;
let garbage;

function setup() {
  createCanvas(800, 440);
  bg = loadImage('background.jpg');
  crab = loadImage('crab.png');
  garbage = loadImage('bottle.png');
  allGarbage = ['deadfish.png', 'bottle.png'];
}

function draw() {
  if (screen == 0) {
    startScreen();
  } else if (screen == 1) {
    gameOn();
  } else if (screen == 2) {
    endScreen();
  }
}

function startScreen() {
  background(96, 157, 255);
  fill(255);
  textAlign(CENTER);
  text('Catch the plastic!', width / 2, height / 2);
  text('click to start', width / 2, height / 2 + 20);
  reset();
}

function gameOn() {
  background(bg);
  text('score = ' + score, 30, 20);
  image(garbage, x, y, 35, 35);
  rectMode(CENTER);
  image(crab, mouseX, height - 60, 80, 60);
  y += speed;
  if (y > height) {
    screen = 2;
  }
  if (y > height - 60 && x > mouseX - 50 && x < mouseX + 50) {
    y = -20;
    speed += 0.5;
    score += 1;
    garbage = loadImage(
      allGarbage[Math.floor(Math.random() * allGarbage.length)]
    );
  }
  if (y == -20) {
    pickRandom();
  }
}

function pickRandom() {
  x = random(20, width - 20);
}

function endScreen() {
  background(120);
  textAlign(CENTER);
  text('GAME OVER', width / 2, height / 2);
  text('SCORE = ' + score, width / 2, height / 2 + 20);
  text('click to play again', width / 2, height / 2 + 40);
}

function mousePressed() {
  if (screen == 0) {
    screen = 1;
  } else if (screen == 2) {
    screen = 0;
  }
}

function reset() {
  score = 0;
  speed = 2;
  y = -20;
}
