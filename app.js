'use strict';

/**
 *	Instances to use express framework and body-parser middleware
 */

var express = require('express');
var bodyParser =require('body-parser');
var app = express();

/**
 *	Instance of current directory's path
 */

const path = require('path');

// Give permission to directory dist and public
app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;


