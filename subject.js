class Subject {
  constructor() {
    this.r = 70;
    this.x = w;
    this.y = h - this.r;
    this.speed = random(5, 10);
    this.img = books;
    // this.speed = 15;
  }
  move() {
    this.x -= this.speed;;
    // // this.x = random(width, -width * 2);
    // this.x -= this.speed;
    // if (this.x <= -1024) {
    //   this.x = 1;
    // }
  }
  show() {
    // let rbook = Math.floor(Math.random() * books.length);
    // image(books[rbook], this.x, this.y, this.r, this.r);
    image(books[1], this.x, this.y, this.r, this.r);
    image(books[1], this.x + 1000, this.y, this.r, this.r);
  }
}
