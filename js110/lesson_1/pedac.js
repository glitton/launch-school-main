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

/*
Algorithms
1.  Create an empty 'rows' array to hold all rows
2.  Create a 'row' array and it to the overall rows array 
3.  Repeat step 2 until all necessary rows have been created
  - All the rows have been created when the length of the rows array is equal to the input
4.  Sum the final row
  Calculating the start integer:
  Rule: first integer of row == last integer of previous row + 2
  Algorithm:
    - get the last row of the rows array
    - get the last integer from that row
    - add 2
5.  Return the sum

Problem: Create a Row
Rules: 
  - row is an array
  - array contains integers
  - integers are consecutive even numbers
  - Integers in each row form part of a larger overall sequence
  - rows are of different lengths

Input: 
  - Length of the row (tells us how many integers are in the array)
  - The starting integer (tells us which row it is.  Ex. starting integer 4 means we are in row 2)
Output: the row itself -> [8,10,12]

Examples:  
  start 2, length 1 --> [2]
  start 4, length 4 --> [4,6]
  start 8, length 3 --> [8, 10, 12]

- Data Structure: Array

- Algorithm:
  1. Create an empty row array to contain the integers
  2. Add the starting integer
  3.  Increment the starting integer by 2 to get the next integer in the sequence
  4. Repeat steps 2 and 3 until the array reaches the inputted length  
  5.  Return the row array

start the loop
  inside the loop, add startInteger to the row
  increment startInteger by 2
  break out of loop if length of row equals rowLength
*/

/*
1: [2]
2: [4,6]
3: [8,10, 12]
4: [14, 16, 18,20]
5: [22,24,26,28,30]
6: [32,34,36,38,40,42]
*/
