angular.module("app.navigation.sidenav",["ngMaterial","ngMessages"])
  .controller('SidenavCtrl',
  function ($scope, $timeout, $mdSidenav, $log) {
    $scope.toggleLeft = function () {
      $mdSidenav('left').toggle()
        .then(function () {
          $log.debug("toggle left is done");
        });
    };
    $scope.toggleRight = function () {
      $mdSidenav('right').toggle()
        .then(function () {
          $log.debug("toggle RIGHT is done");
        });
    };
  })
  .controller('SidenavLeftCtrl',
  function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      $mdSidenav('left').close()
        .then(function () {
          $log.debug("close LEFT is done");
        });
    };
  })
  .controller('SidenavRightCtrl',
  function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      $mdSidenav('right').close()
        .then(function () {
          $log.debug("close RIGHT is done");
        });
    };
  });