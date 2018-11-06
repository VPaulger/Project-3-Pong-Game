// import SVG_NS from '../settings.js'

export default class Board {
  constructor(width, height) {
	this.width = width;
    this.height = height;
    // this.settings = new SVG_NS;
	}
	render(svg) {
    document.getElementById('game').innerHTML = `<svg id="gameBoard" width="${this.width}" height="${this.height}"></svg>`;
    document.getElementById('gameBoard').innerHTML += `<line id="dividingLine" x1="256" y1="0" x2="256" y2="256" stroke="black" stroke-dasharray="4"/>`
	}
}