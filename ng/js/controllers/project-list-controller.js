// v4.0.2

angular.module('DrenzekDillon')
.controller('ProjectListCtrl', [
	'$http',
	'$scope', 
	function($http, $scope){
		return $http({
			method: 'GET',
			url: '/api/projects'
		}).success(function(data){
			$scope.projects = data;
		}).error(function(err){
			console.error('error GET Projects:', err);
		});
	}]);