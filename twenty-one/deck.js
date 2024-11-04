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

function initializeDeck() {
  const deck = [];

  SUITS.forEach((suit) => {
    RANKS.forEach((rank) => {
      deck.push({ rank: rank, suit: suit });
    });
  });
  return deck;
}

// console.log(initializeDeck());

function shuffle(deck) {
  for (let idx = deck.length - 1; idx > 0; idx -= 1) {
    let otherIdx = Math.floor(Math.random() * (idx + 1));
    [deck[idx], deck[otherIdx]] = [deck[otherIdx], deck[idx]];
  }
  return deck;
}

let deck = initializeDeck();
// console.log(shuffle(deck));

cards = [
  { rank: "2", suit: "H" },
  { rank: "A", suit: "D" },
  { rank: "8", suit: "C" },
];

function hand(cards) {
  return cards.map((card) => `${card.rank}${card.suit}`).join(", ");
}

console.log(hand(cards));
