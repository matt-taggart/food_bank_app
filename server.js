require('dotenv').config({silent: true});
var express = require('express');
var app = express();

var PORT = 3000;

app.get('/', function(req, res) {
  res.send('Hello World');
});

app.listen(PORT, function () {
  console.log('Server listening on PORT %s', PORT);
});
