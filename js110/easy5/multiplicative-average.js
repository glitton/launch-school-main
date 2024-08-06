function multiplicativeAverage(array) {
  let divisor = array.length;
  let multiplier = 1;

  for (let idx = 0; idx < divisor; idx += 1) {
    multiplier *= array[idx];
  }
  let result = (multiplier / divisor).toFixed(3);
  //toFixed returns a string
  return result;
}

// console.log(multiplicativeAverage([3, 5]));
console.log(multiplicativeAverage([2, 5, 7, 11, 13, 17]));
