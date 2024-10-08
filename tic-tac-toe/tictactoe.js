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
  console.clear();

  prompt(`${MESSAGES["welcome"]}`);
  prompt(`${MESSAGES["winner"]}${WINS_NEEDED}`);
  prompt(`Player score is ${playerScore} Computer score is ${computerScore}`);

  console.log(`\n`);

  console.log(`You are ${HUMAN_MARKER}. Computer is ${COMPUTER_MARKER}`);

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
    board[String(square)] = INITIAL_MARKER;
  }
  return board;
}

function emptySquares(board) {
  return Object.keys(board).filter((key) => board[key] === INITIAL_MARKER);
}

function findAtRiskSquare(line, board, marker) {
  let markersInLine = line.map((square) => board[square]);

  if (markersInLine.filter((val) => val === marker).length === 2) {
    let unusedSquare = line.find((square) => board[square] === INITIAL_MARKER);
    if (unusedSquare !== undefined) {
      return unusedSquare;
    }
  }
  return null;
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`${MESSAGES["playerChoosesSquare"]}${joinOr(emptySquares(board))}`);
    square = readline.question().trim();

    if (emptySquares(board).includes(square)) break;

    prompt(`${MESSAGES["invalidChoice"]}`);
  }

  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  let square;

  //offense
  if (!square) {
    for (let index = 0; index < WINNING_LINES.length; index++) {
      let line = WINNING_LINES[index];
      square = findAtRiskSquare(line, board, COMPUTER_MARKER);
      if (square) break;
    }
  }

  // // Choose square 5
  if (board[5] === " ") {
    return (board[5] = COMPUTER_MARKER);
  }

  //defense
  for (let index = 0; index < WINNING_LINES.length; index++) {
    let line = WINNING_LINES[index];
    square = findAtRiskSquare(line, board, HUMAN_MARKER);
    if (square) break;
  }

  //random
  if (!square) {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];
  }

  board[square] = COMPUTER_MARKER;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function detectWinner(board) {
  for (let line = 0; line < WINNING_LINES.length; line++) {
    let [sq1, sq2, sq3] = WINNING_LINES[line];

    if (
      board[sq1] === HUMAN_MARKER &&
      board[sq2] === HUMAN_MARKER &&
      board[sq3] === HUMAN_MARKER
    ) {
      return "Player";
    } else if (
      board[sq1] === COMPUTER_MARKER &&
      board[sq2] === COMPUTER_MARKER &&
      board[sq3] === COMPUTER_MARKER
    ) {
      return "Computer";
    }
  }

  return null;
}

function someoneWon(board) {
  return !!detectWinner(board);
}

let playerScore = 0;
let computerScore = 0;

while (true) {
  let board = initializeBoard();
  computerChoosesSquare(board);

  while (true) {
    displayBoard(board);

    playerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;

    computerChoosesSquare(board);
    if (someoneWon(board) || boardFull(board)) break;
  }

  displayBoard(board);

  if (someoneWon(board)) {
    // add to scores
    if (detectWinner(board) === "Player") {
      playerScore += 1;
    } else {
      computerScore += 1;
    }

    prompt(`${detectWinner(board)} won this round`);
  } else {
    prompt(`${MESSAGES["tie"]}`);
  }

  //Overall Winner
  if (playerScore === WINS_NEEDED || computerScore === WINS_NEEDED) {
    prompt(
      `${detectWinner(
        board
      )} won ${WINS_NEEDED} games and is the Tic Tac Toe champion!`
    );
    // reset scores to 0
    playerScore = 0;
    computerScore = 0;
  }

  prompt(`${MESSAGES["playAgain"]}`);
  let answer = readline.question().toLowerCase();
  while (!["y", "n", "Y", "N"].includes(answer)) {
    prompt(`${MESSAGES["invalidChoice"]} ${MESSAGES["correctChoice"]}`);
    answer = readline.question().toLowerCase();
  }
  if (answer !== "y") break;
}

prompt(`${MESSAGES["gameEnd"]}`);
