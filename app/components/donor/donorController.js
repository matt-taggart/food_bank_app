angular.module('food').controller('donorController', [$scope]){
  $scope.donate = function () {
    $http({
      method: 'POST',
      url: '/createItem',
      data: {
        itemname: $scope.,
        organizationName: $scope.organizationName,
        address: $scope.address,
        website: $scope.website,
        userRole: $scope.userRole,
        userPassword: $scope.userPassword,
        userFirstName: $scope.userFirstName,
        userLastName: $scope.userLastName,
      }
    }).then(function (result) {
      console.log(result)
    });
  }
});