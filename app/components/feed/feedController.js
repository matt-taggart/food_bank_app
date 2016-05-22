angular.module('food').controller('feedController', ['$scope', '$http'
  function ($scope, $http) {
    $scope.places = function(){
        alert("hi");
        $http.get('/api/feed').then(function(res) {
            console.log(res);
        })
    }
  }

  $scope.places();
]);