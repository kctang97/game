'use strict';

// pseudocode
//  -- Tang


// declare variables for:
// game state
// energy measurement
let char;
let state = 'titlePage';
let cnv;
let charImg;
let bImg, bImg1, bImg2, bImg3, bImg4;
let cloud;
let subjects = [];
let x, y;
let dist = 0;

function preload() {
  charImg = loadImage('asset/char/char.gif');
  bImg = loadImage('asset/subject/English.png');
  bImg1 = loadImage('asset/subject/Math.png');
  bImg2 = loadImage('asset/subject/Science.png');
  bImg3 = loadImage('asset/subject/History.png');
  bImg4 = loadImage('asset/subject/bookshelf.png');
  cloud = loadImage('asset/subject/cloud.png');
}

function setup() {
  cnv = createCanvas(1024, 760);
  char = new Char();
}

function draw() {
  switch (state) {
    case 'titlePage':
      titlePage();
      cnv.mouseClicked(titleClicked);
      break;
    case 'description':
      description();
      cnv.mouseClicked(descriptionClicked);
      break;
    case 'game':
      game();
      break;
    default:
      break;
  }

  //description page function
  //display character, items, controls

  //pause function to pause the game

  //energy tracker as points drop
  //reach 0 execute game over function

  //set up goal at the end
  //function distance as 1000km
  //if reach 1000km execute you won function
}

function titlePage(){
  background(random(150, 200),random(150, 200),random(150, 200), 30);
  fill(200, 0, 0);
  textStyle(BOLD);
  textSize(120);
  text("Give It A Try", 150, 240);
  fill(random(50, 100), 0, 0, 20);
  textSize(125);
  text("Give It A Try", 160, 250);
  fill(random(0, 200), 50);
  textSize(40);
  text("~Click~ to Start", 350, 600);

}

function titleClicked() {
    state = 'description';
}
function description() {
  background(150, 0, 0);
  //character
  image(charImg, 90, 100, 150, 150);
  fill(0);
  textSize(30);
  text(" * Student *", 200, 190);

  //control
  textSize(30);
  text("|        Space       | : Jump", 50, 350);
  text("|  A  | : Move Left", 50, 400);
  text("|  D  | : Move Right", 50, 450);
  //books
  image(bImg, 500, 110, 100, 100);
  fill(0);
  textSize(30);
  text(" * English Book *", 600, 190);

  image(bImg1, 500, 230, 100, 100);
  fill(0);
  textSize(30);
  text(" * Math Book *", 600, 300);

  image(bImg4, 500, 410, 100, 100);
  fill(0);
  textSize(30);
  text(" * School Works *", 600, 450);

  fill(random(0, 200), 150);
  textSize(40);
  text("~Click~ to continue", 600, 700);
  //a image
  //display from upper left
  //display character
  //display items
  //display controls
  //display winning description
}

function descriptionClicked() {
  state = 'game';
}

function game() {
  background (random(0, 255), 100);
  fill(100, 50, 30);
  rect(0, 745, 1030, 50);

  //cloud
  image(cloud, 200, 200, 100, 100);
  image(cloud, 100, 50, 200, 200);
  image(cloud, 400, 50, 100, 100);
  image(cloud, 500, 100, 150, 100);
  image(cloud, 700, 100, 100, 100);
  image(cloud, 900, 50, 300, 300);

  //blocks / books
  if (random(1) <= 0.01) {
    subjects.push(new Subject());
  }
  for (let s of subjects) {
    s.move();
    s.show();
  }
  //character

  char.show();
  char.move();

  //distance
  distance();
}

function pause() {
  //pause the game
}

function eTracker() {
  //energy set as 100
  //decrease if character touch blocks
  //if 100 -> 0 execute game over
  //if character jump over a block
  //minus -5/-10 energy
  //if character touch/eat/get item/drinks
  //energy increase +5, 100 as limit
}

function c() {
  cloud = 0;
  image(cloud, 200, 50, 100, 100);
  cloud += 1;
}
function distance() {
  textSize(25);
  fill(0);
  text('Distance: ', 20, 40);
}

function gameOver() {
  //hit the book for certain amount
}

function win() {
  //distand value reach "1000"km
  //display "goal" drawing at the end to pass throught
  //display winning music
  //display text "You Successfully Graudate"
}

function keyPressed() {
  if (key == " ") {
    char.jump();
  }
}
