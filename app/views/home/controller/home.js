'use strict';

var app = angular.module('app');

app.controller('Home',['mainFactory', '$state','$route','$sce','$scope','$rootScope','$q','$http','$location','$interval','$firebase','$timeout','$stateParams','$routeParams','$window','$document','$mdDialog', function(mainFactory,$state,$route,$sce,$scope,$rootScope,$q,$http,$location,$interval,$firebase,$timeout,$stateParams,$routeParams,$window,$document,$mdDialog) {
$http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
	
	$scope.init = function(){

	  $scope.start()
    $scope.showPractice = 0

	}

$scope.start = function(){

	mainFactory.getPlayers().then(function(data){

	$scope.amsterdamPlayers = data.data[0].WRPlayers
	$scope.dragonsPlayers = data.data[1].WRPlayers
		console.log($scope.dragonsPlayers )
	})


}


$scope.init();

}])
