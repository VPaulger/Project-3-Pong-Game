# Pong Game

A basic pong game using SVGs.

## Setup

**Install dependencies:**

`> npm i`

**Run locally with Webpack Dev Server:**

`> npm start`

**Build for production:**

`> npm run build`

## Keys

**Player 1:**
* a: up
* z: down

**Player 2:**
* ▲ : up
* ▼: down


Project Overview
- goal of the project was to create a classic two plater pong game using ES.next

Project Outcome
- successfully created a functional two player pong game meeting the desired requirements

Troubleshooting & Difficulties
- initial difficulty was understanding how to properly link classes from one js file to another. after learning all of the required paramaters and methods was able to link all classes to render game objects.
- secondary difficulty was linking a const for user key input to the main js file. after research with little headway, needed to ask a peer and learned that importing a const require {} around the name of the class.
- detecting paddle collision was quite difficult and had to carefully build functions taking into account the board dimesions, the paddle dimensions and ball radius.

Project Conclusion
- learned how to use ES.next; another very powerful tool used as a web dev.
- game was fun to make and to play. nice to pay homage to the first video game created.
