class Char {
  constructor() {
    this.r = 100;
    this.x = 10;
    this.y = height - this.r;
    this.v = 0;
    this.g = 1.5;
  }
  jump() {
    if (this.y == height - this.r){
        this.v = -25;
    }
  }

  move() {
    if (keyIsDown(68)) {
      this.x += 5;
    } else if (keyIsDown(65)) {
      this.x -= 5;
    }
    this.y += this.v;
    this.v += this.g;
    this.y = constrain(this.y, 0, height - this.r);
  }
  show() {
    image(charImg, this.x, this.y, this.r, this.r);
  }
}