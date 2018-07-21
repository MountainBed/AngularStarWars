var angularApp = angular.module('StarWarsApp', ['ngRoute']);

angularApp.config(['$routeProvider',
  function($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    })
    .otherwise('/');
  }
]);