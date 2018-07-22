var angularApp = angular.module('StarWarsApp', [
  'ngRoute',
  'swapi',
]);

angularApp.component('headermain', {
  templateUrl: 'templates/headermain.html',
  controller: 'HeaderMainCtrl'
});

angularApp.config(['$routeProvider',
  function($routeProvider){
    $routeProvider
    .when('/people', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
    })
    .when('/people/:personId', {
      templateUrl: 'views/details.html',
      controller: 'DetailsCtrl'
    })
    .otherwise('/people');
  }
]);
