const Book = require('../models/book');
const Author = require('../models/author');

// Seeding
Book.save('The Mystery of Sasassa Valley', '1879-09-06', Author.getAll()[0].id);

const handleGetList = (_, res) => res.render('book-list', { books: Book.getAll(), authors: Author.getAll() });

const handleAddBookPage = (_, res) => res.render('add-book', { authors: Author.getAll() });

const handleAddBook = (req, res) => {
  const { title, publishedAt, authorId } = req.body;
  Book.save(title, publishedAt, authorId);
  return res.redirect('/book/list');
};

const handleDeleteBook = (req, res) => {
  const { bookId } = req.body;
  Book.delete(bookId);
  res.redirect('/book/list');
};

const handleEditBookPage = (req, res) => {
  const { bookId } = req.query;
  res.render('edit-book', { book: Book.get(bookId), authors: Author.getAll() });
};

const handleEditBook = (req, res) => {
  const {
    bookId, title, publishedAt, authorId,
  } = req.body;
  Book.update(bookId, { title, publishedAt, authorId });
  res.redirect('/book/list');
};

module.exports = {
  handleGetList,
  handleAddBookPage,
  handleAddBook,
  handleDeleteBook,
  handleEditBookPage,
  handleEditBook,
};
