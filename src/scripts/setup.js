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
let allGarbage = [];
let garbage;

function preload() {
  scoreSound = loadSound("./src/assets/points.wav");
  gameOverSound = loadSound("./src/assets/gameover.wav");
  bg = loadImage('./src/assets/background.jpg');
  bg5 = loadImage('./src/assets/background-5.jpg');
  bg10 = loadImage('./src/assets/background-10.jpg');
  bg15 = loadImage('./src/assets/background-15.jpg');
  bg20 = loadImage('./src/assets/background-20.jpg');
  crab = loadImage("./src/assets/crab.png");
  deadfish = loadImage("./src/assets/deadfish.png");
  bottle = loadImage("./src/assets/bottle.png");
  startScreenBackground = loadImage("./src/assets/underwater.jpg");
  scoreFont = loadFont("./src/assets/Bubblegum.ttf");
  backgroundSound = loadSound('./src/assets/underwater.wav');
  sound = loadImage('./src/assets/sound.png');
}

function setup() {
  createCanvas(800, 440);
  backgroundSound.setVolume(0.1);
  backgroundSound.loop();

  const garbageObjects = {
    deadfish: {
      type: "deadfish",
      image: deadfish,
    },
    bottle: {
      type: "bottle",
      image: bottle,
    },
  };

  //const numberOfObjects = Object.keys(bla).length; //2

  // for (let i = 0; i < numberOfObjects; i++) {
  //   allGarbage.push(Object.keys(garbageObjects)[i]);
  // }

  allGarbage = [garbageObjects.deadfish, garbageObjects.bottle];

  // The first garbage item that will fall from the ocean surface
  garbage = allGarbage[Math.floor(Math.random() * allGarbage.length)];
}
