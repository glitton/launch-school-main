const readline = require("readline-sync");
const MESSAGES = require("./messages.json");
const STARTING_PLAYER = ["Computer", "Player", "Choose"];
const startingPlayerIdx = Math.floor(Math.random() * 3);

function prompt(message) {
  console.log(`=> ${message}`);
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

chooseStartingPlayer();
