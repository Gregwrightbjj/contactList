var myApp = angular.module("myApp", [])

.controller("AppCtrl", ["$scope", "$http", function($scope, $http){
	console.log("Hello World from controller");
}]);