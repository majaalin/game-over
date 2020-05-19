let screen = 0;

function draw() {
  if (screen == 0) {
    startScreen();
  } else if (screen == 1) {
    playButton.hide();
    gameOn();
  } else if (screen == 2) {
    music = false;
    playButton.hide();
    endScreen();
  } else if (screen == 10) {
    startScreen2();
  } else if (screen == 20) {
    startScreen3();
  }

  pauseButton.mousePressed(pauseGame);
  soundButton.mousePressed(stopMusic);

  function pauseGame() {
    if (gameRunning === true) {
      noLoop();
      backgroundSound.stop();
      document.getElementsByClassName("pauseButton").innerHTML = "play";
      return (gameRunning = false), (musicOn = false), (pauseOrPlay = "play");
    }
    if (gameRunning === false) {
      loop();
      backgroundSound.loop();
      document.getElementsByClassName("pauseButton").innerHTML = "pause";
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
