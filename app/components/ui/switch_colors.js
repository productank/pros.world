angular.module('app.ui.switch_colors', ['ngMaterial', 'ngMessages'])
  .controller('UserSwitchColorsCtrl',
  function ($scope, $timeout, $mdBottomSheet, $route, config) {
    $scope.alert = '';
    $scope.showGridBottomSheet = function ($event) {
      $scope.alert = '';
      $mdBottomSheet.show({
        templateUrl: 'app/views/templates/user-bottom-grid.tmpl.html',
        controller: 'UserBottomSheetCtrl',
        targetEvent: $event,
        parent: '#content'
      }).then(function (clickedItem) {

        switch (clickedItem.machine_name) {
          case "teal":

            config.primary_color = '#009688';
            config.secondary_color = '#FF5252';

            $("#app_main_css").attr("href", "dist/css/main.css");

            break;
          case "orange":

            config.primary_color = '#F57C00';
            config.secondary_color = '#7C4DFF';

            $("#app_main_css").attr("href", "dist/colors/orange/css/main.css");

            break;
          case "indigo":

            config.primary_color = '#3F51B5';
            config.secondary_color = '#D81B60';

            $("#app_main_css").attr("href", "dist/colors/indigo/css/main.css");

            break;
          case "red":

            config.primary_color = '#D32F2F';
            config.secondary_color = '#607D8B';

            $("#app_main_css").attr("href", "dist/colors/red/css/main.css");
            break;
          case "blue":

            config.primary_color = '#1976D2';
            config.secondary_color = '#FFC107';

            $("#app_main_css").attr("href", "dist/colors/blue/css/main.css");
            break;
          case "green":

            config.primary_color = '#4CAF50';
            config.secondary_color = '#607D8B';

            $("#app_main_css").attr("href", "dist/colors/green/css/main.css");
            break;
          case "brown":

            config.primary_color = '#795548';
            config.secondary_color = '#009688';

            $("#app_main_css").attr("href", "dist/colors/brown/css/main.css");
            break;
        }

        //console.log(config);

        $route.reload();

      });
    };
  });