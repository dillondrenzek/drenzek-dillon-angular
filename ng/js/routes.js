angular.module('DrenzekDillon')
.config(function($routeProvider){

	$routeProvider

	// Index Page
	.when('/', {
		templateUrl: '/templates/pages/index.html'
	})



	// PROJECTS

	// List Projects
	.when('/projects', {
		controller: 'ProjectListCtrl',
		templateUrl: '/templates/pages/projects/list.html'
	})

	// Index Projects (just a simple table, later the admin interface)
	.when('/projects/index', {
		controller: 'ProjectListCtrl',
		templateUrl: '/templates/pages/projects/index.html'
	})

	// Create Project
	.when('/projects/create', {
		controller: 'ProjectCreateCtrl',
		templateUrl: '/templates/pages/projects/create.html'
	})

	// Show Project
	.when('/projects/show', {
		controller: 'ProjectShowCtrl',
		templateUrl: '/templates/pages/projects/show.html'
	})

	// Show Project
	.when('/projects/edit', {
		controller: 'ProjectEditCtrl',
		templateUrl: '/templates/pages/projects/edit.html'
	})



	// PROJECTS

	// List Skills
	.when('/skills', {
		controller: 'SkillListCtrl',
		templateUrl: '/templates/pages/skills/list.html'
		
	})

	// Index Skills (just a simple table, later the admin interface)
	.when('/skills/index', {
		controller: 'SkillListCtrl',
		templateUrl: '/templates/pages/skills/index.html'
	})

	// Create Skill
	.when('/skills/create', {
		controller: 'SkillCreateCtrl',
		templateUrl: '/templates/pages/skills/create.html'
	})

	// Show Skill
	.when('/skills/show', {
		controller: 'SkillShowCtrl',
		templateUrl: '/templates/pages/skills/show.html'
	})

	// Show Skill
	.when('/skills/edit', {
		controller: 'SkillEditCtrl',
		templateUrl: '/templates/pages/skills/edit.html'
	})

	

	// 404 NOT FOUND

	// Otherwise
	.otherwise({
		redirectTo: '/'
	});

});