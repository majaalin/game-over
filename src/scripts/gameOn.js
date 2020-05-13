let y = -20; // starting position of image
let x = 200;
let speed = 2;
let score = 0;
let scoreText;
let opacity = 200;
let scoreTextColor = 250;

function gameOn() {
  // backgroundSound.setVolume(0.01);
  // backgroundSound.play();
  background(bg);
  fill(0, 0, 0, opacity);
  pg = rect(0, 0, 800, 440);
  textFont(scoreFont);
  fill(scoreTextColor);
  textSize(24);
  scoreText = text('score = ' + score, 70, 35);
  image(garbage, x, y, 35, 35);
  image(crab, mouseX, height - 60, 80, 60);
  y += speed;
  if (y > height) {
    gameOverSound.play();
    screen = 2;
  }

  if (y > height - 60 && x > mouseX - 50 && x < mouseX + 50) {
    scoreSound.play();
    y = -20;
    score += 1;
    opacity -= 5;
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
