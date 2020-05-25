let screen = 0;

function draw() {
  background(0);
  if (screen == 0) {
    startScreen();
    introFirst.show();
    introSecond.hide();
    introThird.hide();
  } else if (screen == 1) {
    playButton.hide();
    introThird.hide();
    gameOn();
  } else if (screen == 2) {
    music = false;
    playButton.hide();
    endScreen();
    numberOfFishes = 0;
  } else if (screen == 10) {
    startScreen2();
    introSecond.show();
    introFirst.hide();
    introThird.hide();
  } else if (screen == 20) {
    startScreen3();
    introThird.show();
    introFirst.hide();
    introSecond.hide();
  }

  pauseButton.mousePressed(pauseGame);
  soundButton.mousePressed(stopMusic);

  function pauseGame() {
    if (gameRunning === true) {
      noLoop();
      backgroundSound.stop();
      document.getElementById("pauseButton").innerHTML = "play";
      return (gameRunning = false), (musicOn = false), (pauseOrPlay = "play");
    }
    if (gameRunning === false) {
      loop();
      backgroundSound.loop();
      document.getElementById("pauseButton").innerHTML = "pause";
      return (gameRunning = true), (musicOn = true), (pauseOrPlay = "pause");
    }
  }

  function stopMusic() {
    if (musicOn === true) {
      backgroundSound.stop();
      document.getElementById("soundButton").innerHTML = "sound on";
      return (musicOn = false), (soundOnOff = "sound on");
    }
    if (musicOn === false) {
      backgroundSound.loop();
      document.getElementById("soundButton").innerHTML = "sound off";
      return (musicOn = true), (soundOnOff = "sound off");
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
