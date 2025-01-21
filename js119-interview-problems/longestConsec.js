/*
P: You are given an array of strings and an integer `k`. Your task is to return the first longest string consisting of `k` consecutive strings taken from the array. n being the length of the string array, if n = 0 or k > n or k <= 0 return "".
Input: array and integer
Output: string that represents k consecutive strings that are the longest
Rules
- if string length is 0, or k is greater than string length or k <= 0, return empty string
- strings need to be consecutive
E:
D:
A:
Initialize variables 

  - currentLength = 0
  - longestLength = 0
  - currentString = ''
  - longestString = ''
 
Iterate over the array
  - Code for edge cases 
  - append k consecutive strings to currentLength
    - if currentLength > longestLength, 
      - longestLength = currentLength
      - longestString = currentString
- return longestString
 */

function longestConsec(arr, k) {
  let currentLength = 0;
  let longestLength = 0;
  let currentString = "";
  let longestString = "";

  for (let idx = 0; idx < arr.length; idx++) {
    if (arr.length === 0 || k > arr.length || k <= 0) {
      return "";
    }

    currentString = arr.slice(idx, idx + k).join("");

    currentLength = currentString.length;
    if (currentLength > longestLength) {
      longestLength = currentLength;
      longestString = currentString;
    }
  }
  console.log(longestString);
  return longestString;
}

// // Test Cases
console.log(
  longestConsec(
    ["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"],
    2
  ) === "abigailtheta"
);
console.log(
  longestConsec(
    [
      "ejjjjmmtthh",
      "zxxuueeg",
      "aanlljrrrxx",
      "dqqqaaabbb",
      "oocccffuucccjjjkkkjyyyeehh",
    ],
    1
  ) === "oocccffuucccjjjkkkjyyyeehh"
); // true
console.log(
  longestConsec(
    [
      "itvayloxrp",
      "wkppqsztdkmvcuwvereiupccauycnjutlv",
      "vweqilsfytihvrzlaodfixoyxvyuyvgpck",
    ],
    2
  ) === "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"
); // true
console.log(
  longestConsec(["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"], 2) ===
    "wlwsasphmxxowiaxujylentrklctozmymu"
); // true
console.log(
  longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3) ===
    "ixoyx3452zzzzzzzzzzzz"
); // true
console.log(
  longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2) === ""
); // true
console.log(
  longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 15) === ""
); // true
console.log(
  longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 0) === ""
); // true
