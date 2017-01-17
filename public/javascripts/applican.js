var angApp = angular.module('applican', []);

angApp.controller('jobsCtrl', ['$scope', function($scope) {
  $scope.applications = [];

  $scope.addJob = function() {
    $scope.applications.push({
      status: $scope.status,
      jobTitle: $scope.jobTitle,
      company: $scope.company,
      link: $scope.link,
      dateApplied: $scope.dateApplied,
    });
    $scope.status = '';
    $scope.jobTitle = '';
    $scope.company = '';
    $scope.link = '';
    $scope.dateApplied = '';
  };

}]);
