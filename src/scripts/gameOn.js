let y = -20;
let x = 200;
let speed = 2;
let score = 0;

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
