angular.module('DrenzekDillon')
.controller('ProjectListCtrl', [
	'$http',
	'$scope', 
	function($http, $scope){
		return $http({
			method: 'GET',
			url: 'http://localhost:8081/api/projects'
		}).success(function(data){

			console.log('list projects:', data);

			$scope.projects = data;
		});
	}]);