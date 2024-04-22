const router = require('express').Router();
const auth = require('../middlewares/auth');
const {
  handleGetList,
  handleAddBookPage,
  handleAddBook,
  handleDeleteBook,
  handleEditBookPage,
  handleEditBook,
} = require('../controllers/book');

router.use(auth);
router.get('/book/list', handleGetList);
router.get('/book/add', handleAddBookPage);
router.post('/book/add', handleAddBook);
router.post('/book/delete', handleDeleteBook);
router.get('/book/edit', handleEditBookPage);
router.post('/book/edit', handleEditBook);

module.exports = router;
