function swapName(name) {
  let nameArray = name.split(" ").reverse();
  return nameArray.join(", ");
}

// console.log(swapName("Joe Roberts")); // "Roberts, Joe"

function swapLongName(name) {
  let nameArray = name.split(" ");
  let lastName = nameArray.pop(); // this is a string
  // console.log(lastName);
  let nameArrayString = nameArray.join(" ");
  return `${lastName}, ${nameArrayString}`;
}

console.log(swapLongName("Karl Oskar Henriksson Ragvals")); // "Ragvals, Karl Oskar Henriksson"
