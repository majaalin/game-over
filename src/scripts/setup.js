let bg;
let bg5;
let bg10;
let bg15;
let bg20;
let crab;
let allGarbage;
let garbage;
let scoreSound;
let startScreenBackground;
let gameOverSound;
let backgroundSound;
let scoreFont;

function preload() {
  scoreSound = loadSound('./src/assets/points.wav');
  gameOverSound = loadSound('./src/assets/gameover.wav');
  bg = loadImage('./src/assets/background.jpg');
  bg5 = loadImage('./src/assets/background-5.jpg');
  bg10 = loadImage('./src/assets/background-10.jpg');
  bg15 = loadImage('./src/assets/background-15.jpg');
  bg20 = loadImage('./src/assets/background-20.jpg');
  crab = loadImage('./src/assets/crab.png');
  garbage = loadImage('./src/assets/bottle.png');
  allGarbage = ['./src/assets/deadfish.png', './src/assets/bottle.png'];
  startScreenBackground = loadImage('./src/assets/underwater.jpg');
  scoreFont = loadFont('./src/assets/Bubblegum.ttf');
  backgroundSound = loadSound('./src/assets/underwater.wav');
  sound = loadImage('./src/assets/sound.png');
}
function setup() {
  createCanvas(800, 440);
  backgroundSound.setVolume(0.1);
  backgroundSound.loop();
  const deadfish = './src/assets/deadfish.png';
  const bottle = './src/assets/bottle.png';

  allGarbage = [deadfish, bottle];

  //allGarbage = [deadfish, bottle];
  // garbage = loadImage("./src/assets/bottle.png");
  garbage = loadImage(allGarbage[1], (img) => {
    console.log(img.src);
  });
  // garbage = allGarbage[1];
  // console.log(garbage);
  // console.log(allGarbage);
}
