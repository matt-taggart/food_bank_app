app.controller('donorController', function($scope, $http){
  $scope.donate = function (){
    $http({
      method: 'POST',
      url: '/createItem',
      data: {
        name: $scope.name,
        unit: $scope.unit,
        category: $scope.category,
        pricePerUnit: $scope.pricePerUnit,
        amountofUnits: $scope.amountofUnits,
                      }                            
    }).then(function (result) {
      console.log(result)
    });
};
});