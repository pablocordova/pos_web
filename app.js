'use strict';

/**
 *	Instances to use express framework and body-parser middleware
 */

var express = require('express');
var bodyParser =require('body-parser');
var app = express();

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

app.use('/api/users', users);

// Give permission to directory dist and public
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;


