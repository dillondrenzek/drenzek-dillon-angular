// v4.0.2

angular.module('DrenzekDillon')
.controller('HomepageCtrl', [
	'$http',
	'$scope',
	function($http, $scope){
		// Get Projects
		$http({
			method: 'GET',
			url: '/api/projects/'
		}).success(function(data){
			$scope.projects = data;
		}).error(function(err){
			console.error('error:', err);
		});

		// Get Skills
		$http({
			method: 'GET',
			url: '/api/skills/'
		}).success(function(data){
			$scope.skills = data;
		}).error(function(err){
			console.error('error:', err);
		});
}]);