var express = require('express');
var router = express.Router();

var User = require("../models/user").User;

// To create user POST /api/users
router.post('/', function(req, res, next) {
    User.create(req.body, function(err, post) {
        if (err) {}
        else {
            return res.status(200).json({
                message: 'success created'
            });
        }
    });
});

// To authenticate user
router.post('/authenticate', function(req, res, next) {
    // Only to test
    return res.status(200).json({
        token: '777'
    });
});

// To get user GET /api/users/id
router.get('/:id', function(req, res, next) {

});

// to get all users
router.get('/', function(req, res, next) {

});

// to update user
router.put('/:id', function(req, res, next) {

}); 

//to delete user
router.delete('/:id', function(req, res, next) {

});

module.exports = router;