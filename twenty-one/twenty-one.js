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
const WINS_NEEDED = 3;
const TOTAL_ROUNDS = 5;

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
      if (sum > GOAL_SUM) sum -= 10;
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
      // console.clear();
      prompt("You chose to hit!");
      playerTotal = total(playerCards);
      prompt(`Your cards: ${hand(playerCards)}.`);
      prompt(`Your total: ${total(playerCards)}.`);
    }

    if (busted(playerCards)) {
      prompt(`Busted, you're total is ${playerTotal}.`);
      break;
    }

    if (playerTurn === "s") {
      prompt(`You stayed with a hand of ${playerTotal}`);
      break;
    }
  }
  return playerTotal;
}

function dealerTurn(dealerCards, deck, dealerTotal) {
  while (total(dealerCards) < DEALER_MIN_SUM) {
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
      prompt("You busted, dealer wins! ");
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
  return result;
}

function playAgain() {
  console.log("=*=*=*=*=*=*=*=");
  console.log("");
  let answer;
  while (true) {
    prompt("Play another 3 out of 5 games? (y or n)");
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

function displayScore(score) {
  console.log(`Player Score: ${score.player} Dealer Score: ${score.dealer}`);
}

function checkRoundScores(score) {
  let winner;
  if (score.player === 3) {
    winner = "PLAYER";
  } else if (score.dealer === 3) {
    winner = "DEALER";
  }
  return winner;
}

//GAME STARTS HERE
console.clear();
prompt(
  `Let's play Twenty-One! This game is a simplified version of Black Jack.`
);
prompt(
  `First to win ${WINS_NEEDED} out of ${TOTAL_ROUNDS} rounds is the Twenty-One champion!`
);
console.log("");

while (true) {
  // play best of 3 of 5 rounds
  let score = {
    player: 0,
    dealer: 0,
  };
  let round = 1;

  while (true) {
    //initialize game
    prompt(`Let's play round ${round} of ${TOTAL_ROUNDS}`);
    displayScore(score);
    console.log("");

    let deck = initializeDeck();
    let playerCards = [];
    let dealerCards = [];

    // first deal of two cards
    playerCards.push(...dealTwoFromDeck(deck));
    dealerCards.push(...dealTwoFromDeck(deck));
    // calculate card totals
    let playerTotal = total(playerCards);
    let dealerTotal = total(dealerCards);

    prompt(`Dealer has ${hand([dealerCards[0]])} and ?`);
    prompt(`You have: ${hand(playerCards)}, for a total of ${playerTotal}.`);

    // player turn
    playerTotal = playerTurn(playerCards, deck, playerTotal);
    console.log("playerTotal", playerTotal);

    if (playerTotal > GOAL_SUM) {
      console.log("busted");
      logFinalScore(dealerCards, playerCards, dealerTotal, playerTotal);
    } else {
      console.clear();
      prompt(`You chose to stay with ${playerTotal}.`);
    }

    // dealer turn
    prompt("Dealer turn ...");
    dealerTotal = dealerTurn(dealerCards, deck, dealerTotal);

    if (busted(dealerCards)) {
      logFinalScore(dealerCards, playerCards, dealerTotal, playerTotal);
    } else {
      prompt(`Dealer stays with ${dealerTotal}.`);
    }

    // show final results
    logFinalScore(dealerCards, playerCards, dealerTotal, playerTotal);
    let winner = displayResults(dealerTotal, playerTotal);

    // update scores
    if (winner === "PLAYER") {
      score.player += 1;
    } else if (winner === "DEALER") {
      score.dealer += 1;
    }

    round += 1;
    if (score[winner] === 3) {
      prompt(`${winner} won ${WINS_NEEDED} games.`);
      break;
    }
  }
  if (!playAgain()) break;
}
console.log("Thanks for playing Twenty-One, goodbye!");
