angular.module('food')
  .controller('loginController', function($scope, $http){



  	    $scope.login = function (){
      $http({
        method: 'POST',
        url: '/login',
        data: {
          name: $scope.name,
          password: $scope.password

                        }
      }).then(function (result) {
        console.log(result);
      });
    };
});