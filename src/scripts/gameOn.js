let y = -20; // starting position of image
let x = 200;
let speed = 2;
let score = 0;
let scoreText;

// X-position of garbage item
function pickRandom() {
  x = random(20, width - 20);
}

function gameOn() {
  if (score < 5) {
    background(bg);
  } else if (score < 10) {
    background(bg5);
  } else if (score < 15) {
    background(bg10);
  } else if (score < 20) {
    background(bg15);
  } else {
    background(bg20);
  }

  fill("#5e87d6");

  scoreText = text("score = " + score, 70, 35);
  image(garbage.image, x, y, 35, 35);
  image(crab, mouseX, height - 80, 87, 60);
  y += speed;

  if (score < 0) {
    // Game over if minus score
    if (musicOn === true) {
      gameOverSound.play();
    }
    screen = 2;
  }

  if (garbage.type === "deadfish" && y > height) {
    // Game continues if deadfish is not catched
    gameOverSound.pause();
    y = -20;
    garbage = allGarbage[Math.floor(Math.random() * allGarbage.length)];
  } else if (garbage.type != "deadfish" && y > height) {
    // Game over if plastic is not catched
    if (musicOn === true) {
      gameOverSound.play();
    }
    screen = 2;
  }

  if (y > height - 60 && x > mouseX - 50 && x < mouseX + 50) {
    // Player catches an item
    if (musicOn === true && garbage.type != "deadfish") {
      scoreSound.play();
    }

    if (garbage.type === "deadfish") {
      score -= 1;
      if (musicOn === true) {
        wrong.play();
      }
    } else {
      score += 1;
      if (musicOn === true) {
        scoreSound.play();
      }
    }

    y = -20;
    speed += 0.2;

    garbage = allGarbage[Math.floor(Math.random() * allGarbage.length)];
  }

  if (y == -20) {
    pickRandom();
  }
}
