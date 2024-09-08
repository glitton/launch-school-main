//1
let arr = ["10", "11", "9", "7", "8"];

let sortedArrayAsc = arr.sort((a, b) => Number(a) - Number(b)); //ascending
let sortedArrayDes = arr.sort((a, b) => Number(b) - Number(a)); //descending

// console.log(sortedArrayDes);

//2
let books = [
  {
    title: "One Hundred Years of Solitude",
    author: "Gabriel Garcia Marquez",
    published: "1967",
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    published: "1925",
  },
  { title: "War and Peace", author: "Leo Tolstoy", published: "1869" },
  { title: "Ulysses", author: "James Joyce", published: "1922" },
  { title: "The Book of Kells", author: "Multiple Authors", published: "800" },
];

let sortedBooks = books.sort(
  (a, b) => Number(a.published) - Number(b.published)
);

// console.log(sortedBooks);

//3

// let arr1 = ["a", "b", ["c", ["d", "e", "f", "g"]]];
// console.log(arr1[2][1][3]);

// let arr2 = [
//   { first: ["a", "b", "c"], second: ["d", "e", "f"] },
//   { third: ["g", "h", "i"] },
// ];
// // console.log(arr2[1]["third"][0]);

// let arr3 = [["abc"], ["def"], { third: ["ghi"] }];
// // console.log(arr3[2].third[0][0]);

// let obj1 = { a: ["d", "e"], b: ["f", "g"], c: ["h", "i"] };
// // console.log(obj1.b[1]);

// let obj2 = { first: { d: 3 }, second: { e: 2, f: 1 }, third: { g: 0 } };
// let g = Object.keys(obj2.third)[0];
// console.log(g);

//4 Change the value from 3 to 4

let arr1 = [1, [2, 3], 4];
arr1[1][1] = 4;
// console.log(arr1);

let arr2 = [{ a: 1 }, { b: 2, c: [7, 6, 5], d: 4 }, 3];
arr2[2] = 4;
// console.log(arr2);

let obj1 = { first: [1, 2, [3]] };
obj1.first[2][0] = 4;
// console.log(obj1);

let obj2 = { a: { a: ["1", "two", 3], b: 4 }, b: 5 };
obj2.a.a[2] = 4;
// console.log(obj2);

//5 Compute and display the total age of the male members of the family.
let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" },
};

let totalMaleAge = 0;

for (let member in munsters) {
  if (munsters[member]["gender"] === "male") {
    totalMaleAge += munsters[member].age;
  }
}

// console.log(totalMaleAge);

//Using Object.values and forEach

let memberDetails = Object.values(munsters);
// console.log(memberDetails);

let maleAge = 0;

memberDetails.forEach((member) => {
  if (member.gender === "male") {
    maleAge += member.age;
  }
});

// console.log(maleAge);

//6 print the name, age, and gender of each family member:
Object.entries(munsters).forEach((entry) => {
  // console.log(entry);

  let name = entry[0];
  let age = entry[1].age;
  let gender = entry[1].gender;

  console.log(`${name} is a ${age}-year-old ${gender}`);
});
