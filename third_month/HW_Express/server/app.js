const express = require('express');
const Controllers = require('./Controllers/Controllers');
const { upload } = require('./helpers/awsConfig');

const app = express();
const PORT = process.env.PORT;
app.use(express.json());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  next();
});

const books = new Controllers();


app.get('/', books.getBooks);
app.post('/', upload, books.postBooks);

const connect = async () => {
  books.connect();
  app.listen(PORT, () => console.log('Server have been started on port', PORT));
};

connect();

