# Catch the plastics

<img src="./src/assets/game.png" width="100%">

A game built in p5.js where you as a player helps the crab to catch all the plastics and clean our oceans.

## Link
https://catch-the-plastic.netlify.app

## Authors
- [Maja Alin](https://github.com/majaalin)
- [Camilla Kylmänen Sjörén](https://github.com/camiwd)

## Installation

- Clone the repository: 
```
$ git clone https://github.com/majaalin/game-over/
```
- Run the following command in the project directory to start a local server:
```
$ php -S localhost:3000
```
- Open http://localhost:3000 to view it in the browser.
 
## Pull requests
You'll find past pull request [here](https://github.com/majaalin/game-over/blob/master/PULLREQUESTLOG.md)

## Testers
Programmers:
- Terese Thulin
- Victor Ljungblad 

Non-programmers:
- Eva Alin
- Nellie Alin
- William Alin
- Elisabeth Kylmänen
- Sven-Erik Köllerström

## Code Review from [Daniel Thorsen](https://github.com/DanThor) and [Victor Ljungblad](https://github.com/Ljungblad)
- setup.js :69 - There’s a class called Fish. You could create a new js-file for this class (i.e. fish.js) which makes the code much cleaner and also easier to find the Fish class.

- setup.js:162 and 181 - The object garbageObjects and the array allGarbage are both created within the setup function. Maybe move these two to the top of the document where you define your other variables.

- setup.js:192 - Define the “let buttons” variable in the top of the file where you define your other variables.

- setup.js:239, 257 - Change this “if else” to just an “else”. No need of an “else if” because it will always default to the last one if all other if-statements are false.

- index.html - You have some text written in the html document and some text written in the p5 canvas (endScreen.js). You could write all text in the p5 canvas the same way you wrote it in the endScreen.js to keep the index.html file more clean. This might affect text animations though.

- draw.js:24 - Maybe you could make this to just an “else” instead of “else if”.

- gameOn:110, 134 - Instead of hard coding the width and height of the garbage object in your game logic you could create a class for the garbage object where you set the size of the garbage and then refer to it by naming the class object (i.e. garbage.size, garbage.x etc).

- startingScreen.js:2, 13, 22 - “background(startScreenBackground)” is used in every start screen. Maybe it’s better to include this in the draw function in the draw.js file to display the background when displaying any of the start screens instead of calling the same background in every start screen.

- style.css:33, 137, 158 - Be consistent when naming your classes in css. You’re mixing camelCase, BEM and kebab-case (i.e. soundButton, info__layer and .mobile-portrait).

- Overall, your project has very good structure and comments which makes it easy to read and understand. Nice implementation of reusable functions (i.e. getRandomNumber), beautiful UI/UX and funny sound effects.


## License
This project is licensed under the MIT License.
