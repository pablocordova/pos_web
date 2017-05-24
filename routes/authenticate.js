var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');
var jwt = require('jwt-simple');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var User = require('../models/user').User;
// Warning this key secret must be used only to test
var secret = 'keysecret';

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
    let payload = { username : req.user.username };
    //TODO: send the token on headers not on body
    let token = jwt.encode(payload, secret);
    return res.status(200).json({
        token: token,
        firstname: req.user.firstname,
        lastname: req.user.lastname,
        username: req.user.username
    });
});

module.exports = router;