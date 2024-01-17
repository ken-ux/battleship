import Ship from "./Ship";

export default class Gameboard {
  constructor() {
    this.grid = this.createGrid();
    this.ships = [];
  }

  createGrid() {
    let grid = [];
    for (let i = 0; i < 10; i++) {
      let row = [];
      for (let j = 0; j < 10; j++) {
        row.push({ hasShip: false, isHit: false });
      }
      grid.push(row);
    }
    return grid;
  }

  // Checks if the spaces on the grid are empty
  isSpaceEmpty(arr) {
    for (let i = 0; i < arr.length; i++) {
      const x = arr[i][0];
      const y = arr[i][1];
      if (this.grid[x][y].hasShip) {
        return false;
      }
    }
    return true;
  }

  fillSpaces(arr) {
    for (let i = 0; i < arr.length; i++) {
      const x = arr[i][0];
      const y = arr[i][1];
      this.grid[x][y].hasShip = true;
    }
  }

  // @param position are the coordinates of each space the ship fills
  placeShip(position) {
    if (position.length < 2 || position.length > 5) {
      throw new Error("Illegal ship length.");
    }
    if (this.isSpaceEmpty(position)) {
      const ship = new Ship(position);
      this.fillSpaces(position);
      this.ships.push(ship);
    } else {
      throw new Error("Those spaces are filled.");
    }
  }

  receiveAttack(x, y) {
    if (this.grid[x][y].hasShip === true) {
      this.grid[x][y].isHit = true;
    }
  }
}
