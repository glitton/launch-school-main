const readline = require("readline-sync");

const SUITS = ["H", "D", "S", "C"];
const VALUES = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
];
const ACE_VALUE = 11;
const FACE_VALUE = 10;
const GOAL_SUM = 21;
const DEALER_MIN_SUM = 17;

function prompt(message) {
  console.log(`=> ${message}`);
}

//calculate cards and Aces
function total(cards) {
  //cards
  let values = cards.map((card) => card[1]);

  let sum = 0;
  values.forEach((value) => {
    if (value === "A") {
      sum += 11;
    } else if (["J", "Q", "K"].includes(value)) {
      sum += 10;
    } else {
      sum += Number(value);
    }
  });

  //Aces
  values
    .filter((value) => value === "A")
    .forEach((_) => {
      if (sum > 21) sum -= 10;
    });

  return sum;
}

//Player turn loop
while (true) {
  console.log("hit or stay?");
  let answer = readline.question();
  if (answer === "stay" || busted()) break;
}

if (busted()) {
  // probably end the game? or ask the user to play again?
} else {
  console.log("You chose to stay!"); // if player didn't bust, must have stayed to get here
}
