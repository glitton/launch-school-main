function sum(number) {
  let numberStringArray = String(number).split("");
  const sumOfNumbers = numberStringArray.reduce(
    (acc, digit) => acc + Number(digit),
    0
  );
  return sumOfNumbers;
}

console.log(sum(23)); // 5
console.log(sum(496)); // 19
console.log(sum(123456789)); // 45

//Per Launch School, accum (the accumulator) will already be a number.
