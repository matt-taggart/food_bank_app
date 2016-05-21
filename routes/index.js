var express = require('express');
var router = express.Router();
var path = require('path')

router.get('/', function(req, res) {
  res.send('Hello World');
});


router.post('/login', function(req, res) {
  res.sendFile(path.resolve('public/loginTest.html'));
});

router.post('/register', function(req, res) {
  res.sendFile(path.resolve('public/registerTest.html'));
});



module.exports = router;
