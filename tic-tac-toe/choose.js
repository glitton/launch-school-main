const readline = require("readline-sync");
const MESSAGES = require("./messages.json");
const STARTING_PLAYER = ["Computer", "Player", "Choose"];

function prompt(message) {
  console.log(`=> ${message}`);
}

function chooseStartingPlayer() {
  const randomPlayerIdx = Math.floor(Math.random() * 3);
  let playerWhoStarts = STARTING_PLAYER[randomPlayerIdx];

  while (true) {
    if (playerWhoStarts === "Choose") {
      prompt(`${MESSAGES["chooseStartingPlayer"]}`);
      answer = readline.question().toLowerCase();
      if (answer === "c") {
        playerWhoStarts = "Computer";
      } else {
        playerWhoStarts = "Player";
      }

      if (!["c", "p"].includes(answer)) {
        prompt(
          `${MESSAGES["invalidChoice"]} ${MESSAGES["correctPlayerChoice"]}`
        );
        console.clear();
      }
    } else if (playerWhoStarts === "Computer" || playerWhoStarts === "Player")
      break;
  }
  prompt(`${playerWhoStarts} starts the game.`);
  return playerWhoStarts;
}

chooseStartingPlayer();
