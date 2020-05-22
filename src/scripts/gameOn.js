const mq =
  window.matchMedia("(max-width: 850px)") ||
  window.matchMedia("(max-width: 414px)");

let y = -20; // starting position of image
let x = 200;
let speed = 2;
let score = 0;
let scoreText;

// X-position of garbage item
function pickRandom() {
  x = random(20, width - 20);
}

// Y position of swimming fish
// function randomFishPosition() {
//   fishY = random(height * 0.18, height - height * 0.18);
// }

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

  pauseButton.style.visibility = "visible";
  pauseButton.show();
  soundButton.show();

  function position() {
    if (mq.matches) {
      if (mouseX > width - 60) {
        return width - 60;
      }
      if (mouseX <= 0 + 30) {
        return 0;
      } else {
        return mouseX - 30;
      }
    } else {
      if (mouseX > width - 87) {
        return width - 87;
      }
      if (mouseX <= 0 + 43.5) {
        return 0;
      } else {
        return mouseX - 43.5;
      }
    }
  }

  if (mq.matches) {
    image(garbage.image, x, y, 25, 25);
    image(crab, position(), height - 80, 60, 45);
    textSize(20);
    fill("#5e87d6");
    scoreText = text("score = " + score, 60, 34);
  } else {
    textSize(24);
    fill("#5e87d6");
    scoreText = text("score = " + score, 70, 40);
    image(garbage.image, x, y, 35, 35);
    image(crab, position(), height - 80, 87, 60);
  }

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

  if (y > height - 60 && x > mouseX - 40 && x < mouseX + 40) {
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

  // for (var i = 0; i < 4; i++) {
  //   //setTimeout(image(fish, fishX, fishY, randomSize, randomSize), 5000);

  //   console.log(swimmingFishes[i]);
  // }

  // Placing fish on screen
  image(fish, fishX, fishY, randomSize, randomSize);

  // Moving forward at different speed
  fishX = fishX + random(1, 3);
  // Jiggle
  fishY = fishY - random(-2, 2);

  // Create new fish when it has swam by
  if (fishX > width) {
    fishX = 0;
    fishY = random(height * 0.18, height - height * 0.18);
    fish = swimmingFishes[Math.floor(Math.random() * swimmingFishes.length)];
    randomSize = random(35, 45);
  }
}
