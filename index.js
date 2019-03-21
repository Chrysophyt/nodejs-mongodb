const express = require('express');
const routes = require('./routes/api')

const app = express();

app.use('/api', routes);


app.listen(5000);