const readline = require("readline-sync");
const { joinOr } = require("./joinOr");

const MESSAGES = require("./tictactoe_messages.json");
const INITIAL_MARKER = " ";
const HUMAN_MARKER = "X";
const COMPUTER_MARKER = "O";
const WINS_NEEDED = 5;

let WINNING_LINES = [
  [1, 2, 3], // rows
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7], // columns
  [2, 5, 8],
  [3, 6, 9], // diagonals
  [1, 5, 9],
  [3, 5, 7],
];

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

function playerChoosesSquare(board) {}

let board = initializeBoard();
displayBoard(board);
