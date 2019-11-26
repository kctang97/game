class Subject {
  constructor() {
    this.r = 90;
    this.x = width;
    this.y = height - this.r;
  }
  move() {
    this.x -= 15;
  }
  show() {
    image(bImg, this.x / 0.9, this.y, this.r, this.r);
    image(bImg1, this.x / 0.6, this.y, this.r, this.r);
    image(bImg4, this.x, this.y, this.r, this.r);
  }
}
