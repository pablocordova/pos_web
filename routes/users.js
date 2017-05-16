var express = require('express');
var router = express.Router();

// To create user POST /api/users
router.post('/', function(req, res, next) {
    // Debuging request
    console.log(req.body);
    return res.status(200).json({
        message: 'success created'
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