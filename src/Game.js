import "./style.css";
import { Player, Computer } from "./Player.js";

// Initialize player and computer
const player = new Player();
const computer = new Computer();

// Variables to determine what phase the game is in
let shipPhase = true;
const shipLengths = [5, 4, 3, 3, 2];
let gameOver = false;

const result = document.querySelector("#result");

function displaySquares(container, user) {
  for (let i = 0; i < user.gameboard.grid.length; i++) {
    const row = document.createElement("div");
    row.classList = "row";
    for (let j = 0; j < user.gameboard.grid[i].length; j++) {
      const square = document.createElement("div");
      //   square.textContent = `${i}, ${j}, ${user.gameboard.grid[i][j].hasShip}, ${user.gameboard.grid[i][j].isHit}`;

      styleSquare(square, user.gameboard.grid[i][j]);

      if (shipPhase) {
        // Place ships on player's board
        if (!(user instanceof Computer)) {
          placePlayerShips(i, j, square);
        }
      } else if (user instanceof Computer) {
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

function placePlayerShips(verticalPos, horizontalPos, square) {
  if (horizontalPos + shipLengths[0] <= player.gameboard.grid.length) {
    square.addEventListener("click", () => {
      let position = [];
      for (let i = 0; i < shipLengths[0]; i++) {
        position.push([verticalPos, horizontalPos + i]);
      }
      if (player.gameboard.placeShip(position)) {
        shipLengths.shift();
        clearSquares(playerGameboard);
        displaySquares(playerGameboard, player);
        result.textContent = `Place another battleship on the board! It is ${shipLengths[0]} units long.`;

        // If no more ships to place, ship phase is over
        if (shipLengths.length === 0) {
          result.textContent = "Click on the Computer's board to make a move.";
          shipPhase = false;
          placeComputerShips();
        }
      }
    });
  }
}

function placeComputerShips() {
  let shipLengths = [5, 4, 3, 3, 2];
  while (shipLengths.length > 0) {
    let validSpaces = true;
    let horizontalPos = Math.floor(
      Math.random() * (computer.gameboard.grid.length - shipLengths[0])
    );
    let verticalPos = Math.floor(
      Math.random() * computer.gameboard.grid.length
    );

    // Check if the ship can be placed without colliding with other ships
    for (let i = 0; i < shipLengths[0]; i++) {
      if (computer.gameboard.grid[verticalPos][horizontalPos + i].hasShip) {
        validSpaces = false;
        break;
      }
    }

    if (!validSpaces) {
      continue;
    } else {
      let position = [];
      for (let i = 0; i < shipLengths[0]; i++) {
        position.push([verticalPos, horizontalPos + i]);
      }
      computer.gameboard.placeShip(position);
      shipLengths.shift();
    }
  }
  clearSquares(computerGameboard);
  displaySquares(computerGameboard, computer);
}

function playerMove(x, y) {
  let validMove;
  if (!gameOver) {
    validMove = player.makeMove(computer, [x, y]);
    console.log(validMove);
    clearSquares(computerGameboard);
    displaySquares(computerGameboard, computer);
  }
  checkShips();

  // Computer makes move unless all their ships are sunk
  if (!gameOver && validMove) {
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
    square.textContent = "✕";
  }
  if (position.hasShip) {
    square.classList += " filled";
  }
  if (position.isHit && position.hasShip) {
    square.textContent = "○";
  }
}

function clearSquares(container) {
  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }
}

function checkShips() {
  if (computer.gameboard.shipsSunk()) {
    gameOver = true;
    result.textContent = "You have won this game!";
  } else if (player.gameboard.shipsSunk()) {
    gameOver = true;
    result.textContent = "Computer won this game!";
  }
}

// Display the player gameboard
const playerGameboard = document.querySelector("#player-gameboard");
displaySquares(playerGameboard, player);

const computerGameboard = document.querySelector("#computer-gameboard");
displaySquares(computerGameboard, computer);
