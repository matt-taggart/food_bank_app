angular.module('food')
  .controller('donorController', function($scope, $http){

    $http({
      method: 'GET',
      url: '/findItem',
    }).then(function(result) {
      $scope.items = result.data;
    });

    $scope.donate = function (){
      $http({
        method: 'POST',
        url: '/createItem',
        data: {
          name: $scope.name,
          unit: $scope.unit,
          category: $scope.category,
          pricePerUnit: $scope.pricePerUnit,
          amountOfUnits: $scope.amountOfUnits,
                        }
      }).then(function (result) {
        console.log(result);
      });

      $http({
        method: 'GET',
        url: '/findItem',
      }).then(function(result) {
        $scope.items = result.data;
      });
    };
});
