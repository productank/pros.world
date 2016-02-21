angular.module("app.colorswitcher", ['ngMaterial', 'ngMessages'])
  .controller("ColorSwitchCtrl", function ($scope, $mdDialog, config) {

    this.primary_color_base = config.md_primary.base;
    this.primary_color_hue = config.md_primary.shade;
    this.secondary_color_base = config.md_accent.base;
    this.secondary_color_hue = config.md_accent.shade;

    this.themes = config.additional_themes;
    this.theme_chosen = '';

    this.showColorDialog = function (ev) {
      $mdDialog.show({
          controller: function ($scope, $mdDialog, themeProvider, $injector, $rootScope, $location, $route) {

            $scope.getColorHex = function (color, hue) {
              var hexacolor = $rootScope.RGB2HTML($rootScope.getMaterialColor(color, hue));
              return hexacolor;
            };

            $scope.hide = function () {
              $mdDialog.hide();
            };
            $scope.cancel = function () {
              $mdDialog.cancel();
            };

            $scope.reset = function () {
              window.location.reload();
            };

            $scope.choose_theme = function (theme_chosen) {

              var chosen_theme = theme_chosen;

              config.additional_themes.map(function (name_of_theme) {

                //optimize to use underscore _filter and not map

                if (name_of_theme.name == chosen_theme) {

                  config.md_primary.base = name_of_theme.md_primary.base;
                  config.md_primary.shade = name_of_theme.md_primary.shade;
                  config.md_accent.base = name_of_theme.md_accent.base;
                  config.md_accent.shade = name_of_theme.md_accent.shade;
                }
              });

              themeProvider.setDefaultTheme(chosen_theme);

              $mdDialog.cancel();

              $route.reload();
            };
          },
          templateUrl: 'app/components/color/colorswitcher.tmpl.html',
          targetEvent: ev
        })
        .then(function (answer) {
          $scope.alert = 'You said the information was "' + answer + '".';
        }, function () {
          $scope.alert = 'You cancelled the dialog.';
        });
    };

  })
  .controller("ColorSwitchLayoutCtrl", function ($scope, config, $mdDialog, themeProvider, $injector, $rootScope, $location, $route) {

    if($location.search().layout){

      var chosen_theme = $location.search().layout;

      config.additional_themes.map(function (name_of_theme) {

        //optimize to use underscore _filter and not map

        if (name_of_theme.name == chosen_theme) {

          config.md_primary.base = name_of_theme.md_primary.base;
          config.md_primary.shade = name_of_theme.md_primary.shade;
          config.md_accent.base = name_of_theme.md_accent.base;
          config.md_accent.shade = name_of_theme.md_accent.shade;
        }
      });

      themeProvider.setDefaultTheme(chosen_theme);
    }

    if($location.search().navigation){
      switch($location.search().navigation) {
        case "small":
          break;
        case "medium":
          $("body").removeClass("navigation--small").addClass("navigation--medium");
          break;
        case "medium-image":
          $("body").removeClass("navigation--small").addClass("navigation--medium--image");
          break;
        case "image":
          $("body").removeClass("navigation--small");
          break;
        case "image-fixed":
          $route.reload();
          $("body").removeClass("navigation--small");
          config.sidebar_default_open = true;
          break;
        default:
          return "";
      }
    }

  })
  .config(function ($provide, $mdThemingProvider, $mdGestureProvider, config) {

    config.additional_themes.map(function (additional_theme) {
      $mdThemingProvider.theme(additional_theme.name)
        .primaryPalette(additional_theme.md_primary.base, {
          'default': additional_theme.md_primary.shade
        })
        .accentPalette(additional_theme.md_accent.base, {
          'default': additional_theme.md_accent.shade
        });
    });

    $provide.value('themeProvider', $mdThemingProvider);

});