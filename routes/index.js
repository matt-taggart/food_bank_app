var express = require('express');
var router = express.Router();
var path = require('path')

router.get('/', function(req, res) {
  res.send('Hello World');
});

<<<<<<< HEAD

router.post('/login', function(req, res) {
  res.sendFile(path.resolve('public/loginTest.html'));
});

router.post('/register', function(req, res) {
  res.sendFile(path.resolve('public/registerTest.html'));
});


=======
router.get('/create', function(req, res) {
  res.send('Create');
});

// router.get('/api/users/me',
//   passport.authenticate('basic', { session: false }),
//   function(req, res) {
//     res.json({ id: req.user.id, username: req.user.username });
//   });
>>>>>>> 1ed0ad29a6b3530e1ef654fa9e3b4aeee40f84e3

module.exports = router;
