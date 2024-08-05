function hexadecimalToInteger(string) {
  const HEX_DIGITS = {
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
    A: 10,
    B: 11,
    C: 12,
    D: 13,
    E: 14,
    F: 15,
  };

  BASE = 16;

  let arrayOfDigits = string
    .toUpperCase()
    .split("")
    .map((char) => HEX_DIGITS[char]);

  let value = 0; // value = BASE*value + digit

  arrayOfDigits.forEach((digit) => (value = BASE * value + digit));
  // console.log(value);

  return value;
}

console.log(hexadecimalToInteger("4D9f") === 19871);
