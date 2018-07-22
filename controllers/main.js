angularApp.controller('MainCtrl', ['$scope', 'SwapiService', function ($scope, SwapiService) {
  $scope.page = 1;
  $scope.isPrevious = false;
  $scope.isNext = false;

  SwapiService.peoplePage($scope.page)
    .then(function (data) {
      if (data.status === 200) {
        if (data.data.previous) {

          $scope.isPrevious = true;

          $scope.previous = data.data.previous;

        } else {

          $scope.isPrevious = false;

        }

        if (data.data.next) {

          $scope.isNext = true;

          $scope.next = data.data.next;

        } else {

          $scope.isNext = false;

        }

        $scope.data = data.data.results;

      } else {

        $scope.error = true;

      }

    });

  // General function to retrieve page give page number
  getPage = function (page) {
    SwapiService.peoplePage($scope.page)
      .then(function (data) {

        if (data.status === 200) {

          if (data.data.previous) {

            $scope.isPrevious = true;

            $scope.previous = data.data.previous;

          } else {

            $scope.isPrevious = false;

          }

          if (data.data.next) {

            $scope.isNext = true;

            $scope.next = data.data.next;

          } else {

            $scope.isNext = false;

          }

          $scope.data = data.data.results;

        } else {

          $scope.error = true;

        }

      });
  }

  // Load next page on button click
  $scope.nextPage = function () {
    console.log('clicked');
    $scope.page++;
    getPage($scope.page);
  };

  // Load previous page on button click
  $scope.previousPage = function () {
    console.log('clicked');
    $scope.page--;
    getPage($scope.page);
  };
}])