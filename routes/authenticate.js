var express = require('express');
var router = express.Router();

// To authenticate user
router.post('/', function(req, res, next) {
    return res.status(200).json({
        token: '777',
        firstname: 'PabloMock',
        lastname: 'CordovaMock',
        username: 'usernameMock'
    });
});

module.exports = router;