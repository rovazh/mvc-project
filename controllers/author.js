const Author = require('../models/author');
const Book = require('../models/book');

// Seeding
Author.save('Arthur Conan Doyle');

const handleGetList = (_, res) => {
  res.render('author-list', { authors: Author.getAll() });
};

const handleAddAuthorPage = (_, res) => {
  res.render('add-author');
};

const handleAddAuthor = (req, res) => {
  const { name } = req.body;
  Author.save(name);
  res.redirect('/author/list');
};

const handleDeleteAuthor = (req, res) => {
  const { authorId } = req.body;
  Author.delete(authorId);
  Book.deleteByAuthorId(authorId);
  res.redirect('/author/list');
};

const handleEditAuthorPage = (req, res) => {
  const { authorId } = req.query;
  res.render('edit-author', { author: Author.get(authorId) });
};

const handleEditAuthor = (req, res) => {
  const { authorId, name } = req.body;
  Author.update(authorId, { name });
  res.redirect('/author/list');
};

module.exports = {
  handleGetList,
  handleAddAuthorPage,
  handleAddAuthor,
  handleDeleteAuthor,
  handleEditAuthorPage,
  handleEditAuthor,
};
