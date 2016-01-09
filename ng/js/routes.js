// Angular Routes
// v4.0.2

angular.module('DrenzekDillon')
.config(function($routeProvider, $locationProvider){

	$routeProvider

	// Index Page
	.when('/', {
		controller: 'HomepageCtrl',
		templateUrl: '/templates/pages/index.html'
	})



	// PROJECTS
	// Show Project
	.when('/projects/:permalink', {
		controller: 'ProjectShowCtrl',
		templateUrl: '/templates/pages/projects/show.html'
	});

	// TODO: Implement
	// Index Projects
	// .when('/projects/index', {
	// 	controller: 'ProjectListCtrl',
	// 	templateUrl: '/templates/pages/projects/index.html'
	// })


	// TODO: Implement
	// SKILLS
	// Index Skills
	// .when('/skills/index', {
	// 	controller: 'SkillListCtrl',
	// 	templateUrl: '/templates/pages/skills/index.html'
	// });

	
	// TODO: Implement
	// 404 NOT FOUND
	// .otherwise({
	// 	redirectTo: '/'
	// });

	$locationProvider.html5Mode(true);

});