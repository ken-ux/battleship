import "./style.css";
import { Player, Computer } from "./Player.js";

// Initialize player and computer.
const player = new Player();
const computer = new Computer();

// Variables to determine what phase the game is in.
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
        // Place ships on player's board.
        if (!(user instanceof Computer)) {
          placePlayerShips(i, j, square);
        }
      } else if (user instanceof Computer) {
        // Only lets Player click Computer's gameboard to make move.
        square.addEventListener("click", () => {
          playerMove(i, j);
        });
      }

      row.appendChild(square);
    }
    container.appendChild(row);
  }
}

// Lets user place ships on their board.
// @param verticalPos: Integer representing vertical positioning on a board.
// @param horizontalPos: Integer representing horizontal positioning on a board.
// @param square: Node that's a DOM reference for a gameboard space.
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

        // If no more ships to place, ship phase is over and attack phase begins.
        if (shipLengths.length === 0) {
          result.textContent = "Click on the Computer's board to make a move.";
          shipPhase = false;
          placeComputerShips();
        }
      }
    });
  }
}

// Places ships on the computer's board randomly without colliding.
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

    // Check if the ship can be placed without colliding with other ships.
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

// Lets player attack the opponent's board and allows the opponent to
// follow-up with their own attack.
// @param verticalPos: Integer representing vertical positioning on a board.
// @param horizontalPos: Integer representing horizontal positioning on a board.
function playerMove(verticalPos, horizontalPos) {
  // Ensures the user is not clicking the same space twice.
  let validMove;

  if (!gameOver) {
    validMove = player.makeMove(computer, [verticalPos, horizontalPos]);
    console.log(validMove);
    clearSquares(computerGameboard);
    displaySquares(computerGameboard, computer);
  }
  checkShips();

  // Computer makes move unless all their ships are sunk.
  if (!gameOver && validMove) {
    computer.makeMove(player);
    clearSquares(playerGameboard);
    displaySquares(playerGameboard, player);
    checkShips();
  }
}

// Styles a square on the gameboard.
// @param square: Node that's a DOM reference for a gameboard space.
// @param position: Object representing a gameboard space.
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

// Clears squares from a gameboard.
// @param gameboard: Node that's a DOM reference to either the player or computer's gameboard.
function clearSquares(container) {
  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }
}

// Checks whether the all the player's or computer's ships sunk and
// updates the result message for the player accordingly.
function checkShips() {
  if (computer.gameboard.shipsSunk()) {
    gameOver = true;
    result.textContent = "Enemy ships are all sunk! You won!";
  } else if (player.gameboard.shipsSunk()) {
    gameOver = true;
    result.textContent = "Player ships are all sunk! You lost.";
  }
}

// Display the player and computer gameboards.
const playerGameboard = document.querySelector("#player-gameboard");
displaySquares(playerGameboard, player);
const computerGameboard = document.querySelector("#computer-gameboard");
displaySquares(computerGameboard, computer);
