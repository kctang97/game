class Book2 {
  constructor() {
    this.r = 80;
    this.x = w;
    this.y = h - this.r;
    this.speed = random(5, 10);
    this.img = books;
    // this.speed = 15;
  }
  move() {
    this.x -= this.speed;;
  }
  show() {
    image(books[2], this.x, this.y, this.r, this.r);
  }
}
