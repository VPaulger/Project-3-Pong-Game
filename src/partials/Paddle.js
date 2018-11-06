// import KEYS from '../settings.js'

export default class Paddle {
  constructor(board, width, height, isLeft, up, down) { //add y to paramater of constructor? up, down -- add to parameter?
    // this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.isLeft = isLeft;
    if(isLeft) {
      this.xPosition = 0;
    } else {
      this.xPosition = 504;
    }
    this.board = board;
    this.yPosition = board.height / 2 - height / 2;
    this.speed = 10;
    // this.score = 0;
    // this.yPosition = document.getElementById('gameBoard').clientHeight - this.height;
    //this.keyCode = new KEYS;
    document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case up: //keycode==38
          this.yPosition -= this.speed
          this.yPosition = Math.max(0, this.yPosition)
          // console.log("up")
          break;
        case down:
          this.yPosition += this.speed
          this.yPosition = Math.min(board.height - this.height, this.yPosition)
          // console.log("down")
          break;
      }
    });
  }

  coordinates() {
    let leftX = this.xPosition;
    let rightX = this.xPosition + this.width; //width of the paddle
    let topY = this.yPosition;
    let bottomY = this.yPosition + this.height; //height of the paddle
    return [leftX, rightX, topY, bottomY];
  }
  
  render(svg) {
    document.getElementById('gameBoard').innerHTML += `<rect x="${this.xPosition}" y="${this.yPosition}" width="${this.width}" height="${this.height}"/>`;
  }
}