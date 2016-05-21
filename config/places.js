var Place = require('../server/models/place.js');
var _ = require('lodash');
var faker = require('faker');

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

// _.times(25, function() {
//
//   var newPlace = new Place({
//     name: faker.company.companyName(),
//     address: faker.address.streetAddress(),
//     city: faker.address.city(),
//     zipCode: faker.address.zipCode(),
//     phoneNumber: faker.phone.phoneNumber(),
//     aboutUs: faker.lorem.paragraph(),
//     imgUrl: faker.image.avatar()
//   });
//
//   newPlace.save(function(err, result) {
//     if(err) {
//       throw err;
//     } else {
//       console.log('content saved to DB');
//     }
//   });
//
// });
