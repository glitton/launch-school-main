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
