export default class Scoreboard {
  constructor(ball, height, width) {
    this.height = height;
    this.width = width;
    this.player1Score = 0;
    this.player2Score = 0;
    this.ball = ball;
    this.pongWin = new Audio("public/sounds/pong-04.wav");
  }

  ballScoreCollision(){
    if (this.ball.xPosition <= this.ball.radius) {
      this.player2Score ++;
      this.ball.reset();
      console.log('goal scored!');
    }

    if (this.ball.xPosition + this.ball.radius >= this.ball.boardWidth) {
      this.player1Score ++;
      this.ball.reset();
      console.log('goal scored!');
    }

    if (this.player1Score == 10) {
      alert('You WON!');
      this.pongWin.play();
      this.gameReset();
    }

    if (this.player2Score == 10) {
      alert('You WON!');
      this.pongWin.play();
      this.gameReset();
    }
  }

  gameReset() {
    this.ball.leftPaddle.reset();
    this.ball.rightPaddle.reset();
    this.player1Score = 0;
    this.player2Score = 0;
  }

  render(svg) {
    this.ballScoreCollision();

    document.getElementById('scoreBoard').innerHTML += `<p>Player 1 Score: ${this.player1Score}</p><p>Player 2 Score: ${this.player2Score}</p>`;
  }
}