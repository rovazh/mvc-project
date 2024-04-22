const { v4: uuidv4 } = require('uuid');

let books = [];

function Book(title, publishedAt, authorId) {
  this.id = uuidv4();
  this.title = title;
  this.publishedAt = publishedAt;
  this.authorId = authorId;
}

Book.getAll = () => books;

Book.save = (title, publishedAt, authorId) => {
  books.push(new Book(title, publishedAt, authorId));
};

Book.delete = (id) => {
  const indx = books.findIndex((book) => book.id === id);
  if (indx !== -1) {
    books.splice(indx, 1);
  }
};

Book.deleteByAuthorId = (authorId) => {
  books = books.filter((book) => book.authorId !== authorId);
};

Book.get = (id) => books.find((book) => book.id === id);

Book.update = (id, { title, publishedAt, authorId }) => {
  const indx = books.findIndex((book) => book.id === id);
  if (indx !== -1) {
    books[indx].title = title;
    books[indx].publishedAt = publishedAt;
    books[indx].authorId = authorId;
  }
};

module.exports = Book;
