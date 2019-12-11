class Book1 {
  constructor() {
    this.r = 70;
    this.x = w;
    this.y = h - this.r;
    this.speed = random(3, 7);
    // this.speed = 15;
  }
  move() {
    this.x -= this.speed;
  }
  show() {
    image(books1, this.x, this.y, this.r, this.r);
  }
}
