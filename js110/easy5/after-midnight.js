/*
Problem:  Write a function that takes an integer input and returns the time of day
in a 24 hour format.  If the integer is positive, it represents the number of 
minutes after midnight.  If the integer is negative, it represents the number of
minutes before midnight.  

Examples/Test Cases
Input: integer representing minutes
Output: String in 24 hour format hh:mm

Explicit Rules:
- Can't use built in Date class methods
- Input is an integer representing minutes
- If the integer is positive, it represents the number of 
minutes after midnight.
- If the integer is negative, it represents the number of
minutes before midnight.  

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");

Data Structures: Integers, Strings

Algorithm:
1.  Create constant for minutes per hour, hours per day, minutes per day
2.  If the input is less than 0, or negative, determine the remaining minutes it has after
dividing it by MINUTES PER DAY

*/

const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR; //1440

function leadingZero(number) {
  return number < 10 ? `0${number}` : String(number);
}

function formatTime(hours, minutes) {
  return `${leadingZero(hours)}:${leadingZero(minutes)}`;
}

function timeOfDay(deltaMinutes) {
  if (deltaMinutes < 0) {
    deltaMinutes = (deltaMinutes % MINUTES_PER_DAY) + MINUTES_PER_DAY;
  } else {
    deltaMinutes = deltaMinutes % MINUTES_PER_DAY;
  }

  let hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
  let minutes = deltaMinutes % MINUTES_PER_HOUR;

  return formatTime(hours, minutes);
}

// console.log(timeOfDay(-3) === "23:57");

function afterMidnight(timeStr) {
  let [hours, minutes] = timeStr.split(":").map((num) => Number(num));
  return (hours * MINUTES_PER_HOUR + minutes) % MINUTES_PER_DAY;
}

function beforeMidnight(timeStr) {
  let deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
  if (deltaMinutes === MINUTES_PER_DAY) {
    deltaMinutes = 0;
  }
  return deltaMinutes;
}

// console.log(afterMidnight("00:00") === 0);
// console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
// console.log(afterMidnight("24:00") === 0);
// console.log(beforeMidnight("24:00") === 0);
