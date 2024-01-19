import Gameboard from "./Gameboard";

export class Player {
  constructor() {
    this.gameboard = new Gameboard();
  }

  makeMove() {}
}

export class Computer extends Player {
  constructor() {
    super();
  }

  // Modifies class function to hit random space
  makeMove() {}
}
