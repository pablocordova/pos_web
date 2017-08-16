var mongoose = require('mongoose');

var CategorySchema = mongoose.Schema({
    name : { type : String }    
});

module.exports = mongoose.model('Category', CategorySchema);