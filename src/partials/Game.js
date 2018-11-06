import Board from './Board.js'
import Ball from './Ball.js'
import Paddle from './Paddle.js'
import Scoreboard from './Scoreboard.js'
import {KEYS} from '../settings.js'

export default class Game {

  constructor(element, width, height, pause) {//maybe add settings to the parameter
		this.element = document.getElementById(element); //document.getElementById('game')
		this.width = width;
		this.height = height;
		this.board = new Board (width, height);
	  this.ball = new Ball (8, 1, height, width);
		this.leftPaddle = new Paddle (this.board, 8, 56, true, KEYS.w, KEYS.s); //up, down
		this.rightPaddle = new Paddle (this.board, 8, 56, false, KEYS.up, KEYS.down); //, up, down,
    this.scoreboard = new Scoreboard (this.ball, 70, 140);

		//pause function
		this.pause = false;
		this.pause = document.addEventListener("keydown", event => {
      switch (event.keyCode) {
        case KEYS.spaceBar:
					this.pause = !this.pause;
					console.log("pause");
          break;
      }
    });
	}

	//2 paddles -- draw in html need size, position, speed of movement(on axis) - translate on user input
	//1 ball(have to determine size) - have to render the ball in html, 
	//ball needs: wall colission method & paddle collison, goal collision/method
	//player -- add these classes to the constructor of game
	//board class -- have to draw in html 
	//scoreboard class -- draw in html, has a score, need width height

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