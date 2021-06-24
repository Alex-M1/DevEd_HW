const cors = require('cors');
const express = require('express');
const { connect } = require('./modules/connect');
const person = require('./modules/routes');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/person', person);

connect(app);
