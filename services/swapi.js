var services = angular.module('swapi', []);

services.factory('SwapiService', ['$http',
  function ($http) {
    function Swapi() {};

    Swapi.domain = 'https://swapi.co/api';

    // List of up to 10 people in star wars universe based on pages provided by API
    Swapi.peoplePage = function (page) {
      var path = '/people/?page=' + page;
      var url = Swapi.domain + path;

      return $http.get(url)
        .then(function (response) {

          return response;
        });
    };

    // Indiviual details pertaining to person Id
    Swapi.peoplePageDetails = function (id) {
      var path = '/people/' + id;
      var url = Swapi.domain + path;

      return $http.get(url)
        .then(function (response) {

          return response;
        })
    }

    return Swapi;
  }
]);