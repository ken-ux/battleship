import Ship from "../Ship.js";

let ship;
beforeEach(() => {
  ship = new Ship(1);
});

test("Ship receives a hit", () => {
  ship.hit();
  expect(ship.hits).toBe(1);
});

test("Ship receives multiple hits", () => {
  ship.hit();
  ship.hit();
  expect(ship.hits).toBe(2);
});

test("Ship is not sunk", () => {
  expect(ship.isSunk()).toBe(false);
});

test("Ship is sunk", () => {
  ship.sunk = true;
  expect(ship.isSunk()).toBe(true);
});
