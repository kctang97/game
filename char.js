class Char {
  constructor() {
    this.r = 100;
    this.x = w / 2;
    this.y = h - this.r;
    this.v = 0;
    this.g = 1.5;
    this.direction = 'still';
    this.speed = 9;
  }
  jump() {
    if (this.y == h - this.r){
        this.v = -20;
    }
  }

  move() {
    if (keyIsDown(68)) {
      this.x += this.speed;
    }
    if (keyIsDown(65)) {
      this.x -= this.speed;
    }
    if (this.x <= 0) {
      this.x += 10;
    } else if (this.x >= w - 100) {
      this.x-= 10;
    }

    this.y += this.v;
    this.v += this.g;
    this.y = constrain(this.y, 0, h - this.r);
  }
  show() {
    image(charImg, this.x, this.y, this.r, this.r);
  }
}
