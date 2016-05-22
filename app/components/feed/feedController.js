angular.module('food').controller('feedController', ['$scope', '$http',
  function ($scope, $http) {
    $scope.feedInit = function(){
        $http.get('/api/feed').then(function(res) {
            $scope.places = res.data;
            console.log(res.data);
        })
    }
  }
]);