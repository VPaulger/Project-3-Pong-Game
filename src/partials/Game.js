import Board from './Board.js'
import Ball from './Ball.js'
import Paddle from './Paddle.js'
import Scoreboard from './Scoreboard.js'
// import SVG_NS from '../settings.js'

export default class Game {

	constructor(element, width, height) {//maybe add settings to the parameter
		this.element = document.getElementById(element); //document.getElementById('game')
		this.width = width;
		this.height = height;
		this.board = new Board (width, height);
	  this.ball = new Ball (8);
		this.leftPaddle = new Paddle (8, 56, true); //up, down
		this.rightPaddle = new Paddle (8, 56, false); //, up, down
		this.scoreboard = new Scoreboard (70, 140, 0, 0);
		//this.settings = new SVG_NS;
		// this.pause = document.addEventListener("keydown", event => {
    //   switch (event.key) {
    //     case space:
    //       console.log("space");
    //       break;
    //   }
    // });
	}

	//2 paddles -- draw in html need size, position, speed of movement(on axis) - translate on user input
	//1 ball(have to determine size) - have to render the ball in html, 
	//ball needs: wall colission method & paddle collison, goal collision/method
	//player -- add these classes to the constructor of game
	//board class -- have to draw in html 
	//scoreboard class -- draw in html, has a score, need width height

	render() {
		document.getElementById('game').innerHTML = '';
		// let svg = document.createElementNS(SVG_NS, 'svg');
		// svg.setAttributeNS(null, 'width', this.width);
		// svg.setAttributeNS(null, 'height', this.height);
		// svg.setAttributeNS(null, 'viewBox', `0 0 ${this.width} ${this.height}`);
		// this.element.appendChild(svg);
		//document.getElementById('game').innerHTML = `<svg id="gameBoard" width="${this.width}" height="${this.height}"></svg>`;
		this.board.render();
		this.ball.render();
		this.leftPaddle.render();
		this.rightPaddle.render();
		this.scoreboard.render();
	}

}