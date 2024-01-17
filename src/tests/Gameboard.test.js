import Gameboard from "../Gameboard";

let gameboard;
beforeEach(() => {
  gameboard = new Gameboard();
});
test("Place ship at specific coordinates", () => {
  let position = [
    [0, 1],
    [0, 2],
    [0, 3],
  ];
  gameboard.placeShip(position);
  expect(gameboard.ships[0].position).toEqual(position);
});
test("Throw error if ship is illegal length", () => {
  let position = [[0, 1]];
  let positionTwo = [
    [0, 1],
    [0, 2],
    [0, 3],
    [0, 4],
    [0, 5],
    [0, 6],
  ];
  expect(() => {
    gameboard.placeShip(position);
  }).toThrow();
  expect(() => {
    gameboard.placeShip(positionTwo);
  }).toThrow();
});
// test("Throw error if ship is placed on non-empty spot", () => {});
// test("Determine if ship is hit after attack");
// test("Record hit on a specific ship");
// test("Record coordinates of missed attack");
// test("Check if all ships are sunk");
