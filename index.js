const express = require('express');
const routes = require('./routes/api')
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

//set up
const app = express();

//connect mongodb
mongoose.connect('mongodb://localhost/testobject', { useNewUrlParser: true });
mongoose.Promise = global.Promise;

//start here
app.use(bodyparser.json());

app.use('/api', routes);

//error handling 
app.use(function(err, req, res, next){
    //console.log(err);
    res.send({error:err.message})
});


app.listen(5000);