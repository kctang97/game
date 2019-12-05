'use strict';

// pseudocode
//  -- Tang


// declare variables for:
// game state
// energy measurement
let char, charImg;
let state = 'titlePage';
let cnv;
let books = [];
let books0, books1, books2, books3, books4;
let cloud;
let subjects = [];
let lf = 0;
let rt;
let cSpeed = 0.5;
let w = 1024;
let h = 760;
let diplomas;
let life = 3;

function preload() {
  //display 1 random book from the list
  for(let i = 0; i < 5; i++) {
    books[i] = loadImage("asset/subject/book" + i + ".png");
  }

  charImg = createImg('asset/char/char.gif');
  books1 = loadImage('asset/subject/book1.png');
  books2 = loadImage('asset/subject/book2.png');
  books3 = loadImage('asset/subject/book3.png');
  books4 = loadImage('asset/subject/book4.png');
  books0 = loadImage('asset/subject/book0.png');
  cloud = loadImage('asset/subject/cloud1.png');
}

function setup() {
  cnv = createCanvas(w, h);
  char = new Char();
  rt = width;
}

function draw() {
  switch (state) {
    case 'titlePage':
      titlePage();
      cnv.mouseClicked(titleClicked);
      if (keyCode === ENTER) {
        titleClicked();
      }
      break;
    case 'description':
      description();
      cnv.mouseClicked(descriptionClicked);
      if (keyCode === ENTER) {
        descriptionClicked();
      }
      break;
    case 'game':
      game();
      break;
    case 'game over':
      gameOver();
      break;
    default:
      break;
  }
}

// function main() {
//
// }

function titlePage(){

  // background(random(150, 200),random(150, 200),random(150, 200), 50);
  background(50, 150, 255);
  c();
  fill(200, 0, 0);
  textStyle(BOLD);
  textSize(120);
  text("Keep It Up", 190, 240);
  fill(random(50, 100), 0, 0, 30);
  textSize(125);
  text("Keep It Up", 200, 250);
  fill(random(0, 200), 100);
  textSize(40);
  text("~Enter or Click~ to Start", 270, 600);

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
  image(books1, 500, 110, 100, 100);
  fill(0);
  textSize(30);
  text(" * English Book *", 600, 170);

  image(books3, 500, 200, 100, 100);
  fill(0);
  textSize(30);
  text(" * Math Book *", 600, 260);

  image(books0, 500, 320, 100, 100);
  fill(0);
  textSize(30);
  text(" * School Works *", 600, 370);
  //statement
  textSize(20);
  text("Statement: ", 50, 500);
  textSize(20);
  text("The concept of this game is to avoid getting hit by books and bookshelves.", 50, 540);
  text("The books and bookshelvess represented the workflow that we have to overcome in order to graduate.", 50, 570);
  text("The idea of having the flashing background is an experiment of making eyes feel tired", 50, 600);
  text("just like our eyes get tired after staring at the digital devices and books all day long.", 50, 630);
  //epilepsy
  fill(random(0, 200), 150);
  textSize(32);
  text("~Enter Click~ to Continue", 600, 720);
}

function descriptionClicked() {
  state = 'game';
}

function game() {
  background (80, 130, random(100, 255), 70);
  fill(100, 50, 30);
  rect(0, 745, 1030, 50);
  c();
  //blocks / books
  if (random(1) <= 0.01) {
    // let rbooks = floor(random(0, books.length));
    subjects.push(new Subject());
  }

  // for (let s of subjects) {
  //   s.move();
  //   s.show();
  // }
  for (let i = 0; i < subjects.length; i++) {
    subjects[i].show();
    subjects[i].move();

  }
  //
  // subjects.forEach(function(s){
  //   s.show();
  //   s.move();
  // })

  for (let i = subjects.length - 1; i >= 0; i--){
    if(dist(char.x, char.y, subjects[i].x, subjects[i].y) <= (char.r + subjects[i].r) / 3) {
      state = 'game over';
      // gameOver();
      // noLoop();
    }
  }

  //character
  char.show();
  char.move();
  //distance
  diploma();
}

function pause() {
  //pause the game
}

function c() {
  //cloud
  image(cloud, lf, 0, w, h);
  image(cloud, rt, 0, w, h);

  lf -= cSpeed;
  rt -= cSpeed;

  if(lf < -w) {
    lf = w;
  }
  if(rt < -w) {
    rt = w;
  }
}

function diploma() {
  textSize(25);
  fill(0);
  text('Diploma: ', 20, 40);

  // if(dist(char.x, char.y, s.x, s.y) <= (char.r + s.r) / 2) {
  //   diplomas ++;
  //
  // }
}

function gameOver() {
  fill(200, 0, 0);
  textStyle(BOLD);
  textSize(120);
  text("Dropped Out !", 130, 240);
  fill(random(100, 200), 0, 0, 30);
  textSize(125);
  text("Dropped Out !", 140, 250);
  fill(200);
  textSize(30)
  text("F5 to Restart", 400, 350);

  //hit the book for certain amount
}

function win() {

}

function keyPressed() {
  if (key == " ") {
    char.jump();
  }
  if (key == 'r') {
    state = 'titlePage';
  }
  // if (keyIsDown(83)) {
  //   char.direction = 'still';
  // }
}
