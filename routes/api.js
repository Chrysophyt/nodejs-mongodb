const express = require('express');
const router = express.Router();

//GET req an Object
router.get('/object', function (req, res){
    res.send({type:'GET'});
});

//POST req an Object 
router.post('/object', function (req, res){
    console.log(req.body);
    res.send({
        type:'POST',
        name:req.body.name,
        level:req.body.level
    });
});

//update an object
router.put('/object/:id', function (req, res){
    res.send({type:'PUT'});
});

//delete an object
router.delete('/object/:id', function (req, res){
    res.send({type:'DELETE'});
});

module.exports = router;