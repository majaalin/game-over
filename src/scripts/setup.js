let bg;
let crab;
let allGarbage;
let garbage;
let scoreSound;
let startScreenBackground;
let gameOverSound;
let backgroundSound;
let blurred = 20;
let scoreFont;

function preload() {
  scoreSound = loadSound('./src/assets/points.wav');
  gameOverSound = loadSound('./src/assets/gameover.wav');
  bg = loadImage('./src/assets/bg2.jpg');
  crab = loadImage('./src/assets/crab3.png');
  garbage = loadImage('./src/assets/bottle.png');
  allGarbage = ['./src/assets/deadfish.png', './src/assets/bottle.png'];
  startScreenBackground = loadImage('./src/assets/underwater.jpg');
  scoreFont = loadFont('./src/assets/Bubblegum.ttf');
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
