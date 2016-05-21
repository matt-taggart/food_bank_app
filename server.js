require('dotenv').config({silent: true});
var express = require('express');
var app = express();
var session = require('express-session');
var routes = require('./routes/index.js');

var PORT = 3000;

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

app.use('/', routes);

app.listen(PORT, function () {
  console.log('Server listening on PORT %s', PORT);
});
