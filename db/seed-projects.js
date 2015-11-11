
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
							primary: "Career Practice in Denmark",
							secondary: "Summer 2015"
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
				// "headerLinks": [
				// 	{
				// 		"href": "http://www.google.com",
				// 		"icon": "fa-google",
				// 		"label": "Google"
				// 	}],

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


	// // Storm Case Study
	// stormCaseStudy: {
	// 	"permalink": "storm-case-study",
	// 	"title": 'Storm Branding & Case Study',
	// 	"type": 'Branding, Website',
	// 	"skills": ['Photoshop', 'Illustrator', 'InDesign', 'HTML/CSS', 'Node.js'],
	// 	"bulletPoints": ['Rebranding of Copenhagen\'s premiere fashion shop', 'Completed Summer of 2015 during study abroad in Denmark', 'Website serves as case study'],
	// 	"imageUrls": ['img/storm.jpg']
	// },

	// // Native
	// native: {
	// 	"permalink": "native",
	// 	"title": 'Native',
	// 	"type": 'iOS App',
	// 	"skills": ['Objective-C', 'Sketch'],
	// 	"bulletPoints": ['I implemented pixel-perfect views from mockups', 'Helped define product requirements','Participated in Techstars Boulder', 'Company still running in CO named Pana']
	// },

	// Capstone Portfolio
	capstonePortfolio: {
		"permalink": "capstone-portfolio",
		"title": 'Capstone Portfolio',
		"type": 'Website',
		"skills": ['Node.js', 'Express.js', 'Neo4j', 'Jade', 'Stylus'],
		"bulletPoints": [
			'Major project in senior Capstone class at CU',
			'Love at first sight with Node.js', 
			'Utilized graph database Neo4j'],
		"imageUrls": ['img/capstone-portfolio-1.jpg'],
		"launchUrl": "http://drenzek-capstone-portfolio.herokuapp.com/",
		"githubUrl": "https://github.com/dillondrenzek/drenzek-capstone-portfolio",
		"sections": [
			{
				type: "three-column",
				title: "Context",
				columns: [{
					title: {
						primary: "Senior Capstone Class",
						secondary: "Spring 2015"
					},
					p: "This was one of four major assignments in my Senior Capstone class for my minor in Technology, Arts & Media. The assignment was to create a Professional Portfolio that you would eventually show to future employers. Low and behold, this assignment somewhat-drastically evolved into the website you're using right now."
				},{
					title: {
						primary: "Ruby Killer"
					},
					p: "This was my first attempt at a server-side website using Node.js. Previously, I had learned basic Ruby on Rails, which was interesting, but ultimately much more difficult for me to understand. That, and I figured RoR was much too large to build a portfolio with. I did try to use Sinatra (a smaller version of RoR), but once I started writing JavaScript, I felt much more at home."
				},{
					title: {
						primary: "Neo4j Graph Database"
					},
					p: "My idea was to use the graph database Neo4j to store the relationships between my projects, the skills I used to create them, the context in which I created them, and when I created them. Much like what I've done with this version of the site. I've since switched this website's database to MongoDB, but I would strongly consider integrating Neo4j as this site gets more sophisticated."
				}]
			},
			{
				type: "two-column",
				title: "Screenshots",
				columns: [
				{
					title: {
						primary: "Skill Home Page",
						secondary: "Right"
					},
					p: "Throughout the website, if you clicked on 'Node.js', this is the page you would be brought to. The yellow tag below the title was a representation of the skill's parent skill. E.g. JavaScript is Node.js parent skill. I listed the projects that were completed with that skill and my relative level of experience or comfort with each skill. It was a number-heavy interface, with a graph to show my progress over time (stubbed out in the green HTML5 Canvas)."
				},
				{
					figure: {
						imgSrc: "img/capstone-portfolio-2.jpg"
					}
				},
				{
					title: {
						primary: "Project Home Page",
						secondary: "Right"
					},
					p: "This page functioned similarly to the Skills homepage. The skills I used to create the project were listed on the right, and there was a description on the left. I never did put up screenshots for Rockabye, but they would have gone in the big black space in the title."
				},
				{
					figure: {
						imgSrc: "img/capstone-portfolio-3.jpg"
					}
				},
				{
					title: {
						primary: "Neo4j Backend GUI",
						secondary: "Right"
					},
					p: "I really enjoyed working with Neo4j. Its queries worked similarly to SQL, but were based in a proprietary language called Cypher. In this picture, the projects are in purple and the skills are in orange. In between two nodes are lines which denote the relationships between the nodes. Between two skills, there is the parent/child skill relationship. Between a skill and a project is the 'used by' relationship."
				},
				{
					figure: {
						imgSrc: "img/capstone-portfolio-4.jpg"
					}
				}]
			}
		]
	}
};


module.exports = projects;