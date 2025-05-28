// let color = "yellow";
// let colors = ["red", "green", "blue"];

// function updateColors(colors) {
//   colors.push(color);
// }

// updateColors(colors);
// console.log(colors);

// let color = "yellow";
// let colors = ["red", "green", "blue"];

// function updateColors(colors, color) {
//   colors.push(color);
// }

// updateColors(colors);
// console.log(colors);

// let color1 = "purple";
// let color2 = "pink";
// let colors = ["red", "green", "blue"];

// function updateColors(colors, color) {
//   colors.push(color);
// }

// updateColors(colors, color1);
// updateColors(colors, color2);
// console.log(colors);

// let color1 = "purple";
// let color2 = "pink";
// let colors = ["red", "green", "blue"];

// function updateColors(colors, color) {
//   colors.push(color);
//   return colors;
// }

// let newColors = updateColors(colors, color1);
// updateColors(newColors, color2);
// console.log(colors);

// let color = "purple";
// let colors = ["red", "green", "blue"];

// function addColor(colors, color) {
//   colors.push(color);
//   return colors;
// }

// function removeColor(colors) {
//   color = colors.pop();
//   return colors;
// }

// let newColors = removeColor(colors);
// addColor(colors, color);
// console.log(newColors);

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function exclaim(word) {
  return (word += "!!!");
}

let word = "hello";
let capitalizedWord = capitalize(word);
let exclaimedWord = exclaim(capitalizedWord);

console.log(word);
console.log(capitalizedWord);
console.log(exclaimedWord);
