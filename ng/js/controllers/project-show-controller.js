// v4.0.2

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
			$scope.project = data;
		}).error(function(err){
			console.error("error GET project:", err);
		});
	}]);