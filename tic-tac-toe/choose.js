const readline = require("readline-sync");
const MESSAGES = require("./messages.json");
const STARTING_PLAYER = ["Computer", "Player", "Choose"];
const startingPlayerIdx = Math.floor(Math.random() * 3);

function prompt(message) {
  console.log(`=> ${message}`);
}

// function chooseStartingPlayer() {
//   let playerWhoStarts = STARTING_PLAYER[startingPlayerIdx];
//   if (playerWhoStarts === "Choose") {
//     prompt(`${MESSAGES["chooseStartingPlayer"]}`);
//     let answer = readline.question().toLowerCase();
//     if (answer === "c") {
//       playerWhoStarts = "Computer";
//     } else {
//       playerWhoStarts = "Player";
//     }
//     while (true) {
//       if (!["c", "p"].includes(answer)) {
//         prompt(
//           `${MESSAGES["invalidChoice"]} ${MESSAGES["correctPlayerChoice"]}`
//         );
//       }
//       break;
//     }
//   }
//   prompt(`${playerWhoStarts} starts the game.`);
//   return playerWhoStarts;
// }

// function playAgain() {
//   let answer;
//   while (true) {
//     prompt(`${MESSAGES["playAgain"]}`);
//     answer = readline.question().toLowerCase();
//     if (["y", "n"].includes(answer)) break;
//     prompt(`${MESSAGES["invalidChoice"]} ${MESSAGES["correctChoice"]}`);
//   }
//   if (answer === "y") {
//     return true;
//   } else {
//     return false;
//   }
// }

function chooseStartingPlayer() {
  let playerWhoStarts = STARTING_PLAYER[startingPlayerIdx];
  let answer;
  if (playerWhoStarts === "Choose") {
    while (true) {
      prompt(`${MESSAGES["chooseStartingPlayer"]}`);
      answer = readline.question().toLowerCase();
      if (["c", "p"].includes(answer)) break;
      prompt(`${MESSAGES["invalidChoice"]} ${MESSAGES["correctPlayerChoice"]}`);
    }
    if (answer === "c") {
      playerWhoStarts = "Computer";
    } else {
      playerWhoStarts = "Player";
    }
  }
  prompt(`${playerWhoStarts} starts the game.`);
  return playerWhoStarts;
}
chooseStartingPlayer();
