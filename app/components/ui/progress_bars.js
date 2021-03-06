angular.module('app.ui.progress', ['ngMaterial', 'ngMessages'])
  .controller('ProgressCtrl', ['$scope', '$interval',
    function ($scope, $interval) {
      $scope.mode = 'query';
      $scope.determinateValue = 30;
      $interval(function () {
        $scope.determinateValue += 1;
        if ($scope.determinateValue > 100) {
          $scope.determinateValue = 30;
        }
      }, 100, 0, true);
    }
  ]).controller('ProgressLinearCtrl', ['$scope', '$interval',
    function ($scope, $interval) {
      $scope.mode = 'query';
      $scope.determinateValue = 30;
      $scope.determinateValue2 = 30;
      $interval(function () {
        $scope.determinateValue += 1;
        $scope.determinateValue2 += 1.5;
        if ($scope.determinateValue > 100) {
          $scope.determinateValue = 30;
          $scope.determinateValue2 = 30;
        }
      }, 100, 0, true);
      $interval(function () {
        $scope.mode = ($scope.mode == 'query' ? 'determinate' : 'query');
      }, 7200, 0, true);
    }]);