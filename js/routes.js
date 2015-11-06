angular.module('DrenzekDillon')
.config(function($routeProvider){

	$routeProvider

	// Index Page
	.when('/', {
		templateUrl: '/templates/pages/index.html'
	})

	// List Projects
	.when('/projects', {
		templateUrl: '/templates/pages/projects/index.html'
	})

	// List Skills
	.when('/skills', {
		templateUrl: '/templates/pages/skills/index.html'
	})

	// Otherwise
	.otherwise({
		redirectTo: '/'
	});

});