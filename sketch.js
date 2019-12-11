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
let books0, books1, books2, books3, books4, dpls;
let cloud, bg;
let book1 = [];
let book2 = [];
let lf = 0;
let rt;
let cSpeed = 0.5;
let w = 1024;
let h = 760;
let diplomas = [];
let points = 0;
// let life = 3;

// let descKeyRelease = false;

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
  dpls = loadImage('asset/subject/diploma.png');
  bg = loadImage('asset/bg/road.png');
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
      cnv.mouseClicked(function(){
        state = 'description';
      });
      break;
    case 'description':
      description();
      cnv.mouseClicked(function(){
        state = 'game';
      });
      break;
    case 'game':
      game();
      break;
    case 'game over':
      book1 = [];
      book2 = [];
      diplomas = [];
      points = 0;
      if (key == 'r') {
        state = 'titlePage';
      }
      cnv.mouseClicked(function(){
        state = 'titlePage';
      });

      gameOver();
      break;
    case 'win':
      book1 = [];
      book2 = [];
      diplomas = [];
      win();
      break;
    default:
      break;
  }
}

function keyPressed() {
  switch (state) {
    case 'titlePage':
      if (keyCode === ENTER) {
        state = 'description';
      }
      break;
    case 'description':
      if (keyCode === ENTER) {
        state = 'game';
      }
      break;
    case 'game':
      if (key == " ") {
        char.jump();
      }
      break;
    case 'game over':
      book1 = [];
      book2 = [];
      diplomas = [];
      points = 0;
      if (key == 'r') {
        state = 'titlePage';
      }
      break;
    default:
      break;
  }
}

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
  text("~Enter or Click~ to Continue", 600, 720);
}

function game() {
  background (80, 130, random(100, 255), 70);
  fill(100, 50, 30);
  road();
  c();


  //blocks / books
  if (random(1) <= 0.005) {
    // let rbooks = floor(random(0, books.length));
    book1.push(new Book1());
  }
  //horizontal book1
  for (let i = 0; i < book1.length; i++) {
    book1[i].show();
    book1[i].move();
  }
  for (let i = book1.length - 1; i >= 0; i--){
    if(dist(char.x, char.y, book1[i].x, book1[i].y) <= (char.r + book1[i].r) / 3) {
      state = 'game over';
    }
  }
 //book2
  if (random(1) <= 0.001) {
    // let rbooks = floor(random(0, books.length));
    book1.push(new Book2());
  }
  for (let i = 0; i < book2.length; i++) {
    book2[i].show();
    book2[i].move();
  }
  for (let i = book2.length - 1; i >= 0; i--){
    if(dist(char.x, char.y, book2[i].x, book2[i].y) <= (char.r + book2[i].r) / 3) {
      state = 'game over';
    }
  }


  dpa();
  //character
  char.show();
  char.move();
  //distance

}

function road() {
  image(bg, lf, 0, w, h);
  image(bg, rt, 0, w, h);

  lf -= cSpeed;
  rt -= cSpeed;

  if(lf < -w) {
    lf = w;
  }
  if(rt < -w) {
    rt = w;
  }
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

function dpa() {
  textSize(25);
  fill(0);
  text(`Dipolmas: ${points}`, 20, 40);

  // //verticle diplomas
  if (random(1) <= 0.002) {
    diplomas.push(new Diploma());
  }
  for (let i = 0; i < diplomas.length; i++) {
    diplomas[i].move();
    diplomas[i].display();
  }
  for (let i = diplomas.length - 1; i >= 0; i--){
    if(dist(char.x, char.y, diplomas[i].x, diplomas[i].y) <= (char.r + diplomas[i].r) / 2) {
      points++;
      diplomas.splice(i, 1);
    }
  }

  if (points > 5){
    state = 'win';
  }
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
  text(" R to Restart", 400, 350);

  //hit the book for certain amount
}

function win() {
  fill(random(180, 255),random(180, 255), random(180, 255), 50);
  textStyle(BOLD);
  textSize(120);
  text("Congradulation", 130, 240);
}
