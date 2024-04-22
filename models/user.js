const { createHash } = require('node:crypto');

const users = [];

function User(email, password) {
  this.email = email;
  this.password = password;
}

User.save = (email, password) => {
  const user = new User(email, createHash('sha256').update(password).digest('hex'));
  users.push(user);
};

User.getByCreds = (email, password) => users.find((user) => user.email === email
      && user.password === createHash('sha256').update(password).digest('hex'));

module.exports = User;
