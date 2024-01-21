import "./style.css";
import { Player, Computer } from "./Player.js";

// Initialize player and computer
const player = new Player();
const computer = new Computer();

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

      // Styles player's squares on computer's board
      if (user instanceof Computer) {
        styleSquare(square, player.gameboard.grid[i][j], true);
      }

      if (!(user instanceof Computer)) {
        // Style computer's squares on player's board
        styleSquare(square, user.gameboard.grid[i][j], false);

        // Only lets Player click gameboard to make move
        square.addEventListener("click", () => {
          user.gameboard.receiveAttack(i, j);
          clearSquares(container);
          displaySquares(container, user);
          // if the computer loses all their ship, end here
          // else, computer makes their move
        });
      }

      row.appendChild(square);
    }
    container.appendChild(row);
  }
}

// @param square is a node that's a DOM reference for a gameboard space
// @param position is an object representing a gameboard space
// @param isPlayer is a boolean that's true if it's a square the player owns
// Conditionally adds classes to style squares
function styleSquare(square, position, isPlayer) {
  if (position.isHit) {
    square.classList = "hit";
  }
  if (position.hasShip && isPlayer) {
    square.classList += " filled";
  }
  if (position.isHit && position.hasShip && !isPlayer) {
    square.classList += " filled";
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

// Display results
const p = document.querySelector("p");
p.textContent = "Winner is written here";
