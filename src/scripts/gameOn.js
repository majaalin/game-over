let y = -20; // starting position of image
let x = 200;
let speed = 2;
let score = 0;
let scoreText;
let pauseButton;

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
  //backgroundSound.play();
  background(bg);
  //bg.filter(BLUR, blurred);
  fill(0, 0, 0, opacity);
  pg = rect(0, 0, 800, 440);
  textFont(scoreFont);
  fill('#5e87d6');
  textSize(24);
  scoreText = text('score = ' + score, 70, 35);
  pauseButton = createImg('./src/assets/pause.png');
  pauseButton.position(0, 0);
  pauseButton.mousePressed(pauseGame);
  image(garbage, x, y, 35, 35);
  image(crab, mouseX, height - 80, 87, 60);
  y += speed;

  if (y > height) {
    if (musicOn === true) {
      gameOverSound.play();
    }
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
    if (musicOn === true) {
      scoreSound.play();
    }
    y = -20;
    score += 1;
    // opacity -= 5;
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
