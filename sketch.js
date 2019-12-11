'use strict';

let char, charImg, graduate;
let state = 'titlePage';
let cnv;
let books1, books3, dpls, city;
let cloud, bg;
let book1 = [];
let book2 = [];
let book3 = [];
let lf = 0;
let rt;
let cSpeed = 0.5;
let rSpeed = 1.5;
let w = 1024;
let h = 760;
let diplomas = [];
let points = 0;
let jump, ps, die, congrat, ms;

function preload() {
  //sound
  soundFormats('mp3', 'ogg');
  ms = loadSound("asset/sound/titlemus.mp3");
  jump = loadSound("asset/sound/jump.mp3");
  ps = loadSound("asset/sound/point.mp3");
  die = loadSound("asset/sound/die.mp3");
  congrat = loadSound('asset/sound/congrat.mp3');

  //image
  city = loadImage('asset/bg/city.png');
  charImg = createImg('asset/char/char.gif');
  graduate = loadImage('asset/char/graduate.png');
  books1 = loadImage('asset/subject/book1.png');
  books3 = loadImage('asset/subject/book3.png');
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
        ms.stop();
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
      cnv.mouseClicked(function(){
        die.stop();
        state = 'game';
      });

      gameOver();
      break;
    case 'win':
      book1 = [];
      book2 = [];
      diplomas = [];
      win();
      cnv.mouseClicked(function(){
        state = 'titlePage';
      });
      break;
    default:
      break;
  }
}

function loaded(){
  ms.play();
}

function keyPressed() {
  switch (state) {
    case 'titlePage':
      if (keyCode === ENTER) {
        ms.stop();
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
        die.stop();
        state = 'game';
      }
      if (keyCode == ESCAPE) {
        die.stop();
        state = 'titlePage';
      }
      break;
    case 'win':
      book1 = [];
      book2 = [];
      diplomas = [];
      points = 0;
      if (keyCode == ENTER) {
        congrat.stop();
        state = 'titlePage';
      }
      break;
    default:
      break;
  }
}

function titlePage(){
  background(50, 150, 255);
  c();
  road();
  fill(200, 0, 0);
  textStyle(BOLD);
  textSize(120);
  text("Keep It Up", 190, 240);
  fill(random(50, 100), 0, 0, 30);
  textSize(125);
  text("Keep It Up", 200, 250);
  fill(random(0, 200));
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
  image(books1, 500, 90, 150, 150);
  fill(0);
  textSize(30);
  text(" * English Book *", 630, 170);

  image(books3, 500, 190, 150, 150);
  fill(0);
  textSize(30);
  text(" * Math Book *", 630, 280);

  //statement
  textSize(20);
  text("Statement: ", 50, 500);
  textSize(20);
  text("The play of this game is to avoid getting hit by books.", 50, 540);
  text("The books represented the workflow that we have to overcome in order to graduate.", 50, 570);
  text("The purpose of having the flashing background and motion blur is to make player's eyes get tired", 50, 600);
  text("Just like our eyes get tired after staring at the digital devices and books for long period of time.", 50, 630);
  //epilepsy
  fill(random(0, 200), 150);
  textSize(32);
  text("~Enter or Click~ to Continue", 550, 720);
}

function game() {
  background (80, 130, random(100, 255), 70);
  fill(100, 50, 30);
  c();
  road();

  //blocks / books
  if (random(1) <= 0.009) {
    book1.push(new Book1());
  }
  //horizontal book1
  for (let i = 0; i < book1.length; i++) {
    book1[i].show();
    book1[i].move();
  }
  for (let i = book1.length - 1; i >= 0; i--){
    if(dist(char.x, char.y, book1[i].x, book1[i].y) <= (char.r + book1[i].r) / 3) {
      die.play();
      state = 'game over';
    }
  }
 //book2
  if (random(1) <= 0.006) {
    // let rbooks = floor(random(0, books.length));
    book2.push(new Book2());
  }
  for (let i = 0; i < book2.length; i++) {
    book2[i].show();
    book2[i].move();
  }
  for (let i = book2.length - 1; i >= 0; i--){
    if(dist(char.x, char.y, book2[i].x, book2[i].y) <= (char.r + book2[i].r) / 3) {
      die.play();
      state = 'game over';
    }
  }


  dpa();
  //character
  char.show();
  char.move();
}

function road() {
  image(bg, lf, 0, w+1, h);
  image(bg, rt, 0, w+1, h);

  lf -= rSpeed;
  rt -= rSpeed;

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
  image(city, lf, 0, w, h - 70);
  image(city, rt, 0, w, h - 70);

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
  if (random(1) <= 0.004) {
    diplomas.push(new Diploma());
  }
  for (let i = 0; i < diplomas.length; i++) {
    diplomas[i].move();
    diplomas[i].display();
  }
  for (let i = diplomas.length - 1; i >= 0; i--){
    if(dist(char.x, char.y, diplomas[i].x, diplomas[i].y) <= (char.r + diplomas[i].r) / 2) {
      points++;
      ps.play();
      diplomas.splice(i, 1);
    } else if (diplomas[i].y > h) {
      diplomas.splice(i, 1);
    }
  }

  if (points >= 4){
    state = 'win';
    congrat.play();
  }
}

function gameOver() {
  fill(200, 0, 0, 10);
  textStyle(BOLD);
  textSize(100);
  text("You Fail !", 290, 240);
  fill(random(100, 190), 0, 0, 40);
  textSize(130);
  text("Classes Fail !", 100, 250);
  fill(random(50, 200));
  textSize(30)
  text(" R to Restart", 400, 350);
  text(" ESC to return Title Page", 320, 400);


  //hit the book for certain amount
}

function win() {
  background(random(180, 255),random(180, 255), random(180, 255), 50);
  fill(random(100, 150),random(100, 150), random(100, 150));
  textStyle(BOLD);
  textSize(120);
  text("Congratulation !", 80, 240);
  image(graduate, 300, 300);
}
