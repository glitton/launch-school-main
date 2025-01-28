//1. Write a function that takes a string as input and returns an array of all possible substrings.

function generateSubstrings(str) {
  let allSubstrings = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      let currentSubstring = str.slice(i, j);
      allSubstrings.push(currentSubstring);
    }
  }
}

// console.log(generateSubstrings("abc"));
// // Output: ['a', 'ab', 'abc', 'b', 'bc', 'c']

// console.log(generateSubstrings("xy"));
// // // Output: ['x', 'xy', 'y']

// console.log(generateSubstrings("a"));
// // // Output: ['a']

//2. Write a function that counts the number of unique substrings in a string.

function countUniqueSubstrings(str) {
  let allSubstrings = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length + 1; j++) {
      allSubstrings.push(str.slice(i, j));
    }
  }
  let uniqueSubstrings = [];
  allSubstrings.forEach((subString) => {
    if (!uniqueSubstrings.includes(subString)) uniqueSubstrings.push(subString);
  });
  return uniqueSubstrings.length;
}

// // console.log(isPalindrome("ab", "ba"));
// console.log(countUniqueSubstrings("abc"));
// // // Output: 6 (['a', 'ab', 'abc', 'b', 'bc', 'c'])

// console.log(countUniqueSubstrings("aba"));
// // // Output: 5 (['a', 'ab', 'aba', 'b', 'ba'])

// console.log(countUniqueSubstrings("a"));
// // Output: 1

// console.log(countUniqueSubstrings(""));
// Output: 0

//3. Write a function that finds the longest palindromic substring of a given string.

function longestPalindromicSubstring(str) {
  let maxPalindromicSubstring = "";

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      let currentSubstring = str.slice(i, j);
      if (isPalindrome(currentSubstring)) {
        if (currentSubstring.length > maxPalindromicSubstring.length) {
          maxPalindromicSubstring = currentSubstring;
        }
      }
    }
  }
  return maxPalindromicSubstring;
}

function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}
// console.log(longestPalindromicSubstring("babad"));
// // Output: "bab" or "aba"

// console.log(longestPalindromicSubstring("cbbd"));
// // // Output: "bb"

// console.log(longestPalindromicSubstring("a"));
// // // Output: "a"

// console.log(longestPalindromicSubstring(""));
// Output: ""

//4. Write a function that counts the total number of distinct subsequences of a given string.

function countDistinctSubsequences(str) {
  const uniqueSubsequences = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i; j <= str.length; j++) {
      console.log({ i }, { j });
      let subsequences = str.slice(i, j + 1);
      // console.log(subsequences);
      if (!uniqueSubsequences.includes(subsequences))
        uniqueSubsequences.push(subsequences);
    }
  }
  // return uniqueSubsequences.length;
}

console.log(countDistinctSubsequences("abc"));
// Output: 8 ([], ['a'], ['b'], ['c'], ['a', 'b'], ['a', 'c'], ['b', 'c'], ['a', 'b', 'c'])

// console.log(countDistinctSubsequences("aa"));
// // // Output: 3 ([], ['a'], ['a', 'a'])

// console.log(countDistinctSubsequences("ab"));
// // Output: 4 ([], ['a'], ['b'], ['a', 'b'])
