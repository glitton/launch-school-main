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

 /* 5.
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

/* 7.
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

/* 8.
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

/* 12. You are given an array of strings and an integer `k`. Your task is to return the first longest string consisting of `k` consecutive strings taken from the array. n being the length of the string array, if n = 0 or k > n or k <= 0 return "".
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

/* 19. from LS-Bot
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
