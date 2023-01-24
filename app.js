let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.getInfo = () => {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${
      this.read ? "read" : "not yet read"
    }`;
  };
}

const hobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
const testBook = new Book("test", "testman", 100, false);

const addBookToLibrary = (...books) => {
  books.forEach((book) => {
    myLibrary.push(book);
  });
};

addBookToLibrary(hobbit, testBook);

const displayBooks = () => {
  document.getElementById("book-card").textContent = "";

  myLibrary.forEach((book) => {
    console.log(book);
    const title = document.createElement("div");
    title.innerText = book.getInfo();
    document.getElementById("book-card").appendChild(title);
  });
};

displayBooks();

const openNewBook = () => {
  const bookForm = document.getElementById("book-form");
  const displayVal = bookForm.className;

  if (displayVal === "hidden") {
    bookForm.classList.remove("hidden");
    bookForm.classList.add("visible");
  } else {
    bookForm.classList.remove("visible");
    bookForm.classList.add("hidden");
  }
};

// eslint-disable-next-line no-unused-vars
const newBook = (e) => {
  e.preventDefault();
  const [title, author, pages, read] = e.target;
  const newBook = new Book(title.value, author.value, pages.value, read.value);
  console.log(newBook.getInfo());
  addBookToLibrary(newBook);
  openNewBook();
  displayBooks();
};
