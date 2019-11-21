'use strict';

// pseudocode
//  -- Tang


// declare variables for:
// game state
// energy measurement

function preload() {
  //background
  //character
  //blocks
  //items
  //background music
}

function setup() {
  createCanvas(1024, 760);

}

function draw() {
  displayTitlePage();

  //start with title page
  //controls in title page function

  //description page function
  //display character, items, controls

  //pause function to pause the game

  //energy tracker as points drop
  //reach 0 execute game over function

  //set up goal at the end
  //function distance as 1000km
  //if reach 1000km execute you won function
}

function displayTitlePage(){
  background(random(150, 200),random(150, 200),random(150, 200), 20);
  fill(200, 0, 0);
  textStyle(BOLD);
  textSize(120);
  text("Give It A Try", 150, 240);
  fill(random(50, 100), 0, 0, 20);
  textSize(125);
  text("Give It A Try", 160, 250);

  fill(random(0, 200), 30);
  textSize(40);
  text("~Enter~ to Start", 350, 600);

}

function description() {
  background(200, 0, 0);
  //a image
  //display from upper left
  //display character
  //display items
  //display controls
  //display winning description
}

function pause() {
  //pause the game
}

// class game {
//   //energy measure top right/left
//   //distance count value
//   //character controls
//   //background
//   //blocks
//   //
// }

function eTracker() {
  //energy set as 100
  //decrease if character touch blocks
  //if 100 -> 0 execute game over
  //if character jump over a block
  //minus -5/-10 energy
  //if character touch/eat/get item/drinks
  //energy increase +5, 100 as limit
}

function distance() {
  //count distance start with 0
  //total up 1000km
  // display "Goal"
  //execute winner text
}

function displayGameOver() {
  //code when energy (100) reach 0
  //display gameover center screen
}

function win() {
  //distand value reach "1000"km
  //display "goal" drawing at the end to pass throught
  //display winning music
  //display text "You Successfully Graudate"
}

// class item {
//   //a sketch / picture of drink
//   //display in the game page
// }

function keyPressed() {
  if (key == ENTER) {
    //show desciption page
  } else {
    //nothing happen
  }
  if (key === RIGHT_ARROW) {
    //game start
  } else {
    //nothing happen
  }
}
