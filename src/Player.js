import Gameboard from "./Gameboard.js";

export class Player {
  constructor() {
    this.gameboard = new Gameboard();
  }

  // @param opponent is an instance of the Computer class
  // @param position is an array containing the coordinates to attack, [x, y]
  makeMove(opponent, position) {
    return opponent.gameboard.receiveAttack(position[0], position[1]);
  }
}

export class Computer extends Player {
  constructor() {
    super();
  }

  // Modifies class function to hit random space
  makeMove(opponent) {
    const max = 10;
    let randomX = Math.floor(Math.random() * max);
    let randomY = Math.floor(Math.random() * max);

    // Check if spaces are empty before attacking
    while (opponent.gameboard.grid[randomX][randomY].isHit) {
      randomX = Math.floor(Math.random() * max);
      randomY = Math.floor(Math.random() * max);
    }

    return opponent.gameboard.receiveAttack(randomX, randomY);
  }
}
