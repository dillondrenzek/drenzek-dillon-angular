angular.module('DrenzekDillon')
.controller('SkillListCtrl', [
	'$http',
	'$scope', 
	function($http, $scope){
		return $http({
			method: 'GET',
			url: 'http://localhost:8081/api/skills'
		}).success(function(data){

			console.log('list skills:', data);

			$scope.skills = data;
		}).error(function(err){
			console.error('error:', err);
		});
	}]);