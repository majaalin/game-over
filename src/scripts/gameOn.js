const mq = window.matchMedia("(max-width: 850px)");

let y = -20; // starting position of plastic item
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
    numberOfFishes = 5;
  } else if (score < 15) {
    background(bg10);
    numberOfFishes = 10;
  } else if (score < 20) {
    background(bg15);
    numberOfFishes = 15;
  } else {
    background(bg20);
    numberOfFishes = 20;
  }

  // Loops out fishes on the screen
  for (let i = 0; i < numberOfFishes; i++) {
    animatedFishes[i].show();
    animatedFishes[i].animate();
  }

  pauseButton.style.visibility = "visible";
  pauseButton.show();
  soundButton.show();

  function position() {
    if (mq.matches) {
      //mobile
      if (mouseX >= width - 40) {
        return width - 60;
      }
      if (mouseX <= 0 + 20) {
        return 0;
      } else {
        return mouseX - 20;
      }
    } else {
      //desktop
      if (mouseX >= width - 60) {
        return width - 90;
      }
      if (mouseX <= 0 + 45) {
        return 0;
      } else {
        return mouseX - 30;
      }
    }
  }

  if (mq.matches) {
    //mobile
    image(garbage.image, x, y, 25, 25);
    image(crab, position(), height - 80, 60, 45);
    textSize(20);
    fill("#5e87d6");
    scoreText = text("score = " + score, 60, 34);
  } else {
    //desktop
    image(garbage.image, x, y, 35, 35);
    image(crab, position(), height - 80, 90, 60);
    textSize(24);
    fill("#5e87d6");
    scoreText = text("score = " + score, 70, 40);
  }

  y += speed;

  // Game over if minus score
  if (score < 0) {
    if (musicOn === true) {
      gameOverSound.play();
    }
    screen = 4;
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
    screen = 4;
  }

  // Player catches an item
  if (mq.matches) {
    if (y > height - 80 && x > position() - 30 && x < position() + 30) {
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
  } else {
    if (y > height - 80 && x > mouseX - 45 && x < mouseX + 45) {
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
  }

  if (y == -20) {
    pickRandom();
  }
}
