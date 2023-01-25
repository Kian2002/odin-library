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

function Library() {
  this.books = [];

  this.addBook = (...books) => {
    books.forEach((book) => {
      this.books.push(book);
    });
  };

  this.deleteBook = (title) => {
    const foundBook = this.books.find((book) => book.title === title);
    this.books.splice(this.books.indexOf(foundBook), 1);
    document.getElementById("book-card").textContent = "";
    for (let book of this.books) displayBooks(book);
  };
}

const library = new Library();

const hobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
const testBook = new Book("test", "testman", 100, false);

library.addBook(hobbit, testBook);

const displayBooks = (book) => {
  const bookDiv = document.createElement("div");
  const delBtn = document.createElement("button");

  delBtn.onclick = () => {
    library.deleteBook(book.title);
  };

  bookDiv.innerText = book.getInfo();
  delBtn.textContent = "DELETE";

  document.getElementById("book-card").appendChild(bookDiv);
  document.getElementById("book-card").appendChild(delBtn);
};

for (let book of library.books) {
  displayBooks(book);
}
const modalHandler = () => {
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
  library.addBook(newBook);
  modalHandler();
  document.getElementById("book-card").textContent = "";
  for (let book of library.books) displayBooks(book);
};
