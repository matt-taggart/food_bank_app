require('dotenv').config({silent: true});
var express = require('express');
var routes = require('./routes/index.js');
var app = express();
var PORT = 3000;

app.use('/', routes);
app.use('/login', routes);
app.use('/register', routes);


app.listen(PORT, function () {
  console.log('Server listening on PORT %s', PORT);
});
