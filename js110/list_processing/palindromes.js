/*
Problem: Write a function that returns a list of all palindromic substrings of a string.
The substrings in the returned array should be sorted by their order of appearance 
in the input string.  Duplicates should be included as many times as they appear.

Examples/Test Cases:
Input: string
Output: Array containing the palindromes

palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

Explicit Rules: 
- Case sensitive 'AbcbA'
- Single characters are not palindromes

Implicit Rules: No empty string

Data Structure: Strings, Arrays

Algorithm:
1.  Iterate through the first half and the second half of the string
2.  Compare each character.  If they are the same, keep comparing until
the middle of the string is reached.
3.  If palindrome, push to an array
4.  Repeat steps 2 to 3, starting from the 2nd index comparing to the 2nd to last index
until all characters have been compared
5.  return array

Code

*/

function leadingSubstrings(str) {
  let subStringArray = [];

  for (let i = 1; i < str.length + 1; i += 1) {
    let substring = str.slice(0, i);
    subStringArray.push(substring);
  }

  return subStringArray;
}

function substrings(strInput) {
  let substrings = [];
  for (let idx = 0; idx < strInput.length; idx++) {
    let substring = strInput.substring(idx);
    // console.log(substring);

    substrings = substrings.concat(leadingSubstrings(substring));
  }
  return substrings;
}

function isPalindrome(word) {
  return word.length > 1 && word === word.split("").reverse().join("");
}

function palindromes(str) {
  return substrings(str).filter(isPalindrome);
}
// palindromes("abcd"); // []
// palindromes("madam"); // [ "madam", "ada" ]
console.log(palindromes("hello-madam-did-madam-goodbye"));
