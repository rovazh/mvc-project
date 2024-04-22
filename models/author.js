const { v4: uuidv4 } = require('uuid');

const authors = [];

function Author(name) {
  this.id = uuidv4();
  this.name = name;
}

Author.save = (name) => {
  authors.push(new Author(name));
};

Author.getAll = () => authors;

Author.delete = (id) => {
  const indx = authors.findIndex((author) => author.id === id);
  if (indx !== -1) {
    authors.splice(indx, 1);
  }
};

Author.get = (id) => authors.find((author) => author.id === id);

Author.update = (id, { name }) => {
  const indx = authors.findIndex((author) => author.id === id);
  if (indx !== -1) {
    authors[indx].name = name;
  }
};

module.exports = Author;
