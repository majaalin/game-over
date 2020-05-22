function endScreen() {
  pauseButton.hide();
  soundButton.hide();
  background('white');
  textAlign(CENTER);
  fill('#5e87d6');
  textSize(50);
  text('GAME OVER', width / 2, height / 2 - 30);
  textSize(18);
  fill('#4300d1');
  text('SCORE = ' + score, width / 2, height / 2 + 20);
  playAgainButton.show();
  playAgainButton.class('playAgainButton');
  playAgainButton.mousePressed(goBackToStartPage);
}

function goBackToStartPage() {
  screen = 0;
}
