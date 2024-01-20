import "./style.css";
import { Player, Computer } from "./Player.js";

// Initialize player and computer
const player = new Player();
const computer = new Computer();

function displaySquares(container, user) {
  for (let i = 0; i < user.gameboard.grid.length; i++) {
    const row = document.createElement("div");
    row.classList = "row";
    for (let j = 0; j < user.gameboard.grid[i].length; j++) {
      const square = document.createElement("div");
      square.textContent = `${i}, ${j}, ${user.gameboard.grid[i][j].hasShip}, ${user.gameboard.grid[i][j].isHit}`;
      square.addEventListener("click", () => {
        user.gameboard.receiveAttack(i, j);
        clearSquares(container);
        displaySquares(container, user);
      });
      row.appendChild(square);
    }
    container.appendChild(row);
  }
}

function clearSquares(container) {
  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }
}

// Display the player gameboard
const playerGameboard = document.querySelector("#player-gameboard");
displaySquares(playerGameboard, player);

const computerGameboard = document.querySelector("#computer-gameboard");
displaySquares(computerGameboard, computer);
