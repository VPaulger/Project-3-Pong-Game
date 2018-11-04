export default class LeftPaddle {
  constructor(boardHeight, width, height, x, y) {
    this.boardHeight = boardHeight;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = 10;
    this.score = 0;
  }

  render() {
    document.getElementById('game').innerHTML += `<rect id="leftPaddle" x="0" y="100" width="8" height="56"/>`;
    document.getElementById('game').innerHTML += `<rect id="rightPaddle" x="504" y="100" width="8" height="56"/>`;
  }
}