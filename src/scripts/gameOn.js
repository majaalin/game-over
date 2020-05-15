let y = -20; // starting position of image
let x = 200;
let speed = 2;
let score = 0;
let scoreText;
let pauseButton;

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
    screen = 2;
  }

  if (y > height - 60 && x > mouseX - 50 && x < mouseX + 50) {
    if (musicOn === true) {
      scoreSound.play();
    }
    y = -20;
    score += 1;
    // opacity -= 5;
    speed += 0.2;
    // console.log(garbage);
    // console.log(allGarbage[0]);

    // saveFrames(garbage, "png", 1, 25, (data) => {
    //   console.log(data);
    // });

    // if (garbage === './src/assets/deadfish.png') {
    //   console.log('hej' + garbage);
    //   score--;
    // } else {
    //   score++;
    // }

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
