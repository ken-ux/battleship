export default class Ship {
  constructor(position) {
    this.length = position.length;
    this.hits = 0;
    this.sunk = false;
    this.position = position;
  }

  hit = () => {
    if (!this.sunk) {
      this.hits++;
      this.isSunk();
    }
    return "i did it";
  }

  isSunk = () => {
    if (!this.sunk) {
      if (this.hits === this.length) {
        this.sunk = true;
      }
    }
    return this.sunk;
  }
}
