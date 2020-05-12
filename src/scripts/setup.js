let bg;
let crab;
let allGarbage;
let garbage;
let scoreSound;
let startScreenBackground;
let gameOverSound;
let backgroundSound;
let blurred = 0;

function preload() {
  scoreSound = loadSound('./src/assets/points.wav');
  gameOverSound = loadSound('./src/assets/gameover.wav');
  bg = loadImage('./src/assets/bg2.jpg');
  crab = loadImage('./src/assets/crab.png');
  garbage = loadImage('./src/assets/bottle.png');
  allGarbage = ['./src/assets/deadfish.png', './src/assets/bottle.png'];
  startScreenBackground = loadImage('./src/assets/underwater.jpg');
  soundFormats('ogg', 'wav');
  backgroundSound = loadSound('./src/assets/test.wav');
}
function setup() {
  createCanvas(800, 440);
  bg.filter(BLUR, blurred);
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
