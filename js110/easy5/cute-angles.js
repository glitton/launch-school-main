/*
Problem - write a function that takes a number representing an angle between 0 
and 360 degrees and return a string representing the angle in degrees, minutes,
and seconds

Examples and Test Cases
Input: floating point number
Output: string

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"

Explicit rules:
- Use the degree symbol to represent degrees, single quote for minutes and double
quotes for seconds
- There are 60 minutes in a degree
- There are 60 seconds in a minute

Implicit Rules: Number of decimal places is random, either none or 6

Data Structure:
- Integers and Strings

Algorithm:
0.  Initialize a result variable, set to an empty string
1. Convert number to string
2. Convert numbers to an array, split by decimal point.
3. Extract the Degrees - first element of the array
4. Calculate the Minutes and Seconds: second element of the array
   - Multiply the fractional part by 60.
   - Multiply the remaining fractional part from the minutes by 60.

Code
*/

const DEGREE = "\xB0";
const MINUTES_PER_DEGREE = 60;
const SECONDS_PER_MINUTE = 60;
const SECONDS_PER_DEGREE = MINUTES_PER_DEGREE * SECONDS_PER_MINUTE;

function dms(degreesFloat) {
  let degreesInt = Math.floor(degreesFloat);
  let minutes = Math.floor((degreesFloat - degreesInt) * MINUTES_PER_DEGREE);
  let seconds = Math.floor(
    (degreesFloat - degreesInt - minutes / MINUTES_PER_DEGREE) *
      SECONDS_PER_DEGREE
  );
  return (
    String(degreesInt) +
    DEGREE +
    padZeroes(minutes) +
    "'" +
    padZeroes(seconds) +
    '"'
  );
}

function padZeroes(number) {
  let numString = String(number);
  return numString.length < 2 ? "0" + numString : numString;
}
console.log(dms(30)); // 30°00'00"
console.log(dms(76.73)); // 76°43'48"
console.log(dms(254.6)); // 254°35'59"
console.log(dms(93.034773)); // 93°02'05"
// dms(0); // 0°00'00"
// dms(360); // 360°00'00" or 0°00'00"
