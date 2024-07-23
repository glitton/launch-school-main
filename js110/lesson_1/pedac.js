// PROBLEM:

// Given a string, write a function `palindromeSubstrings` which returns
// all the substrings from a given string which are palindromes and 2 or more characters long.
// Consider palindrome words case sensitive.

// Test cases:

// console.log(palindromeSubstrings("supercalifragilisticexpialidocious"))
// should return: ["ili"]
//
// console.log(palindromeSubstrings("abcddcbA"))
// should return: ["bcddcb", "cddc", "dd"]
//
// console.log(palindromeSubstrings("palindrome"))
// should log: []
//
// console.log(palindromeSubstrings(""))
// should log: []

/*

1.  If an upper-cased palindrome already exists, will that count and thus will it return as is?
2.  Can the string contain spaces?
3.  Can the string contain special characters such as numbers,  $ * ? , etc ... or are they all alphabetical characters.  Palindromes are just words but best to clarify.  
4.  Does the return need to be an array?

input: string, no spaces
output: array of substrings, not the same object

rules:
     Explicit requirements:
       - return only substrings which are palindromes that are at least 2 characters long.
       - palindrome words should be case sensitive, meaning "abBA"
         is not a palindrome.

     Implicit requirements:
       - if the string is an empty string, the result should be an empty array
  
*/
