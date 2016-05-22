var express = require('express');
var router = express.Router();
var Item = require('../server/models/item.js');
var Place = require('../server/models/place.js');
var _ = require('lodash');
var faker = require('faker');


router.get('*', function(req, res) {
  res.sendFile(process.cwd() + '/index.html');
});

router.get('/create-places', function(req, res) {
  _.times(50, function() {
    var newPlace = new Place({
      name: faker.company.companyName(),
      address: faker.address.streetAddress(),
      city: faker.address.city(),
      zipCode: faker.address.zipCode(),
      phoneNumber: faker.phone.phoneNumber(),
      aboutUs: faker.lorem.paragraph(),
      imgUrl: faker.image.avatar()
    });

    newPlace.save(function(err, result) {
      if(err) {
        throw err;
      } else {
        console.log('content saved to DB');
      }
    });
  });
});

router.post('/createItem', function(req, res) {
  var newItem = new Item(req.body);
  newItem.save(function(err, result) {
    if(err) {
      throw err;
    } else {
      console.log('content saved to DB');
    }
  });

});

// router.get('/api/users/me',
//   passport.authenticate('basic', { session: false }),
//   function(req, res) {
//     res.json({ id: req.user.id, username: req.user.username });
//   });

module.exports = router;
