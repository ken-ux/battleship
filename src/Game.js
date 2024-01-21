import "./style.css";
import { Player, Computer } from "./Player.js";

// Initialize player and computer
const player = new Player();
const computer = new Computer();
let gameOver = false;

// Populate gameboards with ships, allow users to choose placement later
player.gameboard.placeShip([
  [0, 1],
  [0, 2],
  [0, 3],
]);

player.gameboard.placeShip([
  [3, 1],
  [3, 2],
  [3, 3],
  [3, 4],
]);

computer.gameboard.placeShip([
  [1, 1],
  [1, 2],
  [1, 3],
]);

function displaySquares(container, user) {
  for (let i = 0; i < user.gameboard.grid.length; i++) {
    const row = document.createElement("div");
    row.classList = "row";
    for (let j = 0; j < user.gameboard.grid[i].length; j++) {
      const square = document.createElement("div");
      square.textContent = `${i}, ${j}, ${user.gameboard.grid[i][j].hasShip}, ${user.gameboard.grid[i][j].isHit}`;

      styleSquare(square, user.gameboard.grid[i][j]);

      if (user instanceof Computer) {
        // Only lets Player click Computer's gameboard to make move
        square.addEventListener("click", () => {
          playerMove(i, j);
        });
      }

      row.appendChild(square);
    }
    container.appendChild(row);
  }
}

function playerMove(x, y) {
  if (!gameOver) {
    player.makeMove(computer, [x, y]);
    clearSquares(computerGameboard);
    displaySquares(computerGameboard, computer);
  }
  checkShips();

  // Computer makes move unless all their ships are sunk
  if (!gameOver) {
    computer.makeMove(player);
    clearSquares(playerGameboard);
    displaySquares(playerGameboard, player);
    checkShips();
  }
}

// @param square is a node that's a DOM reference for a gameboard space
// @param position is an object representing a gameboard space
// @param isPlayer is a boolean that's true if it's a square the player owns
// Conditionally adds classes to style squares
function styleSquare(square, position) {
  if (position.isHit) {
    square.classList = "hit";
  }
  if (position.hasShip) {
    square.classList += " filled";
  }
}

function clearSquares(container) {
  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }
}

function announceResult(user) {
  const p = document.querySelector("p");
  p.textContent = `${user} won this game!`;
}

function checkShips() {
  if (computer.gameboard.shipsSunk()) {
    gameOver = true;
    announceResult("You");
  } else if (player.gameboard.shipsSunk()) {
    gameOver = true;
    announceResult("Computer");
  }
}

// Display the player gameboard
const playerGameboard = document.querySelector("#player-gameboard");
displaySquares(playerGameboard, player);

const computerGameboard = document.querySelector("#computer-gameboard");
displaySquares(computerGameboard, computer);
