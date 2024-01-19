import { Player, Computer } from "../Player";

let player;
let computer;
beforeEach(() => {
  player = new Player();
  computer = new Computer();
});

test("Player and computer have their own gameboards", () => {
  expect(player.gameboard).not.toBeUndefined();
  expect(computer.gameboard).not.toBeUndefined();
});

test("Player hits are recorded on computer's ships", () => {
  player.makeMove(computer, [0, 1]);
  expect(computer.gameboard.grid[0][1].isHit).toBe(true);
});

test("Computer hits are recorded on player's ships", () => {
  const position = computer.makeMove(player);
  expect(player.gameboard.grid[position[0]][position[1]].isHit).toBe(true);
});
// test("Computer can check if space has already been hit");
// describe("Computer will make a move after player did", () => {
//   test("Computer hits player's board");
//   test("Computer will not make a move if all ships are sunk for either player");
// });
