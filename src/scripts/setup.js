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
let pauseOrPlay = 'pause';
let soundOnOff = 'sound off';
let gameRunning = true;
let musicOn = true;

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
}

function setup() {
  createCanvas(windowWidth - 290, windowHeight - 140);
  createCanvas(800, 440);
  backgroundSound.setVolume(0.1);
  backgroundSound.loop();

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

  pauseButton = createButton(pauseOrPlay);
  pauseButton.size(70, 30);
  soundButton = createButton(soundOnOff);
  soundButton.size(110, 30);
  playAgainButton = createButton('play again');
  playAgainButton.size(140, 35);
}
