require('dotenv').config({silent: true});
var express = require('express');
var app = express();
var session = require('express-session');
var routes = require('./routes/index.js');
require('./config/passport.js');

var PORT = 3000;
var logger = require("morgan");
var bodyParser = require("body-parser")
var mongoose = require('mongoose');

app.use(logger('dev'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(bodyParser.json());

// require("./server/models/db");

app.use(express.static('app'));
app.use(express.static('public'));

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

app.use('/', routes);

app.listen(PORT, function () {
  console.log('Server listening on PORT %s', PORT);
});
