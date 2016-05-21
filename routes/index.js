var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/index.html');
});

router.get('/create', function(req, res) {
  res.send('Create');
});

// router.get('/api/users/me',
//   passport.authenticate('basic', { session: false }),
//   function(req, res) {
//     res.json({ id: req.user.id, username: req.user.username });
//   });

module.exports = router;
