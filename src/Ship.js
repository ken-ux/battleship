export default class Ship {
  constructor(length) {
    this.length = length;
    this.hits = 0;
    this.sunk = false;
  }

  hit() {
    if (!this.sunk) {
      this.hits++;
    }
    this.isSunk();
  }

  isSunk() {
    if (!this.sunk) {
      if (this.hits === this.length) {
        this.sunk = true;
      }
    }
    return this.sunk;
  }
}
