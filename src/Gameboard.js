import Ship from "./Ship";

export default class Gameboard {
  constructor() {
    this.grid = this.createGrid();
    this.ships = [];
  }

  createGrid() {
    let grid = {};
    let rowLetter = "A";
    for (let i = 0; i < 10; i++) {
      grid[rowLetter] = [];
      for (let j = 1; j <= 10; j++) {
        grid[rowLetter].push(j);
      }
      rowLetter = String.fromCharCode(rowLetter.charCodeAt(0) + 1);
    }
    return grid;
  }

  placeShip(start, end) {
  }

  receiveAttack() {}
}
