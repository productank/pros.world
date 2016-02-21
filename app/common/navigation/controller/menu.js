angular.module("app.navigation", []).controller("NavCtrl", ["$scope", "$timeout", "$mdSidenav", "$mdUtil", "$log", "$location","$mdMedia","config",
  function ($scope, $timeout, $mdSidenav, $mdUtil, $log, $location, $mdMedia, config) {

    this.toggleLeft = buildToggler('left');

    this.sidebar_opened = $mdMedia('gt-sm') && config.sidebar_default_open;

    this.checkIfOwnPage = function () {

      return _.contains(["/404", "/pages/500", "/pages/login", "/pages/signin", "/pages/signin1", "/pages/signin2", "/pages/signup", "/pages/signup1", "/pages/signup2", "/pages/forgot", "/pages/lock-screen"], $location.path());

    };

    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildToggler(navID) {
      var debounceFn =  $mdUtil.debounce(function(){
        $(".view-container").toggleClass("slided-right");
        $(".header__menu-button").toggleClass("toggled");
        $mdSidenav(navID)
          .toggle()
          .then(function () {

          });
      },200);
      return debounceFn;
    }

  }
]).controller('Menu',['$state','$scope','$rootScope','$q','$http','$location','$interval','$firebase','$timeout','$stateParams','$routeParams','$window','$document','store', function($state,$scope,$rootScope,$q,$http,$location,$interval,$firebase,$timeout,$stateParams,$routeParams,$window,$document,store) {
$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";


    this.goToUrl = function(url) {
      $location.path(url);
    };

    this.menu_sections = [
      {
        name: 'Home',
        is_toggle:true,
        toggled: false,
        icon: 'dist/img/icons/ic_home_24px.svg',
        menu_items: [
          {
            name: 'Home',
            url: '/'
          }
        ]
      },
      {
        name: 'About',
        is_toggle:true,
        toggled: false,
        icon: 'dist/img/icons/ic_book_24px.svg',
        menu_items: [
          {
            name: 'About',
            url: 'about'
          }
        ]
      },
      {
        name: 'Legals',
        is_toggle:true,
        icon: 'dist/img/icons/ic_legal_24px.svg',
        menu_items: [
          {
            name: 'agreement',
            url: 'agreement'
          },
          {
            name: 'privacy policy',
            url: 'privacy'
          },
          {
            name: 'responsible gaming',
            url: 'responsible'
          }
        ]
      },
      {
        name: 'Social',
        is_toggle:true,
        toggled: false,
        icon: 'dist/img/icons/ic_transform_24px.svg',
        menu_items: [
          {
            name: 'Facebook',
            url: 'social'
          },
          {
            name: 'Twitter',
            url: 'social'
          },
          {
            name: 'Instagram',
            url:'social'
          }
        ]
      }
    ];

    this.getClass = function(url) {

      if('/' + url == $location.path()){
        return "active";
      }
      else {
        return "";
      }

    };

    this.getActiveParent = function(items) {
      return _.find(items, function(value){
        return '/' + value.url == $location.path();
      });
    };

    this.toggle = function(index){
      var $this = this;
      this.menu_sections.map(function(ix, position) {
        var toggle = $this.menu_sections[index].toggled ? false : true;
        $this.menu_sections[position].toggled = position !== index ?  false : toggle;
      });
      $(".main-menu").children("li:nth-child(" + (index + 1) + ")").toggleClass("open").find("ul").stop().slideToggle(function(){
        $(".main-menu").children("li:nth-child(" + (index + 1) + ")").siblings().removeClass("open").find("ul").stop().slideUp();
      });
    };

$scope.init();

}])

