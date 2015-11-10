
var projects = {

	// Drenzek Does Denmark
	drenzekDoesDenmark: {
		"permalink": 'drenzek-does-denmark',
		"title": 'Drenzek Does Denmark',
		"type": 'Website',
		"skills": ['Angular.js', 'MongoDB', 'Node.js', 'Express.js', 'Stylus'],
		"bulletPoints": [
			'Travel Blog built to practice MEAN Stack', 
			'Built during study abroad trip to Denmark', 
			'Has an Admin interface with authentication'
		],
		"imageUrls": [
			'img/drenzek-does-denmark.png'
		],
		"launchUrl": 'http://denmark.drenzek.com',
		"githubUrl": 'https://github.com/dillondrenzek/drenzek-does-denmark',
		"sections": [
			{
				"type": "two-column",
				"title": "Context",
				"columns": [
					{
						title: {
							primary: "Career Practice in Denmark"
						},
						p: "I built this blog while I was studying abroad in Copenhagen, Denmark during the Summer of 2015. My goal was to keep my relatives up-to-date with what I was doing while at the same time practicing a skill I knew I wanted to use in my career."
					}, {
						title: {
							primary: "A Travel Blog Built with MEAN Stack"
						},
						p: "The front-end is built with Angular.js using the state-oriented angular-ui-router. The site is hosted on Heroku with Node.js serving and API from an instance of MongoDB on the back end. The MEAN stack at its finest. In fact, this was my first brush with the term 'MEAN' stack. It certainly won't be my last."
					}
				]
			},
			{
				"type": "two-column",
				"title": "Details",
				"headerLinks": [
					{
						"href": "http://www.google.com",
						"icon": "fa-google",
						"label": "Google"
					}],

				"columns": [
					{
						title: {
							primary: "Admin Interface",
							secondary: "Login Authentication"
						},
						p: "I've done authentication before using Ruby on Rails, but I'm still pretty new to how it works. Luckily, I found a great tutorial that helped me figure out how to do it in Node using a few modules: Passport, crypto, and jsonwebtoken (to save sessions)."
					}, {
						figure: {
							imgSrc: "img/drenzek-does-denmark-login.png"
						}
					},
					{
						title: {
							secondary: "Protected CRUD Operations"
						},
						p: "When login was built out, the trick was then to put the Create, Update, and Delete functionality behind an authentication wall. On login and logout, the authentication token is saved and destroyed, respectively. Then, on each protected operation inside of Angular, I simply checked for the presence of the token. After that, it was just a matter of using the ngShow and ngHide directives to show/hide UI elements based on the result of the isLoggedIn() function. Fun stuff!"
					}, 
					{
						figure: {
							imgSrc: "img/drenzek-does-denmark-admin.png"
						}
					}
				]
			}
		]
	},


	// Storm Case Study
	stormCaseStudy: {
		"permalink": "storm-case-study",
		"title": 'Storm Branding & Case Study',
		"type": 'Branding, Website',
		"skills": ['Photoshop', 'Illustrator', 'InDesign', 'HTML/CSS', 'Node.js'],
		"bulletPoints": ['Rebranding of Copenhagen\'s premiere fashion shop', 'Completed Summer of 2015 during study abroad in Denmark', 'Website serves as case study'],
		"imageUrls": ['img/storm.jpg']
	},

	// Native
	native: {
		"permalink": "native",
		"title": 'Native',
		"type": 'iOS App',
		"skills": ['Objective-C', 'Sketch'],
		"bulletPoints": ['I implemented pixel-perfect views from mockups', 'Helped define product requirements','Participated in Techstars Boulder', 'Company still running in CO named Pana']
	},

	// Capstone Portfolio
	capstonePortfolio: {
		"permalink": "capstone-portfolio",
		"title": 'Capstone Portfolio',
		"type": 'Website',
		"skills": ['Node.js', 'Express.js', 'Neo4j', 'Jade', 'Stylus'],
		"bulletPoints": [
			'Major project in senior Capstone class at CU',
			'How I fell in love with Node.js & server-side JavaScript', 
			'Utilized graph database Neo4j'],
		"imageUrls": ['img/capstone-portfolio-1.jpg'],
		"sections": [
			{
				type: "three-column",
				title: "Context",
				columns: [{},{},{}]
			},
			{
				type: "three-column",
				title: "Details",
				columns: [{},{},{}]
			}
		]
	}
};


module.exports = projects;