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

$scope.apStat = function(playerid,playerName){

	$scope.routePlayer = playerName
	$scope.amsterdamPlayers.forEach(function(p){
		if(p.nflId === playerid){

			$scope.showStats = 1
			$scope.showTeam1 = 0
			$scope.showTeam2 = 0
			$scope.plays = p.plays
			console.log($scope.plays)
		}
	});	

}

$scope.dpStat = function(playerid,playerName){

	$scope.routePlayer = playerName
	$scope.dragonsPlayers.forEach(function(p){
		if(p.nflId === playerid){

			$scope.showStats = 1
			$scope.showTeam1 = 0
			$scope.showTeam2 = 0

			$scope.plays = p.plays
			console.log($scope.plays)
		}
	});
	console.log(playerid)

}

$scope.back = function(){

	$scope.showStats=0
}

$scope.init();

}])
