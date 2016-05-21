module.exports = function() {
  var _ = require('lodash');
  var faker = require('faker');
  return _.times(25, function() {
    return {
      place: faker.company.companyName(),
      address: faker.address.streetAddress(),
      city: faker.address.city(),
      zipCode: faker.address.zipCode(),
      phoneNumber: faker.phone.phoneNumber(),
      aboutUs: faker.lorem.paragraph(),
      imageUrl: faker.image.avatar()
    };
  });


};
