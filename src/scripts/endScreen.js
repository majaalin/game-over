function endScreen() {
  pauseButton.hide();
  soundButton.hide();
  cursor('pointer');
  background(120);
  textAlign(CENTER);
  text('GAME OVER', width / 2, height / 2);
  text('SCORE = ' + score, width / 2, height / 2 + 20);
  text('click to play again', width / 2, height / 2 + 40);
}
