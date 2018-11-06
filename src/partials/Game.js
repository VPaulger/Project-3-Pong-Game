import Board from './Board.js'
import Ball from './Ball.js'
import Paddle from './Paddle.js'
import Scoreboard from './Scoreboard.js'
import {KEYS} from '../settings.js'

export default class Game {

  constructor(element, width, height) {
		this.element = document.getElementById(element);
		this.width = width;
		this.height = height;
		this.board = new Board (width, height);
		this.leftPaddle = new Paddle (this.board, 8, 56, true, KEYS.w, KEYS.s);
    this.rightPaddle = new Paddle (this.board, 8, 56, false, KEYS.up, KEYS.down);
    this.ball = new Ball (8, 1, height, width, this.leftPaddle, this.rightPaddle);
    this.scoreboard = new Scoreboard (this.ball, 70, 140);
    this.pauseGameText = document.getElementById('pauseGame');

		//pause function
		this.pause = false;
		this.pause = document.addEventListener("keydown", event => {
      if (event.key === " ") {
        if (this.pause){
          this.pause = !this.pause;
          this.pauseGameText.style.display = "none";   
        } else {
          this.pause = true;
          this.pauseGameText.style.display = "flex";   
          } 
        }
    });
	}

	render() {
		if (this.pause){
			return;
		}

		document.getElementById('game').innerHTML = '';
		document.getElementById('scoreBoard').innerHTML = '';

		this.board.render();
		this.ball.render(this.leftPaddle, this.rightPaddle);
		this.leftPaddle.render();
		this.rightPaddle.render();
		this.scoreboard.render();
	}

}