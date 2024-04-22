const User = require('../models/user');

// Seeding with a test user
User.save('user@example.com', 'pass123');

const handleLoginPage = (_, res) => {
  res.render('login');
};

const handleLogin = (req, res) => {
  const { email, password } = req.body;
  const user = User.getByCreds(email, password);
  if (user) {
    req.session.user = user;
    return res.redirect('/');
  }
  return res.redirect('/login');
};

const handleLogOut = (req, res) => {
  if (req.session.user) req.session.user = undefined;
  return res.redirect('/login');
};

module.exports = {
  handleLoginPage,
  handleLogin,
  handleLogOut,
};
