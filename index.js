const express = require('express');
const routes = require('./routes/api')
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyparser.json());

app.use('/api', routes);


app.listen(5000);