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

test("Computer can check if space has already been hit", () => {
  // Mark every space as hit except [0, 1] position
  player.gameboard.grid.forEach((arr) => {
    for (let i = 0; i < arr.length; i++) {
      arr[i].isHit = true;
    }
  });
  player.gameboard.grid[0][1].isHit = false;
  expect(computer.makeMove(player)).toEqual([0, 1]);
});
