const readline = require("readline-sync");

const MESSAGES = require("./messages.json");
const INITIAL_MARKER = " ";
const HUMAN_MARKER = "X";
const COMPUTER_MARKER = "O";
const WINS_NEEDED = 5;
//For chooseStartingPlayer function
const STARTING_PLAYER = ["Computer", "Player", "Choose"];
const startingPlayerIdx = Math.floor(Math.random() * 3);

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

function joinOr(arr, delimiter = ", ", word = "or") {
  if (arr.length === 0) {
    return "";
  }

  if (arr.length === 1) {
    return arr[0];
  }

  if (arr.length === 2) {
    return `${arr[0]} ${word} ${arr[1]}`;
  }

  return (
    arr.slice(0, arr.length - 1).join(delimiter) +
    `${delimiter}${word} ${arr[arr.length - 1]}`
  );
}

function displayBoard(board) {
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

    if (emptySquares(board).includes(square)) {
      break; // valid choice, chose an empty square
    } else {
      prompt(`${MESSAGES["invalidChoice"]}`);
    }
  }

  board[square] = HUMAN_MARKER;
}

function computerChoosesSquare(board) {
  let square;

  //offense
  for (let index = 0; index < WINNING_LINES.length; index++) {
    let line = WINNING_LINES[index];
    square = findAtRiskSquare(line, board, COMPUTER_MARKER);
    if (square) break;
  }
  //defense
  for (let index = 0; index < WINNING_LINES.length; index++) {
    let line = WINNING_LINES[index];
    square = findAtRiskSquare(line, board, HUMAN_MARKER);
    if (square) break;
  }
  // pick square 5
  if (board["5"] === INITIAL_MARKER) {
    square = "5";
  }
  //random
  if (!square) {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];
  }

  // console.log("square", square);
  board[square] = COMPUTER_MARKER;
}

function chooseStartingPlayer() {
  let playerWhoStarts = STARTING_PLAYER[startingPlayerIdx];
  if (playerWhoStarts === "Choose") {
    prompt(`${MESSAGES["chooseStartingPlayer"]}`);
    let answer = readline.question().toLowerCase();
    if (answer === "c") {
      playerWhoStarts = "Computer";
    } else {
      playerWhoStarts = "Player";
    }

    if (!["c", "p"].includes(answer)) {
      prompt(`${MESSAGES["invalidChoice"]} ${MESSAGES["correctPlayerChoice"]}`);
      console.clear();
    }
  }
  prompt(`${playerWhoStarts} starts the game.`);
  return playerWhoStarts;
}

function chooseSquare(board, currentPlayer) {
  if (currentPlayer === "Computer") {
    return computerChoosesSquare(board);
  } else {
    return playerChoosesSquare(board);
  }
}

function alternatePlayer(currentPlayer) {
  if (currentPlayer === "Computer") {
    return "Player";
  } else {
    return "Computer";
  }
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

/* GAME STARTS HERE */

while (true) {
  let score = {
    Player: 0,
    Computer: 0,
  };
  prompt(`${MESSAGES["welcome"]}`);
  prompt(`${MESSAGES["winner"]}${WINS_NEEDED}`);

  while (true) {
    //Best of 5 loop

    let board = initializeBoard();
    let currentPlayer = chooseStartingPlayer();
    displayBoard(board);

    while (true) {
      displayScore(score);

      chooseSquare(board, currentPlayer);
      currentPlayer = alternatePlayer(currentPlayer);

      if (someoneWon(board) || boardFull(board)) break;

      console.clear();
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
        break;
      } else {
        prompt(`${detectWinner(board)} won!`);
        displayScore(score);
      }
    } else {
      prompt("It's a tie!");
    }

    // while (true) {
    //   if (readline.question(`${MESSAGES["anotherGame"]}`)) break;
    // }
    // console.clear();
  }

  if (!playAgain()) {
    break;
  }
}
prompt(`${MESSAGES["gameEnd"]}`);
