angular.module('app')
.controller('Parent',['$state','$scope','$rootScope','$q','$http','$location','$interval','$firebase','$timeout','$stateParams','$routeParams','$window','$document','store', function($state,$scope,$rootScope,$q,$http,$location,$interval,$firebase,$timeout,$stateParams,$routeParams,$window,$document,store) {
$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
	
	$scope.init = function(){

	}

 $scope.$on('session', function (event, data) {
    
    //console.log("show user from parent is " + data); // 'Some data'
    $scope.showUser = data

  });
$window.fbAsyncInit = function() {
    FB.init({ 
      appId: '1415417408775009',
      status: true, 
      cookie: true, 
      xfbml: true,
      version: 'v2.4'
    });
};
$(".openNav").click(function() {
  $("body").toggleClass("navOpen");
  $("nav").toggleClass("open");
  $(".wrapper").toggleClass("open");
  $(this).toggleClass("open");
});
  var currentLocation= $state.current.name
  // $scope.uid = localStorage.getItem('uid')
  // if((currentLocation=="dashboard") && !$scope.uid){

  //         $location.path('/');
     

  // }

    $scope.logout = function(){

      $http({
        url: './app/views/user/session/back/logout.php',
            method: "POST",
        })
        .success(function(response) {
          if (!response.success) {
            //alert("not working")
          }else{

          localStorage.clear();
          $rootScope.$broadcast('session', 0);
          $location.path('/');

          }
        })
    
  }

$scope.init();

}])
.directive('ngEnter', function() {
        return function(scope, element, attrs) {
            element.bind("keydown keypress", function(event) {
                if(event.which === 13) {
                    scope.$apply(function(){
                        scope.$eval(attrs.ngEnter, {'event': event});
                    });

                    event.preventDefault();
                }
            });
        };
    });
