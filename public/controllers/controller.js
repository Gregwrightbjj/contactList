var myApp = angular.module("myApp", [])

.controller("AppCtrl", ["$scope", "$http", function($scope, $http){
	console.log("Hello World from controller");

	$http.get("/contactList").success(function(response){
		console.log("I go the data I requested")
		$scope.contactList = response;
	})
	
	
}]);