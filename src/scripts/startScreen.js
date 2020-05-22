function startScreen() {
  //background(96, 157, 255);
  pauseButton.hide();
  playAgainButton.hide();

  background(startScreenBackground);
  fill(255);
  textAlign(CENTER);
  text(
    'Every day approximately 8 million pieces of plastic pollution find their way into our oceans.',
    width / 2,
    height / 2 - 30
  );
  text(
    'There may now be around 5.25 trillion macro and microplastic pieces floating in the open ocean. Weighing up to 269,000 tonnes.',
    width / 2,
    height / 2 - 10
  );
  text(
    'Help Krabbaten to collect all the plastics and save our oceans.',
    width / 2,
    height / 2 + 10
  );
  text('Click to start!', width / 2, height / 2 + 30);
  reset();
}
