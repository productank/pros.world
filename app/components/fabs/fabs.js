angular.module('app.fabs', ['ngMaterial', 'ngMessages'])
  .controller('SpeedFabCtrl',
  function ($scope) {
    $scope.demo = {
      topDirections: ['left', 'up'],
      bottomDirections: ['down', 'right'],
      isOpen: false,
      availableModes: ['md-fling', 'md-scale'],
      selectedMode: 'md-fling',
      availableDirections: ['up', 'down', 'left', 'right'],
      selectedDirection: 'right'
    };
  })
  .controller('HomeFabCtrl',
  function ($scope) {
    $scope.demo = {
      isOpen: false,
      selectedMode: 'md-fling',
      selectedDirection: 'left'
    };
  })
  .controller('FabToolbarCtrl',
  function ($scope) {
    $scope.isOpen = false;
    $scope.demo = {
      isOpen: false,
      count: 0,
      selectedDirection: 'left'
    };
  })
  .controller('FabSpeedDialCtrl',
  function () {
    this.topDirections = ['left', 'up'];
    this.bottomDirections = ['down', 'right'];
    this.isOpen = false;
    this.availableModes = ['md-fling', 'md-scale'];
    this.selectedMode = 'md-fling';
    this.availableDirections = ['up', 'down', 'left', 'right'];
    this.selectedDirection = 'right';
  });