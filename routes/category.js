var express = require('express');
var router = express.Router();

var Category = require('../models/category').Category;

router.post('/', function(req, res, next) {
    Category.create(req.body, function(err, post) {
        if(err) { 
            return 0 ; 
        } else {
            return res.status(200).json({
                message : 'Category created'
            });
        }
    });
});


module.exports = router;