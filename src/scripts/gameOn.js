let y = -20; // starting position of image
let x = 200;
let speed = 2;
let score = 0;
let scoreText;
let opacity = 200;
let scoreTextColor = 250;

function pickRandom() {
  x = random(20, width - 20);
}

function gameOn() {
  //backgroundSound.play();
  background(bg);
  //bg.filter(BLUR, blurred);
  fill(0, 0, 0, opacity);
  pg = rect(0, 0, 800, 440);
  textFont(scoreFont);
  fill(scoreTextColor);
  textSize(24);
  scoreText = text("score = " + score, 70, 35);
  image(garbage.image, x, y, 35, 35);
  // console.log(garbage.type);
  image(crab, mouseX, height - 60, 80, 60);
  y += speed;

  if (score < 0) {
    // Game over if minus score
    gameOverSound.play();
    screen = 2;
  }

  if (garbage.type === "deadfish" && y > height) {
    // Game continues if deadfish is not catched
    y = -20;
    garbage = allGarbage[Math.floor(Math.random() * allGarbage.length)];
  } else if (garbage.type != "deadfish" && y > height) {
    // Game over if plastic is not catched
    gameOverSound.play();
    screen = 2;
  }

  if (y > height - 60 && x > mouseX - 50 && x < mouseX + 50) {
    scoreSound.play();
    y = -20;
    //console.log(bg.blurred);
    opacity -= 5;
    speed += 0.2;

    if (garbage.type === "deadfish") {
      score -= 1;
    } else {
      score += 1;
    }

    garbage = allGarbage[Math.floor(Math.random() * allGarbage.length)];
  }

  if (y == -20) {
    pickRandom();
  }
}
