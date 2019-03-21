const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const objectscheme = new Schema({
    name:{
        type:String,
        required: [true,'Name is Required']
    },
    rank: {
        type:String
    },
    available: {
        type:Boolean,
        default:false
    }
});

const object = mongoose.model('objectdb', objectscheme);

module.exports = object;