/**************************
 Initialize the Angular App
 **************************/
'use strict';

var app = angular.module("app", ["ngRoute","ngResource", "ngAnimate", "ngAria", "ngMessages", "ngMaterial",
  "easypiechart", "mgo-angular-wizard", "ngMap",
  "app.config", "app.navigation", "app.navigation.sidenav",
  "app.subheader", "app.tabs", "app.tooltips","app.autocomplete", "app.dialog","app.chat","app.form.material",
  //To confirm these ones make sure we need them
  "ui.tree", "app.ui.form.directives","app.ui.tree","app.form.validation",
  "app.bottomsheet", "app.chips", "app.toast", "app.calendar", "app.fabs",
  "app.ui.maps", "app.ui.progress", "app.ui.toolbar", "app.ui.switch_colors",
  "app.ui.form.ctrls","app.user","app.colorswitcher", "app.site_autocomplete",
  "app.tables", "app.map", "todomvc", "app.chart.ctrls", "app.chart.directives", "countTo", "app.music","firebase","ui.router","stripe","ngSanitize"])
    .config(function(){

    Stripe.setPublishableKey('pk_SOcVcxfKfxOQX7QsGbriRZDDKJAia');

    }).config(["$routeProvider","$stateProvider", "$urlRouterProvider","$locationProvider",
    function ($routeProvider,$stateProvider,$urlRouterProvider,$locationProvider) {


      return $routeProvider.when("/", {
        redirectTo: "/dashboard"
      }).when("/dashboard", {
        templateUrl: "app/views/home/index.html"
      }).when("/about", {
        templateUrl: "app/views/about/index.html"
      }).when("/responsible_gaming", {
        templateUrl: "app/views/about/responsible_gaming.html"
      }).when("/agreement", {
        templateUrl: "app/views/about/agreement.html"
      }).when("/privacy", {
        templateUrl: "app/views/about/privacy.html"
      }).when("/verify/:email", {
        templateUrl: "app/views/gamer/session/verify.html"
      }).when("/password/reset", {
        templateUrl: "app/views/gamer/session/password_reset.html"
      }).when("/password/reset/:ID", {
        templateUrl: "app/views/gamer/session/password_new.html"
      }).when("/password/verify/:ID", {
        templateUrl: "app/views/gamer/session/verify.html"
      }).when("/grabbit/:gameid", {
        templateUrl: "app/views/home/index.html"
      }).when("/unsubscribe/:email", {
        templateUrl: "app/views/session/unsubscribe.html"
      }).otherwise({
        redirectTo: "/"
      });
      $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
      });

    }

  ]).config(function ($mdThemingProvider, $mdGestureProvider, config) {

    $mdThemingProvider.alwaysWatchTheme(true);

    $mdGestureProvider.skipClickHijack();

    $mdThemingProvider.theme('default')
      .primaryPalette(config.md_primary.base, {
        'default': config.md_primary.shade
      })
      .accentPalette(config.md_accent.base, {
        'default': config.md_accent.shade
      });
  }).run(["$rootScope", "$location", "$mdColorPalette","$state",   "$stateParams",
  
    function ($rootScope, $location, $mdColorPalette,$state,$stateParams) {

      $rootScope.app_name = "Pros.world";

      $rootScope.getMaterialColor = function (base, shade) {
        var color = $mdColorPalette[base][shade].value;
        return 'rgb(' + color[0] + ',' + color[1] + ',' + color[2] + ')';
      };

      $rootScope.RGB2HTML = function (rgb) {
        rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
        return (rgb && rgb.length === 4) ? "#" +
        ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2) : '';
      };

    }]).run(function($rootScope, $templateCache) {
   $rootScope.$on('$viewContentLoaded', function() {
      $templateCache.removeAll();
   });
});