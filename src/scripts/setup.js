let bg;
let crab;
let allGarbage;
let garbage;
let test;

function preload() {
  bg = loadImage('./src/assets/bg2.jpg');
  crab = loadImage('./src/assets/crab.png');
  garbage = loadImage('./src/assets/bottle.png');
  allGarbage = ['./src/assets/deadfish.png', './src/assets/bottle.png'];
  test = loadImage('./src/assets/bg3.jpg');
}
function setup() {
  createCanvas(800, 440);
}
