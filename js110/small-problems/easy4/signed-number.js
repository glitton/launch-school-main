function stringToInteger(string) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
  };

  BASE = 10;
  let arrayOfDigits = string.split("").map((char) => DIGITS[char]);
  let value = 0; // value = 10*value + digit

  arrayOfDigits.forEach((digit) => (value = BASE * value + digit));
  // console.log(value);

  return value;
}

// function stringToSignedInteger(string) {
//   let negativeSign = "-";
//   let positiveSign = "+";
//   let signedValue = 0;
//   let negativeString = "";
//   let positiveString = "";

//   if (string[0] === negativeSign) {
//     negativeString = string.slice(1);
//     signedValue = -stringToInteger(negativeString);
//   } else if (string[0] === positiveSign) {
//     positiveString = string.slice(1);
//     signedValue = stringToInteger(positiveString);
//   } else {
//     positiveString = string.slice();
//     signedValue = stringToInteger(positiveString);
//   }
//   return signedValue;
// }

//Refactor above
function stringToSignedInteger(string) {
  let signedValue = 0;

  let positiveString = "";

  if (string[0] === "-") {
    signedValue = -stringToInteger(string.slice(1));
  } else if (string[0] === "+") {
    signedValue = stringToInteger(string.slice(1));
  } else {
    signedValue = stringToInteger(string.slice());
  }
  return signedValue;
}

//Launch School solution
// function stringToSignedInteger(string) {
//   switch (string[0]) {
//     case "-":
//       return -stringToInteger(string.slice(1));
//     case "+":
//       return stringToInteger(string.slice(1));
//     default:
//       return stringToInteger(string);
//   }
// }

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true
