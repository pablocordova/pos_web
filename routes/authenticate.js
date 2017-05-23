var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var User = require('../models/user').User;

// Process authentication by passport
passport.use(new localStrategy(function(username, password, done) {
    User.findOne({ username: username}, function(err, user) {
        if (err) { 
            throw err; 
        }
        if(!user) {
            return done(null, false, { message: 'Unknown user' });
        }
        bcrypt.compare(password, user.password, function(err, isMatch) {
            if (err) {
                throw err;
            }
            if (isMatch) {
                return done(null, user);
            }
            return done(null, false, { message: 'Invalid password' });
        });
    });
}));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.getUserById(id, function(err, user) {
    done(err, user);
  });
});

// To authenticate user
router.post('/', passport.authenticate('local'), function(req, res, next) {
    return res.status(200).json({
        token: '777',
        firstname: 'PabloMock',
        lastname: 'CordovaMock',
        username: 'usernameMock'
    });
});

module.exports = router;