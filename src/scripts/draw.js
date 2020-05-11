let screen = 0;

function draw() {
  if (screen == 0) {
    startScreen();
  } else if (screen == 1) {
    gameOn();
  } else if (screen == 2) {
    endScreen();
  }
}
