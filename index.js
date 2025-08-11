function createBook(title, author) {
  return {
    title,
    author,
    getDescription() {
      return `${title} by ${author}`;
    },
  };
}

const book1 = createBook("1984", "George Orwell");
console.log(book1.getDescription()); // Output: "1984 by George Orwell"

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  getDescription() {
    return `${this.title} by ${this.author}`;
  }
}

const book1 = new Book("1984", "George Orwell");
console.log(book1.getDescription()); // Output: "1984 by George Orwell"
