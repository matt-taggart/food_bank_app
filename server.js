require('dotenv').config({silent: true});
var express = require('express');
var routes = require('./routes/index.js');
var app = express();

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

require("./server/models/db");

app.use('/', routes);

app.listen(PORT, function () {
  console.log('Server listening on PORT %s', PORT);
});
