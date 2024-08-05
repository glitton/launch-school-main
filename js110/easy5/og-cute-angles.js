function dms(degreesFloat) {
  const DEGREE = "\u00B0";
  const MINUTES_PER_DEGREE = 60;
  const SECONDS_PER_MINUTE = 60;
  let degreesInt;
  // if number is negative, convert degrees to positive
  if (degreesFloat < 0) {
    degreesInt = degreesInRange(degreesFloat);
    degreesFloat = degreesFloat + 360;
  } else if (degreesFloat > 360) {
    degreesInt = degreesInRange(degreesFloat);
    degreesFloat = degreesFloat - 360;
  } else {
    //Remove decimal from degrees
    degreesInt = Math.floor(degreesFloat);
    // console.log("degreesFloat", degreesInt);
  }

  let minutes = ((degreesFloat - degreesInt) * MINUTES_PER_DEGREE).toFixed(2);
  let seconds = ((minutes - Math.floor(minutes)) * SECONDS_PER_MINUTE).toFixed(
    2
  );

  minutes = Math.floor(minutes);
  seconds = Math.floor(seconds);

  return `${degreesInt}${DEGREE}${padZeroes(minutes)}'${padZeroes(seconds)}"`;
}

console.log(dms(360));
console.log(dms(76.73));
console.log(dms(93.034773));
console.log(dms(400));
console.log(dms(-40));
console.log(dms(-420)); // this case is still iffy

function padZeroes(number) {
  let numString = String(number);
  return numString.length < 2 ? "0" + numString : numString;
}

function degreesInRange(number) {
  if (number > 360) {
    number = number - 360;
  } else if (number < 0) {
    number = number + 360;
    // console.log("num", number);
  }

  // console.log("degInRange", number);
  return number;
}
// console.log(padZeroes(360));
