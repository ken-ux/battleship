// import Ship from "./Ship";

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

  placeShip(start, end) {}

  receiveAttack() {}
}