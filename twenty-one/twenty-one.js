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

function askPlayerTurn() {
  let playerTurn;
  while (true) {
    prompt("Would you like to (h)it or (s)tay?");
    playerTurn = readline.question().toLowerCase();
    if (["h", "s"].includes(playerTurn)) break;
    prompt("Sorry, please enter 'h' or 's'.");
  }
  return playerTurn;
}

function playerHits(playerCards, deck) {
  playerCards.push(deck.pop());
  console.clear();
  prompt("You chose to hit!");
  prompt(`Your cards: ${hand(playerCards)}.`);
}

function playerStays(playerTotal) {
  console.clear();
  prompt(`You stayed with a hand of ${playerTotal}`);
  return playerTotal;
}

function playerTurn(playerCards, deck) {
  let playerTurn;
  while (true) {
    playerTurn = askPlayerTurn();

    if (playerTurn === "h") {
      playerHits(playerCards, deck);
    }

    let playerTotal = total(playerCards);
    prompt(`Your total: ${total(playerCards)}.`);

    if (busted(playerCards)) {
      prompt(`You busted with a total of ${playerTotal}.`);
      return playerTotal;
    }

    if (playerTurn === "s") {
      return playerStays(playerTotal);
    }
  }
}

function dealerTurn(dealerCards, deck) {
  let dealerTotal = total(dealerCards);
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
  console.log("*=*=*=*=*=*=*=*=*=*=*=*");
  console.log("");
  prompt(`Dealer has ${hand(dealerCards)}, for a total of: ${dealerTotal}`);
  prompt(`Player has ${hand(playerCards)}, for a total of: ${playerTotal}`);
  console.log("");
  console.log("*=*=*=*=*=*=*=*=*=*=*=*");
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
  console.log("*=*=*=*=*=*=*=*=*=*=*=*");
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
  prompt(`Player Score: ${score.player}, Dealer Score: ${score.dealer}`);
}

function gameIntro() {
  console.clear();
  prompt(
    `Let's play Twenty-One! This game is a simplified version of Blackjack.`
  );
  prompt(`Your goal is to beat the dealer without going over 21.`);
  prompt(
    `First to win ${WINS_NEEDED} out of ${TOTAL_ROUNDS} rounds is the champ!`
  );
}

//GAME STARTS HERE
gameIntro();

while (true) {
  // play best of 3 of 5 rounds
  let score = {
    player: 0,
    dealer: 0,
  };
  let round = 1;

  while (round <= TOTAL_ROUNDS) {
    //initialize game
    console.log("");
    displayScore(score);
    prompt(`Let's play round ${round} of ${TOTAL_ROUNDS}`);
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
    playerTotal = playerTurn(playerCards, deck);

    if (busted(playerCards)) {
      logFinalScore(dealerCards, playerCards, dealerTotal, playerTotal);
      displayResults(dealerTotal, playerTotal);
      score.dealer += 1;
      round += 1;
      continue; // go to the next round
    }

    // dealer turn
    prompt("Dealer turn ...");
    dealerTotal = dealerTurn(dealerCards, deck);

    // show final results
    logFinalScore(dealerCards, playerCards, dealerTotal, playerTotal);
    let winner = displayResults(dealerTotal, playerTotal);

    // update scores
    if (winner === "PLAYER" || winner === "DEALER_BUSTED") {
      score.player += 1;
    } else if (winner === "DEALER" || winner === "PLAYER_BUSTED") {
      score.dealer += 1;
    }

    displayScore(score);
    // Check if anyone has 3 wins
    if (score.player === WINS_NEEDED) {
      prompt(`You won ${score.player} games, you're the Twenty One champ!`);
      break;
    } else if (score.dealer === WINS_NEEDED) {
      prompt(`Dealer won ${score.dealer} games and is the Twenty One champ!`);
      break;
    }

    round += 1;

    // After 5 rounds, nobody won 3
    if (round > TOTAL_ROUNDS) {
      displayScore(score);
      prompt(
        `We've played ${TOTAL_ROUNDS} rounds, and no one got ${WINS_NEEDED} wins.`
      );
      break;
    }
  }
  if (!playAgain()) {
    break;
  }
}
console.log("Thanks for playing Twenty-One, goodbye!");
