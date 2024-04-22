const router = require('express').Router();
const { handleLogin, handleLogOut, handleLoginPage } = require('../controllers/auth');

router.get('/login', handleLoginPage);
router.post('/login', handleLogin);
router.get('/logout', handleLogOut);

module.exports = router;
