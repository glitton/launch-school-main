const readline = require("readline-sync");

const SUITS = ["H", "D", "S", "C"];
const RANKS = [
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

function shuffle(array) {
  for (let idx = array.length - 1; idx > 0; idx -= 1) {
    let otherIdx = Math.floor(Math.random() * (idx + 1));
    [array[idx], array[otherIdx]] = [array[otherIdx], array[idx]];
  }
  return array;
}

function initializeDeck() {
  const deck = [];

  SUITS.forEach((suit) => {
    RANKS.forEach((rank) => {
      deck.push({ rank: rank, suit: suit });
    });
  });
  return shuffle(deck);
}

//Calculate cards and aces
function total(cards) {
  // cards = [
  //   { rank: "2", suit: "H" },
  //   { rank: "A", suit: "D" },
  //   { rank: "8", suit: "C" },
  // ];

  let values = cards.map((card) => card.rank);

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

function busted(cards) {
  return total(cards) > GOAL_SUM;
}

function playerTurn(playerCards, deck) {
  while (true) {
    let playerTurn;
    while (true) {
      prompt("Would you like to (h)it or (s)tay?");
      playerTurn = readline.question().toLowerCase();
      if (["h", "s"].includes(playerTurn)) break;
      prompt("Sorry, please enter 'h' or 's'.");
    }

    if (playerTurn === "h") {
      playerCards.push(deck.pop());
      console.clear();
      prompt("You chose to hit!");
      prompt(`Your cards: ${hand(playerCards)}.`);
      prompt(`Your total: ${total(playerCards)}.`);
    }

    if (playerTurn === "s" || busted(playerCards)) break;
  }
}

function dealerTurn(dealerCards, deck) {
  while (total(dealerCards) < DEALER_MIN_SUM) {
    prompt("Dealer hits!");
    dealerCards.push(deck.pop());
    prompt(`Dealer's cards: ${hand(dealerCards)}.`);
  }
}

function detectResult(dealerCards, playerCards) {
  let playerTotal = total(playerCards);
  let dealerTotal = total(dealerCards);

  if (playerTotal > GOAL_SUM) {
    return "PLAYER_BUSTED";
  } else if (dealerTotal > GOAL_SUM) {
    return "DEALER_BUSTED";
  } else if (playerTotal > dealerTotal) {
    return "PLAYER";
  } else if (dealerTotal > playerTotal) {
    return "DEALER";
  } else {
    return "TIE";
  }
}

function logFinalScore(dealerCards, playerCards) {
  console.log("=*=*=*=*=*=*=*=");
  console.log("");
  prompt(
    `Dealer has ${hand(dealerCards)}, for a total of: ${total(dealerCards)}`
  );
  prompt(
    `Player has ${hand(playerCards)}, for a total of: ${total(playerCards)}`
  );
  console.log("");
  console.log("=*=*=*=*=*=*=*=");
}

function displayResults(dealerCards, playerCards) {
  let result = detectResult(dealerCards, playerCards);

  switch (result) {
    case "PLAYER_BUSTED":
      prompt("Sorry, you busted, dealer wins! ");
      break;
    case "DEALER_BUSTED":
      prompt("Dealer busted, you win!");
      break;
    case "PLAYER":
      prompt("Congrats, you win!");
      break;
    case "DEALER":
      prompt("Dealer wins!");
      break;
    case "TIE":
      prompt("It's a tie!");
  }
}

function playAgain() {
  console.log("=*=*=*=*=*=*=*=");
  console.log("");
  let answer;
  while (true) {
    prompt("Another game? (y or n)");
    answer = readline.question().toLowerCase();
    if (["y", "n"].includes(answer)) break;
    prompt("Sorry, please enter 'y' or 'n'.");
  }
  return answer === "y";
}

function dealTwoFromDeck(deck) {
  return [deck.pop(), deck.pop()];
}

function hand(cards) {
  return cards.map((card) => `${card.rank}${card.suit}`).join(", ");
}

//GAME STARTS HERE
console.clear();
prompt("Let's play Twenty-One!");

while (true) {
  //initialize game
  let deck = initializeDeck();
  let playerCards = [];
  let dealerCards = [];

  // first deal of two cards
  playerCards.push(...dealTwoFromDeck(deck));
  dealerCards.push(...dealTwoFromDeck(deck));

  let playerTotal = total(playerCards);
  let dealerTotal = total(dealerCards);

  prompt(`Dealer has ${hand([dealerCards[0]])} and ?`);
  prompt(`You have: ${hand(playerCards)}, for a total of ${playerTotal}.`);

  // player turn
  playerTurn(playerCards, deck);

  if (busted(playerCards)) {
    displayResults(dealerCards, playerCards);
    if (playAgain()) {
      console.clear();
      continue;
    } else {
      break;
    }
  } else {
    console.clear();
    prompt(`You chose to stay with ${playerTotal}.`);
  }

  // dealer turn
  prompt("Dealer turn ...");
  dealerTurn(dealerCards, deck);

  if (busted(dealerCards)) {
    prompt(`Dealer busts: ${dealerTotal}. `);
    displayResults(dealerCards, playerCards);
    if (playAgain()) {
      console.clear();
      continue;
    } else {
      break;
    }
  } else {
    prompt(`Dealer stays with ${dealerTotal}.`);
  }

  // compare cards - dealer and player both stay
  logFinalScore(dealerCards, playerCards);
  displayResults(dealerCards, playerCards);

  if (!playAgain()) break;

  console.clear();
}

console.log("Thanks for playing Twenty-One, goodbye!");
