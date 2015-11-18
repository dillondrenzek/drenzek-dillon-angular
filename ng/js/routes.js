// Angular Routes
// v4.0

angular.module('DrenzekDillon')
.config(function($routeProvider){

	$routeProvider

	// Index Page
	.when('/', {
		controller: 'HomepageCtrl',
		templateUrl: '/templates/pages/index.html'
	})



	// PROJECTS
	// Index Projects
	.when('/projects/index', {
		controller: 'ProjectListCtrl',
		templateUrl: '/templates/pages/projects/index.html'
	})
	
	// Show Project
	.when('/projects/:permalink', {
		controller: 'ProjectShowCtrl',
		templateUrl: '/templates/pages/projects/show.html'
	})

	



	// SKILLS
	// Index Skills
	.when('/skills/index', {
		controller: 'SkillListCtrl',
		templateUrl: '/templates/pages/skills/index.html'
	})

	

	// 404 NOT FOUND

	// Otherwise
	.otherwise({
		redirectTo: '/'
	});

});