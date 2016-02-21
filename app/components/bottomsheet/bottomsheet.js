angular.module('app.bottomsheet', ['ngMaterial', 'ngMessages'])
  .controller('BottomSheetExample',
  function ($scope, $timeout, $mdBottomSheet) {
    $scope.alert = '';
    $scope.showListBottomSheet = function ($event) {
      $scope.alert = '';
      $mdBottomSheet.show({
        templateUrl: 'app/components/bottomsheet/bottom-list.tmpl.html',
        controller: 'ListBottomSheetCtrl',
        targetEvent: $event,
        parent: '#content'
      }).then(function (clickedItem) {
        $scope.alert = clickedItem.name + ' clicked!';
      });
    };
    $scope.showGridBottomSheet = function ($event) {
      $scope.alert = '';
      $mdBottomSheet.show({
        templateUrl: 'app/components/bottomsheet/bottom-grid.tmpl.html',
        controller: 'GridBottomSheetCtrl',
        targetEvent: $event,
        parent: '#content'
      }).then(function (clickedItem) {
        $scope.alert = clickedItem.name + ' clicked!';
      });
    };
  })
  .controller('ListBottomSheetCtrl',
  function ($scope, $mdBottomSheet) {
    $scope.items = [
      {name: 'Share', icon: 'dist/img/icons/ic_share_48px.svg'},
      {name: 'Upload', icon: 'dist/img/icons/ic_cloud_upload_48px.svg'},
      {name: 'Copy', icon: 'dist/img/icons/ic_content_copy_48px.svg'},
      {name: 'Print this page', icon: 'dist/img/icons/ic_local_print_shop_48px.svg'},
    ];
    $scope.listItemClick = function ($index) {
      var clickedItem = $scope.items[$index];
      $mdBottomSheet.hide(clickedItem);
    };
  })
  .controller('GridBottomSheetCtrl',
  function ($scope, $mdBottomSheet) {
    $scope.items = [
      {name: 'Share', icon: 'dist/img/icons/ic_share_48px.svg'},
      {name: 'Upload', icon: 'dist/img/icons/ic_cloud_upload_48px.svg'},
      {name: 'Copy', icon: 'dist/img/icons/ic_content_copy_48px.svg'},
      {name: 'Print', icon: 'dist/img/icons/ic_local_print_shop_48px.svg'},
      {name: 'Location', icon: 'dist/img/icons/ic_my_location_48px.svg'},
      {name: 'Messages', icon: 'dist/img/icons/ic_message_48px.svg'},
    ];
    $scope.listItemClick = function ($index) {
      var clickedItem = $scope.items[$index];
      $mdBottomSheet.hide(clickedItem);
    };
  })
  .controller('UserBottomMenu',
  function ($scope, $timeout, $mdBottomSheet, $route) {
    $scope.alert = '';
    $scope.showGridBottomSheet = function ($event) {
      $scope.alert = '';
      $mdBottomSheet.show({
        templateUrl: 'app/components/bottomsheet/user-bottom-grid.tmpl.html',
        controller: 'UserBottomSheetCtrl',
        targetEvent: $event,
        parent: '#content'
      }).then(function (clickedItem) {
        //$scope.alert = clickedItem.name + ' clicked!';
      });
    };
  })
  .controller('UserBottomSheetCtrl',
  function ($scope, $mdBottomSheet) {
    $scope.items = [
      {name: 'Teal', machine_name: 'teal', color: '#009688', icon: 'dist/img/icons/ic_gps_fixed_48px.svg'},
      {name: 'Orange', machine_name: 'orange', color: '#F57C00', icon: 'dist/img/icons/ic_gps_fixed_48px.svg'},
      {name: 'Indigo', machine_name: 'indigo', color: '#3F51B5', icon: 'dist/img/icons/ic_gps_fixed_48px.svg'},
      {name: 'Red', machine_name: 'red', color: '#D32F2F', icon: 'dist/img/icons/ic_gps_fixed_48px.svg'},
      {name: 'Blue', machine_name: 'blue', color: '#1976D2', icon: 'dist/img/icons/ic_gps_fixed_48px.svg'},
      {name: 'Green', machine_name: 'green', color: '#4CAF50', icon: 'dist/img/icons/ic_gps_fixed_48px.svg'},
      {name: 'Brown', machine_name: 'brown', color: '#795548', icon: 'dist/img/icons/ic_gps_fixed_48px.svg'}
    ];
    $scope.listItemClick = function ($index) {
      var clickedItem = $scope.items[$index];
      $mdBottomSheet.hide(clickedItem);
    };
  });