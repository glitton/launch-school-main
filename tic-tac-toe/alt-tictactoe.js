const readline = require("readline-sync");
const { joinOr } = require("./joinOr");

const MESSAGES = require("./tictactoe_messages.json");
const INITIAL_MARKER = " ";
const HUMAN_MARKER = "X";
const COMPUTER_MARKER = "O";
const WINS_NEEDED = 2;

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

function displayScore(score) {
  console.log(`Player: ${score.Player} Computer: ${score.Computer}`);
}

function emptySquares(board) {
  return Object.keys(board).filter((key) => board[key] === INITIAL_MARKER);
}

function playerChoosesSquare(board) {
  let square;

  while (true) {
    prompt(`${MESSAGES["playerChoosesSquare"]}${joinOr(emptySquares(board))}`);
    square = readline.question().trim();

    if (emptySquares(board).includes(square)) {
      break; // valid choice, chose an empty square
    } else {
      prompt(`${MESSAGES["invalidChoice"]}`);
    }
  }

  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  let randomIndex = Math.floor(Math.random() * emptySquares.length);

  let square = emptySquares(board)[randomIndex];

  board[square] = COMPUTER_MARKER;
}

function boardFull(board) {
  return emptySquares(board).length === 0;
}

function someoneWon(board) {
  return !!detectWinner(board);
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

function playAgain() {
  let answer;
  while (true) {
    prompt(`${MESSAGES["playAgain"]}`);
    answer = readline.question().toLowerCase();
    if (["y", "n"].includes(answer)) break;
    prompt(`${MESSAGES["invalidChoice"]} ${MESSAGES["correctChoice"]}`);
  }

  if (answer === "y") {
    return true;
  } else {
    return false;
  }
}

while (true) {
  let score = {
    Player: 0,
    Computer: 0,
  };
  console.log("top of loop");

  while (true) {
    let board = initializeBoard();

    while (true) {
      displayBoard(board);
      displayScore(score);

      playerChoosesSquare(board);
      if (someoneWon(board) || boardFull(board)) break;

      computerChoosesSquare(board);
      if (someoneWon(board) || boardFull(board)) break;
    }

    displayBoard(board);

    if (someoneWon(board)) {
      let winner = detectWinner(board);
      score[winner] += 1;

      //Overall Winner
      if (score[winner] === WINS_NEEDED) {
        prompt(
          `${detectWinner(
            board
          )} won ${WINS_NEEDED} games and is the Tic Tac Toe champion!`
        );
        // reset scores to 0
        // score.Player = 0;
        // score.Computer = 0;
        break;
      } else {
        prompt(`${detectWinner(board)} won!`);
        displayScore(score);
      }
    } else {
      prompt("It's a tie!");
    }
    while (true) {
      if (readline.question(`${MESSAGES["anotherGame"]}`)) break;
    }
  }
  if (!playAgain()) {
    break;
  }
}
prompt(`${MESSAGES["gameEnd"]}`);
