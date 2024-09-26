/*
Write a function named joinOr that produces the following results:

Understand the Problem:
Input: Array and delimiter and word
Output: Strings with optional delimiter and word

Rules:
- Input is an array.
- If no delimiters are specified, default value is a comma
- If no word is specified, default value is or
- Empty array input produces an empty string output
- If array has one value or length of 1, output is just the value.  No delimiter or word 

Examples/Test Cases below

Data Structures:
Input - array
Output - strings

Algorithm:
1.  Iterate over array
2.  Check if the array's length is 1 or 0.
  - If 1, return the single element
  - if 0, return an empty string
3.  If the array has exactly two values, return those values separated by the join word; don't use delimiter  
4.  Check if there is a delimiter argument in the function invocation
  - If there is one that isn't a comma, concatenate the delimiter with each element
  - If there isn't a delimiter, concatenate a comma which is the default value
5.  Concatenate the word to the second to last element in the array.  Default value is 'or'
6.  Add the last element to the string
7.  Return the complete string

Code: 
*/

function joinOr(arr, delimiter = ", ", word = "or") {
  if (arr.length === 0) {
    return "";
  }

  if (arr.length === 1) {
    return arr[0];
  }

  if (arr.length == 2) {
    return `${arr[0]} ${word} ${arr[1]}`;
  }

  return (
    arr.slice(0, arr.length - 1).join(delimiter) +
    `${delimiter}${word} ${arr[arr.length - 1]}`
  );
}

module.exports = { joinOr }; //CommonJS notation

// let log = console.log;

// log(joinOr([1, 2, 3])); // => "1, 2, or 3"
// log(joinOr([1, 2, 3], "; ")); // => "1; 2; or 3"
// log(joinOr([1, 2, 3], ", ", "and")); // => "1, 2, and 3"
// log(joinOr([])); // => ""
// log(joinOr([5])); // => "5"
// log(joinOr([1, 2])); // => "1 or 2"
