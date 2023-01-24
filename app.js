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

const addBookToLibrary = (...books) => {
  books.forEach((book) => {
    myLibrary.push(book);
  });
};

const hobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
const testBook = new Book("test", "testman", 100, false);

addBookToLibrary(hobbit, testBook);

const displayBooks = () => {
  myLibrary.forEach((book) => {
    console.log(book);
    const title = document.createElement("div");
    title.innerText = book.getInfo();
    document.getElementById("container").appendChild(title);
  });
};

displayBooks();
