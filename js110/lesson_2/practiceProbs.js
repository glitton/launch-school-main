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

console.log(sortedBooks);
