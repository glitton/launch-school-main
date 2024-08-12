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
  let stringArray = [];

  for (let idx = 0; idx < string.length; idx++) {
    stringArray.push(string[idx]);
    if (CONSONANTS.indexOf(string[idx].toLowerCase()) >= 0) {
      //if the characters is in consonants,
      //indexOf will return the index and not -1
      stringArray.push(string[idx]);
    }
  }
  return stringArray.join("");
}

console.log(doubleConsonants("String")); // "SSttrrinngg"
console.log(doubleConsonants("Hello-World!")); // "HHellllo-WWorrlldd!"
console.log(doubleConsonants("July 4th")); // "JJullyy 4tthh"
console.log(doubleConsonants("")); // ""
