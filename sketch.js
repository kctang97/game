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
  charImg = createImg('asset/char/char.gif');
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
  image(charImg, 40, 100, 150, 150);
  fill(0);
  textSize(30);
  text(" * Student *", 180, 190);

  //control
  textSize(30);
  text("|        Space       | : Jump", 90, 310);
  text("|  A  | : Move Left", 90, 350);
  text("|  D  | : Move Right", 90, 390);
  //books
  image(bImg, 500, 110, 100, 100);
  fill(0);
  textSize(30);
  text(" * English Book *", 600, 170);

  image(bImg1, 500, 200, 100, 100);
  fill(0);
  textSize(30);
  text(" * Math Book *", 600, 260);

  image(bImg4, 500, 320, 100, 100);
  fill(0);
  textSize(30);
  text(" * School Works *", 600, 370);

  textSize(20);
  text("Statement: ", 50, 500);
  textSize(20);
  text("The concept of this game is to avoid getting hit by books and bookshelves.", 50, 540);
  text("The books and bookshelvess represented the workflow that we have to overcome in order to graduate.", 50, 570);
  text("The idea of having the flashing background is an experiment of making eyes feel tired", 50, 600);
  text("just like our eyes get tired after staring at the digital devices and books all day long.", 50, 630);
  fill(random(0, 200), 150);
  textSize(40);
  text("~Click~ to continue", 600, 700);


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
