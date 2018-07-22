angularApp.controller('DetailsCtrl', ['$scope', '$routeParams', 'SwapiService', function ($scope, $routeParams, SwapiService) {
  $scope.error = false;

  SwapiService.peoplePageDetails($routeParams.personId)
    .then(function(data) {
      if (data.status === 200) {

          $scope.data = data.data;
        } else {

          $scope.error = true;

        }
    })
}])