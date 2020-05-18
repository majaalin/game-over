let screen = 0;

function draw() {
  if (screen == 0) {
    startScreen();
  } else if (screen == 1) {
    gameOn();
  } else if (screen == 2) {
    music = false;
    endScreen();
  }

  pauseButton.mousePressed(pauseGame);
  pauseButton.id('pauseButton');
  pauseButton.class('pauseButton');
  soundButton.mousePressed(stopMusic);
  soundButton.id('soundButton');
  soundButton.class('soundButton');

  function pauseGame() {
    if (gameRunning === true) {
      noLoop();
      backgroundSound.stop();
      document.getElementById('pauseButton').innerHTML = 'play';
      return (gameRunning = false), (musicOn = false), (pauseOrPlay = 'play');
    }
    if (gameRunning === false) {
      loop();
      backgroundSound.loop();
      document.getElementById('pauseButton').innerHTML = 'pause';
      return (gameRunning = true), (musicOn = true), (pauseOrPlay = 'pause');
    }
  }

  function stopMusic() {
    if (musicOn === true) {
      backgroundSound.stop();
      document.getElementById('soundButton').innerHTML = 'sound on';
      return (musicOn = false), (soundOnOff = 'sound on');
    }
    if (musicOn === false) {
      backgroundSound.loop();
      document.getElementById('soundButton').innerHTML = 'sound off';
      return (musicOn = true), (soundOnOff = 'sound off');
    }
  }
}
