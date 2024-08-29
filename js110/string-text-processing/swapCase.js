function swapCharCase(str) {
  let finalString = "";

  for (let idx = 0; idx < str.length; idx += 1) {
    let currentChar = str[idx];
    if (currentChar.toLowerCase() === currentChar) {
      finalString += currentChar.toUpperCase();
    } else {
      finalString += currentChar.toLowerCase();
    }
  }
  console.log(finalString);
  return finalString;
}

console.log(swapCase("CamelCase")); // "cAMELcASE"
console.log(swapCase("Tonight on XYZ-TV")); // "tONIGHT ON xyz-tv"

//Launch School version using map

function swapCase(str) {
  return str
    .split("")
    .map((char) => {
      if (char >= "a" && char <= "z") {
        return char.toUpperCase();
      } else if (char >= "A" && char <= "Z") {
        return char.toLowerCase();
      } else {
        return char;
      }
    })
    .join("");
}
