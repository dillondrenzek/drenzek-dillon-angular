angular.module("DrenzekDillon")
.directive('skillSmall', function(){
	return {
		restrict: 'E',
		templateUrl: 'templates/directives/skill-small.html',
		scope: {
			skill: "="
		}
	}
});