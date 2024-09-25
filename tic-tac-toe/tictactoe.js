const readline = require("readline-sync");
const MESSAGES = require("./tictactoe_messages.json");

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayBoard(board) {
  console.log("");
  console.log("     |     |");
  console.log(`  ${board["1"]}  |  ${board["2"]}  |  ${board["3"]}`);
  console.log("     |     |");
  console.log("-----+-----+-----");
  console.log("     |     |");
  console.log(`  ${board["4"]}  |  ${board["5"]}  |  ${board["6"]}`);
  console.log("     |     |");
  console.log("-----+-----+-----");
  console.log("     |     |");
  console.log(`  ${board["7"]}  |  ${board["8"]}  |  ${board["9"]}`);
  console.log("     |     |");
  console.log("");
}

function initializeBoard() {
  let board = {};

  for (let square = 1; square <= 9; square++) {
    board[String(square)] = " ";
  }
  return board;
}

function playerChoosesSquare(board) {
  let square;

  let emptySquares = Object.keys(board).filter((key) => board[key] === " ");

  while (true) {
    prompt(`${MESSAGES["playerChoosesSquare"]}`);
    square = readline.question().trim();

    if (emptySquares.includes(square)) {
      break;
    } else {
      prompt(`${MESSAGES["invalidChoice"]}`);
    }
  }

  board[square] = "X";
}

let board = initializeBoard();
displayBoard(board);

playerChoosesSquare(board);
displayBoard(board);
