// Write a function that calculates the sum of all numbers in a nested array. The array may contain integers, nested arrays of integers, or a mix of both. (for ruby and JS don’t use flatten)

function sumOfNestedArray(arr) {
  let stack = [...arr];
  let total = 0;

  while (stack.length) {
    let current = stack.pop();
    if (Array.isArray(current)) {
      stack.push(...current);
    } else {
      total += current;
    }
  }
  return total;
}

// Test cases
console.log(sumOfNestedArray([1, [2, 3], [4, [5, 6]]])); // 21
console.log(sumOfNestedArray([10, [20, 30, [40]], 50])); // 150
