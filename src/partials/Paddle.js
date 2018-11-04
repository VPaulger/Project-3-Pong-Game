export default class Paddle {
  constructor(width, height, isLeft) { //up, down --add to constructor?
    this.width = width;
    this.height = height;
    this.isLeft = isLeft;
    if(isLeft) {
      this.xPosition = 0;
    } else {
      this.xPosition = 504;
    }
    // this.yPosition = document.getElementById('gameBoard').clientHeight - this.height;
    // document.addEventListener("keydown", event => {
    //   switch (event.key) {
    //     case up:
    //       console.log("up");
    //       break;
    //     case down:
    //       console.log("down");
    //       break;
    //   }
    // });
  }

  render(svg) {
    document.getElementById('gameBoard').innerHTML += `<rect x="${this.xPosition}" y="100" width="${this.width}" height="${this.height}"/>`;
  }
}