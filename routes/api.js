const express = require('express');
const router = express.Router();
const Object = require('../models/object');

//GET req an Object
router.get('/object', function (req, res, next){
    res.send({type:'GET'});
});

//POST req an Object 
router.post('/object', function (req, res, next){
    Object.create(req.body).then(function(object){
        res.send(object);
    }).catch(next);
    
});

//update an object
router.put('/object/:id', function (req, res, next){
    res.send({type:'PUT'});
});

//delete an object
router.delete('/object/:id', function (req, res, next){
    res.send({type:'DELETE'});
});

module.exports = router;