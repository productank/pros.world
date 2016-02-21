/*
 Application navigation controllers
 */

angular.module("app.navigation", []).controller("NavCtrl", ["$scope", "$timeout", "$mdSidenav", "$mdUtil", "$log", "$location","$mdMedia","config",
  function ($scope, $timeout, $mdSidenav, $mdUtil, $log, $location, $mdMedia, config) {

    this.toggleLeft = buildToggler('left');

    this.sidebar_opened = $mdMedia('gt-sm') && config.sidebar_default_open;

    this.checkIfOwnPage = function () {

      return _.contains(["/", "/about", "/legals"], $location.path());

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
]).controller("MenuCtrl",['$location',
  function($location){

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
  }
]).controller('HeaderNavMenu',
  function HeaderNavMenu($mdDialog) {
    var originatorEv;
    this.openMenu = function($mdOpenMenu, ev) {
      originatorEv = ev;
      $mdOpenMenu(ev);
    };
    this.notificationsEnabled = true;
    this.toggleNotifications = function() {
      this.notificationsEnabled = !this.notificationsEnabled;
    };
    this.redial = function() {
      $mdDialog.show(
        $mdDialog.alert()
          .targetEvent(originatorEv)
          .clickOutsideToClose(true)
          .parent('body')
          .title('Suddenly, a redial')
          .content('You just called a friend; who told you the most amazing story. Have a cookie!')
          .ok('That was easy')
      );
      originatorEv = null;
    };
    this.checkVoicemail = function() {
      // This never happens.
    };
  });