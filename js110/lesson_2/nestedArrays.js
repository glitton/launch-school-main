let finalArray = [
  [
    [1, 2],
    [3, 4],
  ],
  [5, 6],
].map((arr) => {
  return arr.map((elem) => {
    // console.log(elem);

    if (typeof elem === "number") {
      // it's a number
      return elem + 1;
    } else {
      // it's an array
      return elem.map((number) => number + 1);
    }
  });
});

console.log(finalArray);

// [[2,3],[4,5],6,7]
