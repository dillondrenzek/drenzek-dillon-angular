angular.module("DrenzekDillon")
.directive('ddLink', function(){
	return {
		restrict: 'E',
		templateUrl: 'templates/directives/link.html',
		scope: {
			link: '='
		}
	}
});