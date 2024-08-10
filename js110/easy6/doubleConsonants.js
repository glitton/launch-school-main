function doubleConsonants(string) {
  const CONSONANTS = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let stringArray = string.toLowerCase().split("");
  let finalString = [];

  for (let idx = 0; idx < stringArray.length; idx++) {
    let currentCharacter = stringArray[idx];
    if (CONSONANTS.includes(currentCharacter)) {
      finalString.push(currentCharacter, currentCharacter);
    }
  }
  console.log(finalString);
}

doubleConsonants("String"); // "SSttrrinngg"
doubleConsonants("Hello-World!"); // "HHellllo-WWorrlldd!"
doubleConsonants("July 4th"); // "JJullyy 4tthh"
doubleConsonants(""); // ""
