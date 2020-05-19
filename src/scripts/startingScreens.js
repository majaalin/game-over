function startScreen() {
  background(startScreenBackground);
  fill(255);
  textAlign(CENTER);
  nextButton.show();
  soundButton.show();
  playButton.hide();
  pauseButton.hide();
  playAgainButton.hide();
  text(
    'Every day approximately 8 million pieces of plastic pollution find their way into our oceans.',
    width / 2,
    height / 2
  );
  //introFirst.position(width / 2, height / 2 - 50);
  //text(introFirst, width / 2, height / 2 - 100);
}

function startScreen2() {
  background(startScreenBackground);
  fill(255);
  textAlign(CENTER);
  playButton.hide();
  pauseButton.hide();
  playAgainButton.hide();
  text(
    'There may now be around 5.25 trillion macro and microplastic pieces floating in the open ocean. Weighing up to 269,000 tonnes.',
    width / 2,
    height / 2
  );
}

function startScreen3() {
  background(startScreenBackground);
  fill(255);
  textAlign(CENTER);
  nextButton.hide();
  playButton.show();
  pauseButton.hide();
  playAgainButton.hide();
  text(
    'Help Krabbaten to collect all the plastics and save our oceans!',
    width / 2,
    height / 2
  );

  reset();
}
