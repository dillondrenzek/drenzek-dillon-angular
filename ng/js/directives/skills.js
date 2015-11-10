angular.module("DrenzekDillon")

.directive('skillSmall', function(){
	return {
		restrict: 'E',
		templateUrl: 'templates/directives/skill-small.html',
		scope: {
			skill: "="
		}
	}
})

.directive('skillMedium', function(){
	return {
		restrict: 'E',
		templateUrl: 'templates/directives/skill-medium.html',
		scope: {
			skill: "="
		}
	}
})

.directive('skillLarge', function(){
	return {
		restrict: 'E',
		templateUrl: 'templates/directives/skill-large.html',
		scope: {
			skill: "="
		}
	}
});

