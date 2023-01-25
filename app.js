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

  this.toggleRead = Boolean;
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
    document.getElementById("card").textContent = "";
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
  const readBtn = document.createElement("button");
  const title = document.createElement("h1");
  const author = document.createElement("h4");
  const pages = document.createElement("h5");

  delBtn.onclick = () => {
    library.deleteBook(book.title);
  };

  readBtn.onclick = () => {
    if (readBtn.textContent === "Read") {
      readBtn.textContent = "Not Read";
    } else {
      readBtn.textContent = "Read";
    }
  };

  delBtn.textContent = "DELETE";
  readBtn.textContent = "Read";
  delBtn.className = "btn";
  readBtn.className = "btn";

  title.textContent = book.title;
  author.textContent = book.author;
  pages.textContent = book.pages;
  readBtn.textContent = book.read ? "Read" : "Not Read";

  bookDiv.appendChild(title);
  bookDiv.appendChild(author);
  bookDiv.appendChild(pages);
  bookDiv.appendChild(delBtn);
  bookDiv.appendChild(readBtn);

  document.getElementById("card").appendChild(bookDiv).className = "book-card";
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
  const newBook = new Book(
    title.value,
    author.value,
    pages.value,
    read.checked
  );

  library.addBook(newBook);
  // close modal
  modalHandler();
  // clear old list & show new list
  document.getElementById("card").textContent = "";
  for (let book of library.books) displayBooks(book);
};
