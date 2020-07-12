const express = require('express');
const app = express();
const cors = require('cors')

// ? ROUTES
const indexRouter = require('./routes/index');
const flashcardsRouter = require('./routes/flashcards');

app.use(cors());

app.use('/', indexRouter);
app.use('/flashcards', flashcardsRouter);

// PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}...`));

