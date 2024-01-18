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

test("Throw error if ship is placed on non-empty spot", () => {
  let position = [
    [0, 1],
    [0, 2],
  ];
  gameboard.placeShip(position);
  expect(() => {
    gameboard.placeShip(position);
  }).toThrow();
});

test("Determine if ship is hit after attack", () => {
  let position = [
    [0, 1],
    [0, 2],
    [0, 3],
  ];
  gameboard.placeShip(position);
  expect(gameboard.receiveAttack(0, 1)).toBe(true);
  expect(gameboard.receiveAttack(0, 4)).toBe(false);
});

test("Throw error if attacking spot that's already been hit", () => {
  let position = [
    [0, 1],
    [0, 2],
  ];
  gameboard.placeShip(position);
  gameboard.receiveAttack(0, 1);
  expect(() => {
    gameboard.receiveAttack(0, 1);
  }).toThrow();
});

test("Record hit on a specific ship", () => {
  let position = [
    [0, 1],
    [0, 2],
  ];
  let positionTwo = [
    [0, 3],
    [0, 4],
  ];
  gameboard.placeShip(position);
  gameboard.placeShip(positionTwo);
  gameboard.receiveAttack(0, 1);
  expect(gameboard.ships[0].hits).toBe(1);
  expect(gameboard.ships[1].hits).toBe(0);
});
// test("Record coordinates of missed attack");
// test("Check if all ships are sunk");
