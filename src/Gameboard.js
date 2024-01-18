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

  // @param arr contains coordinates for each point on the grid
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

  // @param arr contains coordinates for each point on the grid
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
    if (!this.grid[x][y].isHit) {
      this.grid[x][y].isHit = true;

      // Check if there's a ship on the space
      if (this.grid[x][y].hasShip) {
        let ship_found = false;

        // Find specific ship that was hit
        for (let i = 0; i < this.ships.length; i++) {
          if (ship_found) {
            break;
          }
          for (let j = 0; j < this.ships[i].position.length; j++) {
            if (
              this.ships[i].position[j][0] === x &&
              this.ships[i].position[j][1] === y
            ) {
              this.ships[i].hit();
              ship_found = true;
              break;
            }
          }
        }
        return true;
      } else {
        return false;
      }
    } else {
      throw new Error("That spot has already been attacked.");
    }
  }
}
