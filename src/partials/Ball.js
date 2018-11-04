export default class Ball {
  constructor(radius) {
    this.radius = radius;
    // this.height = height;
    // this.width = width;
    // this.xPosition = xPosition;
    // this.yPosition = yPostition;
    // this.direction = 1;
    // this.vy = Math.floor(Math.random() * 10 - 5);
    // this.vx = this.direction * (6 - Math.abs(this.vy));
  }

  // reset() {
  //   this.x = this.boardWidth / 2;
  //   this.y = this.boardHeight / 2;
  // }

  render(svg) {
    document.getElementById('gameBoard').innerHTML += `<circle cx="256" cy="128" r="${this.radius}"/>`;
  }
}