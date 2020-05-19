let bg;
let bg5;
let bg10;
let bg15;
let bg20;
let crab;
let scoreSound;
let startScreenBackground;
let gameOverSound;
let backgroundSound;
let scoreFont;
let deadfish;
let bottle;
let plasticBag;
let coffeeCup;
let allGarbage = [];
let garbage;
let pauseButton;
let playButton;
//let nextButton;
let pauseOrPlay = 'pause';
let soundOnOff = 'sound off';
let gameRunning = true;
let musicOn = true;
let introFirst;

function preload() {
  scoreSound = loadSound('./src/assets/points.wav');
  gameOverSound = loadSound('./src/assets/gameover.wav');
  bg = loadImage('./src/assets/background.jpg');
  bg5 = loadImage('./src/assets/background-5.jpg');
  bg10 = loadImage('./src/assets/background-10.jpg');
  bg15 = loadImage('./src/assets/background-15.jpg');
  bg20 = loadImage('./src/assets/background-20.jpg');
  crab = loadImage('./src/assets/crab.png');
  deadfish = loadImage('./src/assets/deadfish.png');
  bottle = loadImage('./src/assets/bottle.png');
  plasticBag = loadImage('./src/assets/plastic-bag.png');
  coffeeCup = loadImage('./src/assets/coffee-cup.png');
  startScreenBackground = loadImage('./src/assets/pollution.jpg');
  scoreFont = loadFont('./src/assets/Bubblegum.ttf');
  backgroundSound = loadSound('./src/assets/underwater.wav');
  sound = loadImage('./src/assets/sound.png');
  wrong = loadSound('./src/assets/wrong.wav');
  //nextButton = loadImage("./src/assets/pointing.png");
}

function setup() {
  //createCanvas(windowWidth - 50, windowHeight - 50);
  createCanvas(800, 440);
  backgroundSound.setVolume(0.1);
  backgroundSound.loop();
  textFont(scoreFont);
  textSize(24);

  const garbageObjects = {
    deadfish: {
      type: 'deadfish',
      image: deadfish,
    },
    bottle: {
      type: 'bottle',
      image: bottle,
    },
    plasticBag: {
      type: 'plastic-bag',
      image: plasticBag,
    },
    coffeeCup: {
      type: 'coffee-cup',
      image: coffeeCup,
    },
  };

  //const numberOfObjects = Object.keys(bla).length; //2

  // for (let i = 0; i < numberOfObjects; i++) {
  //   allGarbage.push(Object.keys(garbageObjects)[i]);
  // }

  allGarbage = [
    garbageObjects.deadfish,
    garbageObjects.bottle,
    garbageObjects.plasticBag,
    garbageObjects.coffeeCup,
  ];

  // The first garbage item that will fall from the ocean surface
  garbage = allGarbage[Math.floor(Math.random() * allGarbage.length)];

  // Pause/play button, visible while playing
  pauseButton = createButton(pauseOrPlay);
  pauseButton.class('pauseButton');
  pauseButton.id('pauseButton');
  pauseButton.size(70, 30);

  // Sound button, always visible
  soundButton = createButton(soundOnOff);
  soundButton.class('soundButton');
  soundButton.id('soundButton');
  soundButton.size(110, 30);
  playAgainButton = createButton("play again");
  playAgainButton.size(140, 35);

  // Next (arrow) button, visible on start screen #1 and #2
  nextButton = createButton('>');
  nextButton.class('nextButton');
  nextButton.size(40, 40);

  // Play button, visible on start screen #3
  playButton = createButton('play');
  playButton.class('playButton');
  playButton.size(90, 40);

  function changeScreen() {
    if (screen == 0) {
      screen = 10;
    } else if (screen == 10) {
      screen = 20;
    } else if (screen == 20) {
      screen = 1;
    }
  }

  nextButton.mousePressed(changeScreen);
  playButton.mousePressed(changeScreen);

  introFirst = createP(
    "Every day approximately 8 million pieces of plastic pollution find their way into our oceans..."
  );
  introFirst.parent("introduction");

  introSecond = createP(
    "There may now be around 5.25 trillion macro and microplastic pieces floating in the open ocean. Weighing up to 269,000 tonnes..."
  );
  introSecond.parent("introduction");

  introThird = createP(
    "Help Krabbaten to collect all the plastics and save our oceans!"
  );
  introThird.parent("introduction");
}
