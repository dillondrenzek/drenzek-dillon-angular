angular.module('DrenzekDillon')
.controller('ProjectShowCtrl', [
	'$http',
	'$scope',
	'$routeParams',
	function($http, $scope, $routeParams){
		return $http({
			method: 'GET',
			url: '/api/projects/'+$routeParams.permalink
		}).success(function(data){
			console.log("retrieved project",data);
			$scope.project = data;
		}).error(function(err){
			console.error("error:", err);
		});
	}]);