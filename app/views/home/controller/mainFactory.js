'use strict';
//auth service
app.factory('mainFactory',['$rootScope','$location','$firebase','$firebaseObject','$firebaseArray','$firebaseAuth','$timeout','$q','$http', function ($rootScope,$location,$firebase,$firebaseObject,$firebaseArray,$firebaseAuth,$timeout,$q,$http) { 

var info = {}

info.stats = function(){

	return	$http.get('https://raw.githubusercontent.com/CClerville/nflhackathon-prosworld/a75e2de96706e87370c4fd07c2ca0c3853c14e2d/hack.data.json')

}

info.getStats = function(playerid){

	var run = info.stats(playerid);

	var deferred = $q.defer()
	deferred.resolve(run)

	return deferred.promise
}

info.players = function(){

	return	$http.get('https://raw.githubusercontent.com/CClerville/nflhackathon-prosworld/a75e2de96706e87370c4fd07c2ca0c3853c14e2d/hack.data.json')

}

info.getPlayers = function(){

	var run = info.players();

	var deferred = $q.defer()
	deferred.resolve(run)

	return deferred.promise
}

return info;

 }])

