JavaScript (script.js)

javascript
// copy code
// Book data
const books = [
  {
    cover: "book1.jpg",
    author: "Author 1",
    genre: "Genre 1",
    pages: 150
  },
  {
    cover: "book2.jpg",
    author: "Author 2",
    genre: "Genre 2",
    pages: 100
  },
  {
    cover: "book3.jpg",
    author: "Author 3",
    genre: "Genre 3",
    pages: 200
  }
];

// Variables
let currentIndex = 0;
const bookCover = document.getElementById("bookCover");
const author = document.getElementById("author");
const genre = document.getElementById("genre");
const pages = document.getElementById("pages");
const previousBtn = document.getElementById("previousBtn");
const nextBtn = document.getElementById("nextBtn");

// Function to update book details
function updateBookDetails(index) {
  const book = books[index];
  bookCover.src = book.cover;
  author.textContent = book.author;
  genre.textContent = book.genre;
  pages.textContent = `Number of Pages: ${book.pages}`;
}

// Event listeners for next/previous buttons
previousBtn.addEventListener("click", function() {
  currentIndex = (currentIndex - 1 + books.length) % books.length;
  updateBookDetails(currentIndex);
});

nextBtn.addEventListener("click", function() {
  currentIndex = (currentIndex + 1) % books.length;
  updateBookDetails(currentIndex);
});

// Initial update with the first book details
updateBookDetails(currentIndex);
// In this example, I've created a simple web page with a book cover image, author name, genre, number of pages, and next/previous buttons. The book details are stored in the books array, and the updateBookDetails function is used to update the details based on the current book index. The next and previous buttons increment or decrement the currentIndex variable and call the updateBookDetails function accordingly.

// You can customize the CSS styles and replace the placeholder book covers and book details with your own data. Additionally, -->
