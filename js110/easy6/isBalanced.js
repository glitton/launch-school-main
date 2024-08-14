/*
Problem: Write a function that takes a string as an argument and returns true if all parentheses in the string are properly balanced, false otherwise. To be properly balanced, parentheses must occur in matching '(' and ')' pairs.

Examples:  
console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);

Input: String
Output: Boolean

Explicit Rules:  
-Balanced pair must start with a '(' and not ')'
-Balance means parens have matching ()

Data Structure: String

Algorithm:
1. Start by initializing a counter variable.
2. Iterate through each character in the given string.
3. Increment the counter whenever an open parenthesis is encountered and 
decrement it for each closing parenthesis found.
4. If at any point during iteration the counter becomes negative it implies 
that there are closing parentheses than opening ones; thus return false.
5. Once finished iterating through all characters in the string if the counter 
equals zero it indicates that all parentheses have been properly balanced, 
hence return true.
*/

function isBalanced(string) {
  let count = 0;

  for (let char of string) {
    if (char === "(") {
      count += 1;
    } else if (char === ")") {
      count -= 1;
    }
    if (count < 0) return false;
  }
  return count === 0;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);
