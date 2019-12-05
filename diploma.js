class Diploma {
  constructor(){
      this.r = 60;
      this.x = w;
      this.y = 0 - this.r;
      this.speed = 10;
        // this.speed = 15;
    }
    move() {
      this.x -= this.speed;
        // // this.x = random(width, -width * 2);
        // this.x -= this.speed;
        // if (this.x <= -1024) {
        //   this.x = 1;
        // }
    }
    show() {
      image(bImg2, this.x, this.y, this.r, this.r);
        // image(bImg1, this.x + (w * 0.1), this.y, this.r, this.r);
        // image(bImg4, this.x + 1000, this.y - 20, this.r + 40, this.r + 40);
    }
}
