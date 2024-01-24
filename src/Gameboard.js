import Ship from "./Ship.js";

export default class Gameboard {
  constructor() {
    this.grid = this.createGrid();
    this.ships = [];
  }

  // Creates grid that players use to play the game.
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

  // Checks if there's a ship on a specified number of spaces.
  // @param arr: Array of arrays representing the x-y coordinates to check.
  // @returns false if any space has a ship, otherwise returns false.
  isSpaceEmpty(arr) {
    for (let i = 0; i < arr.length; i++) {
      const verticalPos = arr[i][0];
      const horizontaPos = arr[i][1];
      if (this.grid[verticalPos][horizontaPos].hasShip) {
        return false;
      }
    }
    return true;
  }

  // Fills a specified number of empty spaces with a ship.
  // @param arr: Array of arrays representing the x-y coordinates to fill.
  fillSpaces(arr) {
    for (let i = 0; i < arr.length; i++) {
      const verticalPos = arr[i][0];
      const horizontalPos = arr[i][1];
      this.grid[verticalPos][horizontalPos].hasShip = true;
    }
  }

  // Places a ship on the gameboard.
  // @param position: Array of arrays representing the x-y coordinates to place a ship.
  // @throws an error if the ship being placed is too short or too long.
  // @returns true if the ships are placed successfully, otherwise returns false.
  placeShip(position) {
    if (position.length < 2 || position.length > 5) {
      throw new Error("Illegal ship length.");
    }
    if (this.isSpaceEmpty(position)) {
      const ship = new Ship(position);
      this.fillSpaces(position);
      this.ships.push(ship);
      return true;
    } else {
      alert("Those spaces are filled.");
      return false;
    }
  }

  // Receive an attack on the gameboard unless it's already been attacked.
  // @param verticalPos: Integer representing vertical positioning on a board.
  // @param horizontalPos: Integer representing horizontal positioning on a board.
  receiveAttack(verticalPos, horizontaPos) {
    if (!this.grid[verticalPos][horizontaPos].isHit) {
      this.grid[verticalPos][horizontaPos].isHit = true;

      // Check if there's a ship on the space
      if (this.grid[verticalPos][horizontaPos].hasShip) {
        // Find specific ship that was hit
        this.findShip(verticalPos, horizontaPos);
      }
      return true;
    } else {
      alert("That spot has already been attacked.");
      return false;
    }
  }

  // Finds a specific ship that was attacked and adds a hit to it.
  // @param verticalPos: Integer representing vertical positioning on a board.
  // @param horizontalPos: Integer representing horizontal positioning on a board.
  findShip(verticalPos, horizontaPos) {
    let ship_found = false;

    for (let i = 0; i < this.ships.length; i++) {
      if (ship_found) {
        break;
      }
      for (let j = 0; j < this.ships[i].position.length; j++) {
        if (
          this.ships[i].position[j][0] === verticalPos &&
          this.ships[i].position[j][1] === horizontaPos
        ) {
          this.ships[i].hit();
          ship_found = true;
          break;
        }
      }
    }
  }

  // Checks if ships are all ships are sunk.
  // @returns false if any ship isn't sunk, otherwise returns true.
  shipsSunk() {
    for (let i = 0; i < this.ships.length; i++) {
      if (!this.ships[i].isSunk()) {
        return false;
      }
    }
    return true;
  }
}
