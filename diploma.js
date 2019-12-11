class Diploma {
  constructor(){
      this.r = 60;
      this.x = random(w);
      this.y = 0 - this.r;
      this.speed = 5;
      // this.image = dpls;
        // this.speed = 15;
    }
    move() {
      this.y += this.speed;
    }
    display() {
      image(dpls, this.x, this.y, this.r, this.r);
    }
}
