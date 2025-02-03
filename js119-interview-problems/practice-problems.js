// All problems are from the Launch School TA Victor except where indicated.

/*1. 

Given 2 two arguments of an array of numbers and a number, find all the pairs that results in the forming a triangle with the number.

Note: To determine if three numbers form a triangle you have to use the Triangle Inequality Theorem, which states that the sum of two side lengths of a triangle is always greater than the third side. If this is true for all three combinations of added side lengths, then you will have a triangle.
Input: Array and number
Output: Array of array pairs that represent two sides of a triangle that work with the third side which is the number
Rules: 
- In order to be a triangle, the sum of two sides must be greater than the third side
- If combination of sides satisfies the rule, return an empty array
E:
D: Array
A: 
- Initialize a trianglePairs var, set to []
- Check the combination of pairs, see if they are greater than the third number
  - Iterate over the array: outer loop starting from index 0, outer loop starting from i + 1
  - check each combination, is the sum greater than the third side?
    - yes, append to trianglePairs as an array
- Return trianglePairs    

*/

// console.log(findTrianglePairs([2, 3, 4, 5], 7)); // [ [ 3, 5 ], [ 4, 5 ] ]
// console.log(findTrianglePairs([1, 2, 3, 4], 10)); // []
// console.log(findTrianglePairs([7, 10, 12, 15], 9)); // [ [ 7, 10 ], [ 7, 12 ], [ 7, 15 ], [ 10, 12 ], [ 10, 15 ], [ 12, 15 ] ]
// console.log(findTrianglePairs([8, 2, 5, 6, 3], 4)); // [ [ 8, 5 ], [ 8, 6 ], [ 2, 5 ], [ 2, 3 ], [ 5, 6 ], [ 5, 3 ], [ 6, 3 ] ]

/* 2.
P: Write a function that returns the maximum possible consecutive alternating odd and even (or even and odd) numbers. Minimum possible length is `2`. If there’s none return `[]`. 


// console.log(longestAlternatingSubarray([1, 2, 3, 4, 5, 6])); // Expected: [1, 2, 3, 4, 5, 6]
// console.log(longestAlternatingSubarray([2, 4, 6, 8])); // Expected: []
// console.log(longestAlternatingSubarray([1, 3, 5, 7])); // Expected: []
// console.log(longestAlternatingSubarray([1, 1, 3, 7, 8, 5])); // Expected: [7, 8, 5]
// console.log(longestAlternatingSubarray([4, 6, 7, 12, 11, 9, 17])); // Expected: [6, 7, 12, 11]
// console.log(longestAlternatingSubarray([4, 6, 7, 6, 7, 9, 17])); // [ 6, 7, 6, 7 ]

/* 3.
P: Find all triple of words in the sentence that have at least 2 vowels in them.

*/

//  Test cases
// console.log(findTripleWithVowels("This is a test sentence with some vowels")); // [["sentence", "some", "vowels"]]
// console.log(
//   findTripleWithVowels("The quick brown fox jumps over the lazy dog")
// ); // []
// console.log(
//   findTripleWithVowels("Beautiful, bright, and sunnier days are lovely")
// );
// [
//  [ 'Beautiful,', 'sunnier', 'are' ],
//  [ 'Beautiful,', 'sunnier', 'lovely' ],
//  [ 'Beautiful,', 'are', 'lovely' ],
//  [ 'sunnier', 'are', 'lovely' ]
// ]

/* 4.

P:Write a function, snakecase, that transforms each word in a sentence to alternate between lower (even index value) and upper (odd index value) cases when the word before or after it  begins with "s".

// // Test cases
// console.log(snakecase("Snakes slither silently")); // "sNaKeS sLiThEr sIlEnTlY"
// console.log(snakecase("simple sentence structure")); // "sImPlE sEnTeNcE sTrUcTuRe"
// console.log(snakecase("apples are sweet")); // "apples aRe sweet"
// console.log(snakecase("swiftly swimming swans")); // "sWiFtLy sWiMmInG sWaNs"
// console.log(snakecase("the sun sets slowly")); // "tHe sUn sEtS sLoWlY"
// console.log(snakecase("A quick brown fox")); // "A quick brown fox"

 /* 5. DONE 2/2
Given a sentence, write a function that finds the starting index of the rightmost occurrence of any consecutive vowel sequence in the sentence. The function should be case-insensitive and should only consider vowel sequences within individual words (not spanning multiple words).

If no consecutive vowels are found, return null.

 */

// Test Cases
// console.log(
//   rightmostConsecutiveVowel("The quick brown fox jumps over the laaazy dog")
// ); // Output: 37
// console.log(rightmostConsecutiveVowel("She sells sea shells on the sea shore")); // Output: 29
// console.log(rightmostConsecutiveVowel("I like eating aaapples and oranGEs")); // Output: 15
// console.log(
//   rightmostConsecutiveVowel("This sentence has no consecutive vowels")
// ); // Output: null
// console.log(rightmostConsecutiveVowel("Queueing is fun but cooool")); // Output: 23

/* 6.
Right Most Consecutive Vowels with Word

Given a sentence, write a function that finds the starting index of the rightmost occurrence of any consecutive vowel sequence in the sentence and the word it belongs to. The function should be case-insensitive and should only consider vowel sequences within individual words (not spanning multiple words).

If a consecutive vowel sequence is found, return an array where the first element is the starting index of the sequence and the second element is the word containing that sequence.

If no consecutive vowels are found, return an empty array.

*/

// // Test Cases
// console.log(
//   rightmostConsecutiveVowelWord("The quick brown fox jumps over the laaazy dog")
// ); // Output: [37, "laaazy"]
// console.log(
//   rightmostConsecutiveVowelWord("She sells sea shells on the sea shore")
// ); // Output: [29, "sea"]
// console.log(
//   rightmostConsecutiveVowelWord("I like eating aaapples and oranGEs")
// ); // Output: [15, "aaapples"]
// console.log(
//   rightmostConsecutiveVowelWord("This sentence has no consecutive vowels")
// ); // Output: []
// console.log(rightmostConsecutiveVowelWord("Queueing is fun but cooool")); // Output: [23, "cooool"]

/* 7. DONE 2/1
Implement a function that finds all pairs of numbers from an array, where:
- The first number in each pair is located at an even index in the original array and has a value less than 5.
- The second number in each pair is located at an odd index in the original array and has a value greater than 5.
*/

// Test cases
// console.log(findSpecialPairs([2, 6, 1, 7, 4, 10])); // [ [ 2, 6 ], [ 2, 7 ], [ 2, 10 ], [ 1, 7 ], [ 1, 10 ], [ 4, 10 ] ]
// console.log(findSpecialPairs([4, 9, 2, 6, 3, 11, 4])); // [ [ 4, 9 ], [ 4, 6 ], [ 4, 11 ], [ 2, 6 ], [ 2, 11 ], [ 3, 11 ] ]
// console.log(findSpecialPairs([5, 12, 3, 8])); // [ [ 3, 8 ] ]
// console.log(findSpecialPairs([7, 4, 6, 5])); // []
// console.log(findSpecialPairs([1, 7, 2, 8, 3, 9])); // [ [ 1, 7 ], [ 1, 8 ], [ 1, 9 ], [ 2, 8 ], [ 2, 9 ], [ 3, 9 ] ]

/* 8. DONE 01/31
Implement function that finds all fibonacci slices in a given array of integers. A Fibonacci slice is a sequence where every number after the first two is the sum of the two preceding ones. The minimum length is 3.

*/

// Test cases
// console.log(findFibonacciSlices([1, 1, 2, 3, 5, 8])); // [[1, 1, 2], [1, 1, 2, 3], [1, 1, 2, 3, 5], [1, 1, 2, 3, 5, 8], [1, 2, 3], [1, 2, 3, 5], [1, 2, 3, 5, 8], [2, 3, 5], [2, 3, 5, 8], [3, 5, 8]]
// console.log(findFibonacciSlices([2, 4, 7, 11, 18])); // [ [ 4, 7, 11 ], [ 4, 7, 11, 18 ], [ 7, 11, 18 ] ]
// console.log(findFibonacciSlices([5, 5, 10, 15, 24, 40])); // [ [ 5, 5, 10 ], [ 5, 5, 10, 15 ], [ 5, 10, 15 ] ]
// console.log(findFibonacciSlices([1, 2, 4, 6, 10, 16])); // [[2, 4, 6], [2, 4, 6, 10], [2, 4, 6, 10, 16], [4, 6, 10], [4, 6, 10, lon16], [6, 10, 16]]
// console.log(findFibonacciSlices([10, 22, 33, 43, 56])); // Should return []

/* 9.
Implement the function/method, minimum shorten. The function shortens a sentence such that it will fit within the character limit set. It shortens by removing vowels in the sequence of a, e, i, o, and u. Start removing from the end of the sentence. If it can not be shortened to fit within character limit, return an empty string. Spaces don’t count for the limit.

*/

// Test cases
// console.log(minimumShorten("This is a test sentence", 18)); // This is  test sentence
// console.log(minimumShorten("Hello World", 8)); // Hllo Wrld
// console.log(minimumShorten("Short", 10)); // Short
// console.log(minimumShorten("A very long sentence with many vowels", 10)); // ""

/* 10.
Write a function, `negate`, that converts all `“yes”` words to `"no"` and `"no"` words to `"yes"` in a sentence. The comparison for `"yes"` and `"no"` should be case insensitive.`"yes"` and `"no"` should be negated even if ending with `.`, `?`, `,`, or `!`.
*/

// console.log(negate("Yes, I said no but now I say yes.")); // "No, I said yes but now I say no."
// console.log(negate("no way, yes way!")); // "yes way, no way!"
// console.log(negate("Yesterday is not today?")); // "Yesterday is not today?"
// console.log(negate("No, I do not know!")); // "Yes, I do not know!"

/* 11. The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array of integers:

 maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) -- should be 6: [4, -1, 2, 1]
 If the array is made up of only negative numbers, return 0 instead.
 */

// // Test Cases
// console.log(maxSequence([]) === 0); // true
// console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6); // true
// console.log(maxSequence([11]) === 11); // true
// console.log(maxSequence([-32]) === 0); // true
// console.log(maxSequence([-2, 1, -7, 4, -10, 2, 1, 5, 4]) === 12); // true

/* 12. DONE 01/31
You are given an array of strings and an integer `k`. Your task is to return the first longest string consisting of `k` consecutive strings taken from the array. n being the length of the string array, if n = 0 or k > n or k <= 0 return "".
 */
// // Test Cases
// console.log(
//   longestConsec(
//     ["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"],
//     2
//   ) === "abigailtheta"
// );
// console.log(
//   longestConsec(
//     [
//       "ejjjjmmtthh",
//       "zxxuueeg",
//       "aanlljrrrxx",
//       "dqqqaaabbb",
//       "oocccffuucccjjjkkkjyyyeehh",
//     ],
//     1
//   ) === "oocccffuucccjjjkkkjyyyeehh"
// ); // true
// console.log(
//   longestConsec(
//     [
//       "itvayloxrp",
//       "wkppqsztdkmvcuwvereiupccauycnjutlv",
//       "vweqilsfytihvrzlaodfixoyxvyuyvgpck",
//     ],
//     2
//   ) === "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck"
// ); // true
// console.log(
//   longestConsec(["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"], 2) ===
//     "wlwsasphmxxowiaxujylentrklctozmymu"
// ); // true
// console.log(
//   longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3) ===
//     "ixoyx3452zzzzzzzzzzzz"
// ); // true
// console.log(
//   longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2) === ""
// ); // true
// console.log(
//   longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 15) === ""
// ); // true
// console.log(
//   longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 0) === ""
// ); // true

/* 12. Write a function that returns the longest consecutive numbers that are factors of the given target number.
 */
// // Test cases
// console.log(longestConsecutiveFactors([1, 2, 11, 12, 5, 4], 60)); // Expected: [12, 5, 4]
// console.log(longestConsecutiveFactors([1, 2, 3, 4, 5, 6], 12)); // Expected: [1, 2, 3, 4]
// console.log(longestConsecutiveFactors([10, 15, 20, 25, 30], 150)); // Expected: [10, 15]
// console.log(longestConsecutiveFactors([1, 3, 7, 9], 21)); // Expected: [1, 3, 7]
// console.log(longestConsecutiveFactors([2, 4, 6, 8, 10], 40)); // Expected: [2, 4]//

/* 13.
Create a function called sumOfVowelPairs that takes a sentence and returns the total sum of the lengths of all word pairs where both words start with a vowel (a, e, i, o, u). 

*/
// Test cases
// console.log(sumOfVowelPairs("An apple a day keeps the doctor away"));
/*
An apple
An a
An away
apple a
apple away
a away
36
*/
// console.log(sumOfVowelPairs("Every engineer enjoys innovative algorithms"));
/*
Every engineer
Every enjoys
Every innovative
Every algorithms
engineer enjoys
engineer innovative
engineer algorithms
enjoys innovative
enjoys algorithms
innovative algorithms
156
*/

/* 14.
Given a sentence, find all pairs of words whose first letter matches the last letter of its pair. Return an empty array if there’s no such pair. Only consider words that have at least length of 2 for the pairings.

*/

// Test cases
// console.log(findMatchingPairs("The cat in the hat")); // [ [ 'The', 'cat' ], [ 'The', 'hat' ], [ 'the', 'hat' ] ]
// console.log(findMatchingPairs("A man a plan a canal Panama")); // []
// console.log(findMatchingPairs("This sentence has no pairs")); // [ [ 'sentence', 'has' ], [ 'sentence', 'pairs' ] ]
// console.log(findMatchingPairs("Apple leads to leap")); // []

// 15. Right Most Consecutive Vowels with Word (variation of problem 6)

// Given a sentence, write a function that finds the starting index of the rightmost occurrence of any consecutive vowel sequence in the sentence and the word it belongs to. The function should be case-insensitive and should only consider vowel sequences within individual words (not spanning multiple words).

// If a consecutive vowel sequence is found, return an array where the first element is the starting index of the sequence and the second element is the word containing that sequence.

// If no consecutive vowels are found, return an empty array.

// Test Cases
// console.log(
//   rightmostConsecutiveVowel("The quick brown fox jumps over the laaazy dog")
// ); // Output: [37, "laaazy"]
// console.log(rightmostConsecutiveVowel("She sells sea shells on the sea shore")); // Output: [29, "sea"]
// console.log(rightmostConsecutiveVowel("I like eating aaapples and oranGEs")); // Output: [15, "aaapples"]
// console.log(
//   rightmostConsecutiveVowel("This sentence has no consecutive vowels")
// ); // Output: []
// console.log(rightmostConsecutiveVowel("Queueing is fun but cooool")); // Output: [23, "cooool"]

/* 16.
P: Given a string of words, you need to find the highest scoring word. Return the highest scoring word as a string.
input: string
output: string that contains the highest score
Rules: 
- Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
- If two words score the same, return the word that appears earliest in the original string.
- All letters will be lowercase and all inputs will be valid.

E: For example, the score of abad is 8 (1 + 2 + 1 + 4).
*/

// Test Cases
// console.log(high("man i need a taxi up to ubud")); // "taxi"
// console.log(high("what time are we climbing up the volcano")); //"volcano"
// console.log(high("take me to semynak")); // "semynak"
// console.log(high("aa b")); // "aa"
// console.log(high("b aa")); // "b"
// console.log(high("bb d")); // "bb"
// console.log(high("d bb")); // "d"
// console.log(high("aaa b")); // "aaa"

/* 17. from LS-Bot
P: Write a function that takes an array of numbers and returns a new array where each number is replaced by the sum of its digits.
Example:
Input: [123, 45, 678];
Output: [6, 9, 21];
*/

/* 18. from LS-Bot
P: Create a function that takes a string and returns a new string with every word capitalized, except for certain words (like "the", "a", "an", "and", "but", "for", "at", "by", "from") unless they're the first word in the string.

Example:
Input: "the quick brown fox jumps over the lazy dog"
Output: "The Quick Brown Fox Jumps over the Lazy Dog"

*/

/* 19. from LS-Bot DONE 2/2/2025
P: Write a function that takes an object and returns a new object where the keys and values are swapped. If a value appears multiple times, only use it as a key once.

Example:
Input: { a: 1, b: 2, c: 3, d: 1 }
Output: { '1': 'a', '2': 'b', '3': 'c' }
*/

/* 20. from LS-Bot
P: Create a function that takes an array of objects representing books (with title, author, and year properties) and returns a new array of book titles published between 1950 and 2000, sorted alphabetically.

Example:
Input: [
 {title: "1984", author: "George Orwell", year: 1949},
 {title: "Brave New World", author: "Aldous Huxley", year: 1932},
 {title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951},
 {title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960},
 {title: "The Da Vinci Code", author: "Dan Brown", year: 2003}
]
Output: ["The Catcher in the Rye", "To Kill a Mockingbird"]

*/

/* 21. from LS-Bot
P: Write a function that takes a string and returns true if the string follows the pattern "XYYX", where X and Y can be any letter, and false otherwise. The function should be case-insensitive.

Example:
Input: "ABBA"
Output: true
Input: "ABCA"
Output: false
*/

/* 22. 
Create a function called decoder that decodes a secret message from a sentence. The secret message is formed by retrieving every n**-th character** from every n**-th word** of the sentence.

// •  If the word has fewer than n characters, skip that word.
// •  If there are fewer than n words in the sentence, return an empty string.
// •  Words in the sentence are separated by spaces. 

// Test cases
// console.log(decoder("She sells sea shells on the sea shore", 2)); // Output: "elhlshhr"
// console.log(decoder("The quick brown fox jumps over the lazy dog", 3)); // Output: "oeg"
// console.log(decoder("I love programming in JavaScript", 3)); // Output: "oai"
// console.log(decoder("Just a simple test sentence to decode", 4)); // Output: "t"
// console.log(decoder("This will not work well", 5)); // Output: ""
// console.log(decoder("Send every code to find secrets hidden", 2)); // Output: "vroert"
*/

/* 23.
P: Write a function that finds the longest palindromic substring in a given sentence. A palindromic substring reads the same forwards and backwards. The function should ignore spaces, punctuation, and case. If there are multiple palindromic substrings of the same length, return the first one found. 

*/
// Test cases
// console.log(longestPalindromicSubstring("Madam Arora teaches malayalam")); // "malayalam"
// console.log(longestPalindromicSubstring("Nurses Run")); // "nursesrun"
// console.log(longestPalindromicSubstring("ABC")); // "a"

/* 24. DONE 2/1
Write a function that calculates the sum of all numbers in a nested array. The array may contain integers, nested arrays of integers, or a mix of both. (for JS don’t use flatten) 

*/
// Test cases
// console.log(sumOfNestedArray([1, [2, 3], [4, [5, 6]]])); // 21
// console.log(sumOfNestedArray([10, [20, 30, [40]], 50])); // 150

/* 25. DONE 2/2
Given a list of integers and a single sum value, return the first two values
in order of appearance that add up to form the sum.

If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.

*/
// console.log(sumPairs([4, 3, 2, 3, 4], 6)); //[4,2]

/* 26. DONE 2/1/2025
Difference of Two
P: The objective is to return all pairs of numbers from a given array of numbers that have a difference of 2.
The result array should be sorted in ascending order of values.
Assume there are no duplicate numbers in the array.
The order of the numbers in the input array should not matter.
*/

// Test cases
// console.log(differenceOfTwo([1, 2, 3, 4]));
// // [[1, 3], [2, 4]]
// console.log(differenceOfTwo([4, 1, 2, 3]));
// // // [[1, 3], [2, 4]]
// console.log(differenceOfTwo([1, 23, 3, 4, 7]));
// // //  [[1, 3]]
// console.log(differenceOfTwo([4, 3, 1, 5, 6]));
// // // [[1, 3], [3, 5], [4, 6]]
// console.log(differenceOfTwo([2, 4]));
// // // [[2, 4]]
// console.log(differenceOfTwo([1, 4, 7, 10, 13]));
// // []

/* 27. DONE 2/2/2025

P: You are given an array of strings and want to find the sum of their numeric values.
On each string, the numeric value can be found by combining the first digit
and the last digit to form a single two-digit number.
Consider your entire array. What is the sum of all of the numeric values?

*/
console.log(
  sumStringValues(["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"])
); // 142

console.log(
  sumStringValues([
    "ninesixthree8six8",
    "5tnzrrzmcsnfivefeightrjninexrhnnfbcb",
    "dcjcj2",
    "4fhcmhdtfourlzdphfxvlmvm6",
  ])
); // 211

/* 28.

Given an array of numbers, return true if at least 3 sets of 3 consecutive numbers 
are increasing order.

*/
// Test cases:
console.log(threeIncreasingSets([1, 2, 3, 4, 5, 6, 7])); // true (1,2,3), (2,3,4), (3,4,5)...
console.log(threeIncreasingSets([1, 3, 5, 7, 9, 11, 13])); // true (1,3,5), (3,5,7), (5,7,9)...
console.log(threeIncreasingSets([1, 2, 1, 3, 4, 5, 7, 8])); // true (1,3,4), (3,4,5), (5,7,8)
console.log(threeIncreasingSets([1, 2, 3, 1, 2, 1, 2])); // false
console.log(threeIncreasingSets([10, 9, 8, 7, 6, 5, 4])); // false

/* 29.
Write a method that takes a string as an argument and returns
the character that occurs least often in the given string.
If there are multiple characters with the equal lowest number
of occurrences, then return the one that appears first in the
string. When counting characters, consider the uppercase and
lowercase version to be the same.

*/
// console.log(leastCommonChar("Hello World")); // "h"
// console.log(leastCommonChar("Peter Piper picked a peck of pickled peppers")); // "t"
// console.log(leastCommonChar("Mississippi")); // "m"
// console.log(leastCommonChar("Happy birthday!")); // ' '
// console.log(leastCommonChar("aaaaaAAAA")); // 'a'

/* 30. From codewars https://www.codewars.com/kata/5848565e273af816fb000449/train/javascript
P: Write a function that transforms the input string to a secret message. Here are the rules:

1. message is a string containing separate words
2. Encrypt using the ff rules:
  - 1st letter converted to its ASCII code
  - second letter switched with the last letter
E:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"

*/

console.log(encryptThis("A")); // "65");
console.log(encryptThis("A wise old owl lived in an oak")); //"65 119esi 111dl 111lw 108dvei 105n 97n 111ka"¿
console.log(encryptThis("The more he saw the less he spoke")); //"84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp"
console.log(encryptThis("The less he spoke the more he heard")); //"84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare"
console.log(encryptThis("Why can we not all be like that wise old bird")); //"87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri"
console.log(encryptThis("Thank you Piotr for all your help")); //"84kanh 121uo 80roti 102ro 97ll 121ruo 104ple"
