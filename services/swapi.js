var services = angular.module('swapi', []);

services.factory('SwapiService', ['$http',
  function($http){
    function Swapi(){};

    Swapi.domain = 'https://swapi.co/api';

    Swapi.peoplePage = function(page){
      var path = '/people/?page=' + page;
      var url = Swapi.domain + path;

      return $http.get(url)
        .then(function(response){

          return response;
        });
    };

    return Swapi;
  }
]);