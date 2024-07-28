/*
A.  Understand the Problem

Input: array of strings
Output: A new array where the strings are sorted to the highest number of adjacent
consonants 

Explicit Rules:
- If two strings contain the same count
of highest adjacent consonants, they retain their order relative to each other
- The letters 'y' and 'w' should be treated as consonants
- Consonants are considered adjacent when they are 
  - next to each other in the same word
  - if there is a space between two consonants in adjacent words

Implicit:
- Strings can contain multiple word divided my spaces, also some single words
- Single consonants in a string do not affect sort order in comparison to 
strings with no consonants. Only adjacent consonants affect sort order.

Questions:
- Are empty strings allowed? - no empty strings
- Can a string contain one word - yes
- Can a string have no adjacent consonant? - yes
- What is meant by "space between two consonant in adjacent words" - two words like salt pan
- Should the strings be sorted in ascending or descending order - descending
- Does case matter, all test cases are lower case

B.  Examples and Test Cases

let list1 = ['aa', 'baa', 'ccaa', 'dddaa'];
console.log(sortStringsByConsonants(list1));
// ['dddaa', 'ccaa', 'aa', 'baa']

let list2 = ['can can', 'toucan', 'batman', 'salt pan'];
console.log(sortStringsByConsonants(list2));
// ['salt pan', 'can can', 'batman', 'toucan']

let list3 = ['bar', 'car', 'far', 'jar'];
console.log(sortStringsByConsonants(list3));
// ['bar', 'car', 'far', 'jar']

let list4 = ['day', 'week', 'month', 'year'];
console.log(sortStringsByConsonants(list4));
// ['month', 'day', 'week', 'year']

C.  Data Structures
Input: Array of strings
Output: Array of strings sorted by the most number of adjacent consonants 
in descending order
Might need an intermediate data structure to keep track of the number of adjacent
consonants
{
  'aa': 0,
  'baa': 0,
  'ccaa': 2,
  'dddaa': 3
}

D.  Algorithm
1.  Create an empty array to store sorted strings
2.  Iterate over each string in the array and determine adjacent consonants
  Understand the Problem
  - Input: string
  - Output: integer representing count of the highest number of adjacent consonants
            in a string
  Examples and Test Cases
    console.log(countMaxAdjacentConsonants('dddaa')); // 3
    console.log(countMaxAdjacentConsonants('ccaa'));  // 2
    console.log(countMaxAdjacentConsonants('baa'));   // 0
    console.log(countMaxAdjacentConsonants('aa'));    // 0
  Data Structure: String
  Algorithm:
    - Remove the spaces from the input string
    - Initialize a count to zero
    - Initialize a temporary string to an empty string
    - Iterate through the input string. For each letter:
        - If the letter is a consonant:
            - concatenate it to the temporary string
        - If the letter is a vowel:
            - If the temporary string has a length greater than 1
              AND the temporary string length is greater than the
              current count:
                - set the count to the length of the temporary
                  string
            - Reset the temporary string to an empty string
    - Return the count  
3.  Keep track of adjacent consonants in an object
4.  Sort object with the highest number of adjacent consonants in descending order
5.  Convert object to an array
6.  Return the array
*/

function sortStringsByConsonants(strings) {
  let stringsCopy = strings.slice();

  let sortedStrings = stringsCopy.sort((a, b) => {
    return countMaxAdjacentConsonants(b) - countMaxAdjacentConsonants(a);
  });
  return sortedStrings;
}

function countMaxAdjacentConsonants(string) {
  let CONSONANTS = "bcdfghjklmnpqrstvwxyz";
  let newString = string.split(" ").join("");
  let tempString = "";
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    if (CONSONANTS.includes(newString[i])) {
      tempString += newString[i];
      if (tempString.length > 1 && tempString.length > count) {
        count = tempString.length;
      }
    } else {
      tempString = "";
    }
    return count;
  }
}
// console.log(countMaxAdjacentConsonants("dddaa")); // 3
// console.log(countMaxAdjacentConsonants("ccaa")); // 2
// console.log(countMaxAdjacentConsonants("baa")); // 0
// console.log(countMaxAdjacentConsonants("aa")); // 0

let list1 = ["aa", "baa", "ccaa", "dddaa"];
console.log(sortStringsByConsonants(list1));
// ['dddaa', 'ccaa', 'aa', 'baa']

let list2 = ["can can", "toucan", "batman", "salt pan"];
console.log(sortStringsByConsonants(list2));
// ['salt pan', 'can can', 'batman', 'toucan']

let list3 = ["bar", "car", "far", "jar"];
console.log(sortStringsByConsonants(list3));
// ['bar', 'car', 'far', 'jar']

let list4 = ["day", "week", "month", "year"];
console.log(sortStringsByConsonants(list4));
// ['month', 'day', 'week', 'year']
