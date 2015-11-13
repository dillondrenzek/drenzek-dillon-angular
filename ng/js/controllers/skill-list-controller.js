angular.module('DrenzekDillon')
.controller('SkillListCtrl', [
	'$http',
	'$scope', 
	function($http, $scope){
		return $http({
			method: 'GET',
			url: '/api/skills'
		}).success(function(data){
			$scope.skills = data;
		}).error(function(err){
			console.error('error GET skills:', err);
		});
	}]);