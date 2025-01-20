/*
P: Create a function that takes an array of objects representing books (with title, author, and year properties) and returns a new array of book titles published between 1950 and 2000, sorted alphabetically.

Example:
Input: [
 {title: "1984", author: "George Orwell", year: 1949},
 {title: "Brave New World", author: "Aldous Huxley", year: 1932},
 {title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951},
 {title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960},
 {title: "The Da Vinci Code", author: "Dan Brown", year: 2003}
]
Output: ["The Catcher in the Rye", "To Kill a Mockingbird"]
D: Array and objects
A:
C:
*/
function sortBooks(arr) {
  return arr
    .filter((book) => book.year >= 1950 && book.year <= 2000)
    .map((book) => book.title)
    .sort();
}
console.log(
  sortBooks([
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "Brave New World", author: "Aldous Huxley", year: 1932 },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "The Da Vinci Code", author: "Dan Brown", year: 2003 },
  ])
); // ["The Catcher in the Rye", "To Kill a Mockingbird"];
