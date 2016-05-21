angular.module('food', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
      .state('home', {
        url: '/home',
        templateUrl: '/components/home/home.html'
      });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

  }