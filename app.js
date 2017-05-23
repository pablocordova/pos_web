'use strict';

/**
 *	Instances to use express framework and body-parser middleware
 */

var express = require('express');
var bodyParser =require('body-parser');
var passport = require('passport');
var session = require('express-session');
var app = express();

/**
 * Init passport
 */
 // Express session middleware
app.use(session({
    secret:"123456789",
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// Use bodyParser
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

/**
 *	Instance of current directory's path
 */

const path = require('path');

/**
 * Instance to all routers about api users
 */

var users = require('./routes/users');
var authenticate = require('./routes/authenticate');

app.use('/api/users', users);
app.use('/api/authenticate', authenticate);

// Give permission to directory dist and public
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;


