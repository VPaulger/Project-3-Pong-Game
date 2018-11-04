export default class Scoreboard {
  constructor(height, width, player1Score, player2Score) {
    this.height = height;
    this.width = width;
    this.player1Score = player1Score;
    this.player2Score = player2Score;
  }

  render(svg) {
    document.getElementById('gameBoard').innerHTML += `<rect id="score" x="50%" y="0" width="${this.width}" height="${this.height}"/>`;
    document.getElementById('score').innerHTML += `<p>${this.player1Score}</p>`;
    document.getElementById('score').innerHTML += `<p>${this.player2Score}</p>`;
  }
}