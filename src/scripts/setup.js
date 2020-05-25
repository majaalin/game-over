// background images
let bg;
let bg5;
let bg10;
let bg15;
let bg20;
let startScreenBackground;

// items
let crab;
let deadfish;
let bottle;
let plasticBag;
let coffeeCup;
let allGarbage = [];
let garbage;

// buttons
let pauseButton;
let playButton;
let nextButton;

// sound
let scoreSound;
let gameOverSound;
let backgroundSound;

// text
let scoreFont;
let introFirst;
let introSecond;
let introThird;

// booleans
let pauseOrPlay = 'pause';
let soundOnOff = 'sound off';
let gameRunning = true;
let musicOn = true;
let showInfo = false;

// swiming fishes
let swimmingFishes = [];
let animatedFishes = [];
let fishY;
let fishX;
let fishDimensions;
let randomFish;
let randomSpeed;
let numberOfFishes;

// Detecting different browsers:
// Internet Explorer
let IExplorerAgent =
  navigator.userAgent.indexOf('MSIE') > -1 ||
  navigator.userAgent.indexOf('rv:') > -1;
// Chrome
let chromeAgent = navigator.userAgent.indexOf('Chrome') > -1;
// Safari
let safariAgent = navigator.userAgent.indexOf('Safari') > -1;
// Discard Safari since it also matches Chrome
if (chromeAgent && safariAgent) {
  safariAgent = false;
}

function getRandomNumber(a, z) {
  return Math.floor(random(a, z));
}

class Fish {
  constructor(fish, x, y, dim, speed) {
    this.fish = fish;
    this.x = x;
    this.y = y;
    this.dim = dim;
    this.speed = speed;
    this.len = 35;
    this.h = 35;
  }

  show() {
    // Create fish image
    image(this.fish, this.x - this.len, this.y, this.dim, this.dim);
  }

  animate() {
    // Move the fish forward
    this.x += this.speed;

    // Jiggle fish
    this.y += this.y - (this.y + getRandomNumber(-1, 2));

    // Update values when fish has swam by
    if (this.x > windowWidth + this.len) {
      this.fish = swimmingFishes[getRandomNumber(0, 5)];
      this.x = -this.len;
      this.y = getRandomNumber(10 + this.len, windowHeight - this.h);
      this.speed = getRandomNumber(1, 3);
    }
  }
}

function preload() {
  bg = loadImage('./src/assets/background.jpg');
  bg5 = loadImage('./src/assets/background-5.jpg');
  bg10 = loadImage('./src/assets/background-10.jpg');
  bg15 = loadImage('./src/assets/background-15.jpg');
  bg20 = loadImage('./src/assets/background-20.jpg');
  startScreenBackground = loadImage('./src/assets/pollution.jpg');
  backgroundSound = loadSound('./src/assets/underwater.wav');
  scoreSound = loadSound('./src/assets/points.wav');
  gameOverSound = loadSound('./src/assets/gameover.wav');
  wrong = loadSound('./src/assets/wrong.wav');
  crab = loadImage('./src/assets/crab.png');
  deadfish = loadImage('./src/assets/deadfish.png');
  bottle = loadImage('./src/assets/bottle.png');
  plasticBag = loadImage('./src/assets/plastic-bag.png');
  coffeeCup = loadImage('./src/assets/coffee-cup.png');
  scoreFont = loadFont('./src/assets/Bubblegum.ttf');

  // load introtext through loadJSON() - then loop

  // Preload all fish images and add them to swimmingFishes array
  for (let i = 0; i <= 5; i++) {
    swimmingFishes[i] = loadImage('./src/assets/aquatic' + [i] + '.svg');
  }
}

function setup() {
  pixelDensity(2);
  createCanvas(windowWidth, windowHeight);
  backgroundSound.setVolume(0.1);
  backgroundSound.loop();
  textFont(scoreFont);

  // Make new Fish objects
  for (let i = 0; i < 20; i++) {
    // Pick random fish from array
    randomFish = getRandomNumber(0, 5);
    // Starting position of fish on Y axis
    fishY = getRandomNumber(60, windowHeight - 60);
    // Starting position of fish on X axis
    fishX = 0;
    // Size of fish
    if (windowWidth < 850) {
      fishDimensions = 35;
    } else {
      fishDimensions = 45;
    }
    // Random speed
    randomSpeed = getRandomNumber(1, 3);

    // Each object gets an image array, x + y location, dimensions, and speed
    animatedFishes[i] = new Fish(
      swimmingFishes[randomFish],
      fishX,
      fishY,
      fishDimensions,
      randomSpeed
    );
  }

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

  allGarbage = [
    garbageObjects.deadfish,
    garbageObjects.bottle,
    garbageObjects.plasticBag,
    garbageObjects.coffeeCup,
  ];

  // The first garbage item that will fall from the ocean surface
  garbage = allGarbage[Math.floor(Math.random() * allGarbage.length)];

  // Buttons div
  let buttons = createDiv('');
  buttons.center();
  buttons.class('buttons');

  // Pause/play button, visible while playing
  pauseButton = createButton(pauseOrPlay);
  pauseButton.class('pauseButton');
  pauseButton.id('pauseButton');
  pauseButton.parent(buttons);
  pauseButton.size(70, 30);

  // Sound button, always visible
  soundButton = createButton(soundOnOff);
  soundButton.class('soundButton');
  soundButton.id('soundButton');
  soundButton.parent(buttons);
  soundButton.size(110, 30);

  // Play again button, visible on game over screen
  playAgainButton = createButton('play again');
  playAgainButton.size(140, 35);

  // Next (arrow) button, visible on start screen #1 and #2
  nextButton = createButton('>');
  nextButton.class('nextButton');
  nextButton.parent(buttons);
  nextButton.size(40, 40);

  // Play button, visible on start screen #3
  playButton = createButton('play');
  playButton.class('playButton');
  playButton.size(90, 40);

  // Information button, always visible
  infoButton = createButton('?');
  infoButton.class('infoButton');
  infoButton.id('infoButton');
  infoButton.parent(buttons);
  infoButton.size(30, 30);

  function changeScreen() {
    if (screen == 0) {
      screen = 1;
    } else if (screen == 1) {
      screen = 2;
    } else if (screen == 2) {
      screen = 3;
    } else if (screen == 3) {
      screen = 4;
    }
  }

  nextButton.mousePressed(changeScreen);
  playButton.mousePressed(changeScreen);

  // Show or hide instuctions
  function showOrHideInstructions() {
    const infoDiv = document.getElementById('info');
    const btn = document.getElementById('infoButton');
    infoDiv.classList.toggle('--active');

    if (infoDiv.classList.contains('--active')) {
      noLoop();
      btn.innerHTML = 'x';
      gameRunning = false;
    } else if (!infoDiv.classList.contains('--active')) {
      loop();
      btn.innerHTML = '?';
      gameRunning = true;
    }

    // Adding a color to the background layer if the player is using Safari or IE (doesn't support backdrop-filter: blur())
    const infoLayer = document.getElementById('info__layer');

    if (safariAgent || IExplorerAgent) {
      infoLayer.style.backgroundColor = 'rgba(67, 0, 209, 0.95)';
    }
  }

  infoButton.mousePressed(showOrHideInstructions);

  // Introduction text on starting pages
  introFirst = createP(
    'Every day approximately 8 million pieces of plastic pollution find their way into our oceans...'
  );
  introFirst.parent('introduction');

  introSecond = createP(
    'There may now be around 5.25 trillion macro and microplastic pieces floating in the open ocean. Weighing up to 269,000 tonnes...'
  );
  introSecond.parent('introduction');

  introThird = createP(
    'Help Krabbaten to collect all the plastics and save our oceans!'
  );
  introThird.parent('introduction');
}
