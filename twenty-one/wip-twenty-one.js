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
      sum += ACE_VALUE;
    } else if (["J", "Q", "K"].includes(value)) {
      sum += FACE_VALUE;
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

function playerTurn(playerCards, deck, playerTotal) {
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
      playerTotal = total(playerCards);
      prompt(`Your cards: ${hand(playerCards)}.`);
      prompt(`Your total: ${playerTotal}.`);

      if (busted(playerCards)) {
        prompt(`Sorry, you busted with a total of ${playerTotal}.`);
        break;
      }
    }

    if (playerTurn === "s") {
      prompt(`You stayed with a total of ${playerTotal}`);
      break;
    }
  }
  return playerTotal;
}

function dealerTurn(dealerCards, deck, dealerTotal) {
  while (dealerTotal < DEALER_MIN_SUM) {
    prompt("Dealer hits!");
    dealerCards.push(deck.pop());
    dealerTotal = total(dealerCards);
    prompt(`Dealer's cards: ${hand(dealerCards)}.`);
  }
  return dealerTotal;
}

function detectResult(dealerTotal, playerTotal) {
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

function logFinalScore(dealerCards, playerCards, dealerTotal, playerTotal) {
  console.log("=*=*=*=*=*=*=*=");
  console.log("");
  prompt(`Dealer has ${hand(dealerCards)}, for a total of: ${dealerTotal}`);
  prompt(`Player has ${hand(playerCards)}, for a total of: ${playerTotal}`);
  console.log("");
  console.log("=*=*=*=*=*=*=*=");
}

function displayResults(dealerTotal, playerTotal) {
  let result = detectResult(dealerTotal, playerTotal);

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

console.clear();
prompt("Let's play Twenty-One!");
//GAME STARTS HERE
while (true) {
  //initialize game
  let deck = initializeDeck();
  let playerCards = [];
  let dealerCards = [];

  // first deal of two cards
  playerCards.push(...dealTwoFromDeck(deck));
  dealerCards.push(...dealTwoFromDeck(deck));
  // // calculate card totals
  let playerTotal = total(playerCards);
  let dealerTotal = total(dealerCards);

  prompt(`Dealer has ${hand([dealerCards[0]])} and ?`);
  prompt(`You have: ${hand(playerCards)}, for a total of ${playerTotal}.`);

  // player turn
  playerTotal = playerTurn(playerCards, deck, playerTotal);

  if (busted(playerCards)) {
    displayResults(dealerTotal, playerTotal);
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
  dealerTotal = dealerTurn(dealerCards, deck, dealerTotal);

  if (busted(dealerCards)) {
    prompt(`Dealer busts: ${dealerTotal}. `);
    displayResults(dealerTotal, playerTotal);
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
  logFinalScore(dealerCards, playerCards, dealerTotal, playerTotal);
  displayResults(dealerTotal, playerTotal);

  if (!playAgain()) break;

  console.clear();
}

console.log("Thanks for playing Twenty-One, goodbye!");
