let bg;
let crab;
let scoreSound;
let startScreenBackground;
let gameOverSound;
let backgroundSound;
let blurred = 20;
let scoreFont;
let deadfish;
let bottle;
let allGarbage = [];
let garbage;

function preload() {
  scoreSound = loadSound("./src/assets/points.wav");
  gameOverSound = loadSound("./src/assets/gameover.wav");
  bg = loadImage("./src/assets/bg2.jpg");
  crab = loadImage("./src/assets/crab3.png");
  deadfish = loadImage("./src/assets/deadfish.png");
  bottle = loadImage("./src/assets/bottle.png");
  startScreenBackground = loadImage("./src/assets/underwater.jpg");
  scoreFont = loadFont("./src/assets/Bubblegum.ttf");
}

function setup() {
  createCanvas(800, 440);

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
