let cat = "Butterscotch";

// console.log(cat[-4]);
let dog = "fido";
// dog[0] = "F";
// console.log(dog);

dog.replace("f", "F");
// console.log(dog);

let letters = dog.split("");
letters[0] = letters[0].toUpperCase();
dog = letters.join("");
// console.log(dog);

let arr = ["This", "is", "a", "string"];
// console.log(arr[3.141592653589793]);

const obj = { x: "math", y: "grammar", z: "science" };

// console.log(obj["x"]);

const myPets = ["Bennie", "Django", "Guero", "Luna"];

// console.log(myPets[-1]);

const numsArray = [42, 55];
// console.log(numsArray.shift());
console.log(numsArray.slice(0, 1));
