class Diploma {
  constructor(){
      this.r = 60;
      this.x = random(w);
      this.y = 0 - this.r;
      this.speed = 10;
      this.image = books;
        // this.speed = 15;
    }
    move() {
      this.y += this.speed;
    }
    display() {
      image(books4, this.x, this.y, this.r, this.r);
    }
}
