const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const authRouter = require('./routes/auth');
const authorRouter = require('./routes/author');
const bookRouter = require('./routes/book');

const PORT = 3000;

const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({ secret: 'The secret' }));

// Home page
app.get('/', (_, res) => res.redirect('/book/list'));

app.use(authRouter);
app.use(authorRouter);
app.use(bookRouter);
app.use((_, res) => {
  res.status(404).end('Not Found');
});

/* eslint-disable-next-line no-console */
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
