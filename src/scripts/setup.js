let bg;
let crab;
let allGarbage;
let garbage;

const deadfish = "./src/assets/deadfish.png";
const bottle = "./src/assets/bottle.png";

allGarbage = [deadfish, bottle];

function setup() {
  createCanvas(800, 440);
  bg = loadImage("./src/assets/background.jpg");
  crab = loadImage("./src/assets/crab.png");
  //allGarbage = [deadfish, bottle];
  // garbage = loadImage("./src/assets/bottle.png");
  garbage = loadImage(allGarbage[1], img => {
    console.log(img.src);
  });
  // garbage = allGarbage[1];
  // console.log(garbage);
  // console.log(allGarbage);
}
