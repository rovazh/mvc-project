const router = require('express').Router();
const auth = require('../middlewares/auth');
const {
  handleGetList,
  handleAddAuthorPage,
  handleAddAuthor,
  handleDeleteAuthor,
  handleEditAuthorPage,
  handleEditAuthor,
} = require('../controllers/author');

router.use(auth);
router.get('/author/list', handleGetList);
router.get('/author/add', handleAddAuthorPage);
router.post('/author/add', handleAddAuthor);
router.post('/author/delete', handleDeleteAuthor);
router.get('/author/edit', handleEditAuthorPage);
router.post('/author/edit', handleEditAuthor);

module.exports = router;
