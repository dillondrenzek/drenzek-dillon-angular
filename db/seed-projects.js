// Seed Projects
// v4.0

// TODO: v4.1 - Remove this file by implementing MongoDB


var projects = {

	// Storm
	storm: {
		permalink: 'storm',
		title: 'Storm Design Art Fashion',
		type: 'Company Rebrand',
		skills: ['Photoshop', 'Illustrator', 'InDesign'],
		bulletPoints: [
			'One of Europe\'s most renowned fashion shops',
			'Completed Summer of 2015 while studying abroad in Denmark',
			'Received praise from store\'s owner, local industry professionals'
		],
		imageUrls: [
			'img/storm.jpg'
		],

		links: [
			{
				icon: 'fa-external-link-square',
				label: 'Case Study',
				url: 'http://drenzek-storm-feature.herokuapp.com',
				title: 'Visit the Case Study'
			}
		],


		sections: [
			{
				type: "three-column",
				title: "Overview",
				columns: [
				{
					title: {
						primary: "Foreword"
					},
					p: "Something came over me as I sat in my parent’s kitchen during my fifth and final Thanksgiving break as an undergrad: “I never studied abroad. What the hell have I been thinking?” Looking to correct the opportunity I nearly missed, I immediately started searching programs through my university and found one at the Danish Institute of Study Abroad in Copenhagen, Denmark that advertised a 7-week Graphic Design studio and my heart told me that’s where I’d be going that summer."
				}, 

				{
					figure: {
						imgSrc: "img/storm-copenhagen.jpg",
						imgAlt: "Copenhagen Skyline"
					}
				},

				{
					title: {
						primary: "My First Studio"
					},
					p: "As a Computer Science major, this was my first graphic design studio class. Though I had a little training in graphic design through my minor in Technology, Arts & Media, up to this point, I was almost entirely self-taught. I was pumped to try out my design skills, but even more than that, I relished the opportunity to learn from people who actually knew what they were doing."
				},


				
				]
			},
			{
				type: "three-column",
				title: "Client Background",
				columns:[
				{
					title: {
						primary: "The Man Behind It All"
					},
					p: "The client was the internationally-renowned fashion and lifestyle store, Storm, based in Copenhagen, Denmark. The store was founded in 1994 by Rasmus Storm, who had the vision to provide fashionable accessories and lifestyle items to men. Over time, however, it has evolved into the exhibition of culture it is today."
				}, {
					figure: {
						imgSrc: "img/rasmus.jpg",
						imgAlt: "The owner of Storm, Rasmus Storm"
					}
				},
				{
					title: {
						primary: "Storm's Inspiration"
					},
					p: "When I asked him about what drove his inspiration for the store, he paused thoughtfully and replied, “it is just a feeling. I get a gut feeling about whether or not to include any particular item in my store.” And from that moment, I recognized it was my job to discover that feeling and channel it through my designs."
				}]
			}, {
				type: "three-column",
				title: "Research & Process",
				columns: [
					{
						title: {
							primary: "Finding \"the Feeling\""
						},
						p: "After the meeting with Rasmus, my main goal was to nail down \"the feeling\" he had built his store and its success upon, and since we were only afforded one meeting with Rasmus as a class, I had to get a little creative."
					},
					{
						figure: {
							imgSrc: "img/storm-research.jpg",
							imgAlt: "Standing in front of Storm"
						}
					},
					{
						title: {
							primary: "The Store"
						},
						p: "Throughout the project, I repeatedly visited the store, each time focusing on my emotions as a customer. I found the store to be upscale but never intimidating. The store played loud music and sported a certain musk, but neither were overpowering. It was a sanctuary. A place that seemed to be laid out for each and every customer that walked through the door."
					},

				]
			}, {
				type: "two-column",
				title: "Result",
				columns: [
					// {
					// 	title: {
					// 		primary: "Project Requirements"
					// 	},
					// 	p: "For the studio class, we were to design a new visual identity for the store with a new logo, business card, shopping bag, and bag sticker (used by Storm to close the alternative clear shopping bags). We were also to create a poster and a window sticker that would promote an upcoming event to be held by Storm. And finally, we had to design a shirt to be sold as merchandise in the store."
					// },
					// Logo
					{
						title: {
							primary: "Logo",
							secondary: "Sharp, Personable, Approachable"
						},
						p: "I took inspiration from the stencils street artists use in their artwork to modify things that already exist with their own creative mark (think Banksy). That is effectively what makes Storm valuable, his ability to use items from elsewhere and add them to his creative collection."
					},

					{
						figure: {
							imgSrc: "img/storm-logo.png",
							imgAlt: "Final Logo"
						}
					},

					// Shopping Bag

					{
						title: {
							primary: "Shopping Bag",
							secondary: "Iconic Colors, Crosswalk Symbolism"
						},
						p: "One unique thing about Storm’s current image was his rare use of pink and orange. The colors don’t show up in his store except for in the extremely hot pink and hot orange shopping bags he uses. He explained the choice was a business decision because you can see the bags from a mile away (though he probably said kilometer). I thought that was clever, so I wanted to keep the pink and orange on the bags. My goal was to keep the pink and orange, but introduce another visual element: the stripes from the three crosswalks outside his door."
					}, 

					{
						figure: {
							imgSrc: "img/storm-bag.jpg",
							imgAlt: "Final Shopping Bag"
						}
					},

					// Business Card

					{
						title: {
							primary: "Business Card",
							secondary: "Personable, Memorable"
						},
						p: "Designing business cards is so difficult because first impressions have such an impact. You are essentially handing yourself to someone in the form of a 50x85mm piece of paper and expect them to understand or at least remember who you are. Since this transaction is a chance for a personal connection, I decided to add a little sentiment in the form of a phrase meant to be reminiscent of the closing of a letter \"Keep In Touch, Storm.\""
					},

					{
						figure: {
							imgSrc: "img/storm-card.jpg",
							imgAlt: "Final Business Cards"
						}
					},

					// Bag Sticker

					{
						title: {
							primary: "Bag Sticker",
							secondary: "Personable, Gracious"
						},
						p: "The purpose of the bag sticker is to close a small clear plastic bag that the store gives out for smaller purchases like jewelry or books. I chose to use the same idea as the business card and include a little phrase to emphasize the personal side of a routine business transaction. It is meant to thank the customer for their business and let them know they are appreciated. By adding the sticker to the bag, Storm is saying \"you came to my store and I thank you, take this item with love, and feel welcome back at anytime.\""
					},

					{
						figure: {
							imgSrc: "img/storm-sticker.jpg",
							imgAlt: "Final Bag Sticker"
						}
					},


					// T-Shirt
					{
						title: {
							primary: "T-Shirt",
							secondary: "High-Class, Simple, Well-Stated"
						},
						p: "The shirt was my personal favorite to design. Much of the merchandise in the store comes without many frills. It is often plainly colored with a simple symbol or message on the front, and this shirt would be no exception. However, this shirt is special because from far away, the shirt appears to be plain black, perhaps with five small white dots (the illegible letters) on the front. But as you approach the wearer into their personal range the pattern and text become legible and the shirt comes alive with its quality revealed."
					},

					{
						figure: {
							imgSrc: "img/storm-shirt.jpg",
							imgAlt: "Final T-Shirt"
						}
					},

					// Poster
					{
						title: {
							primary: "Poster",
							secondary: "Spotlights Guest Companies, Memorable"
						},
						p: "Storm was planning an event called “Storm & Family” which would feature 4 Los Angeles-based brands in an exhibition. Since the event was featuring other brands, my main goal was to give each company its time in the spotlight, but still recognize that they were part of the \"family.\" The idea hit me early on to have a model walking down the runway with an article of clothing from each company. Like individual parts becoming a whole, this would give each company their part but they also form Storm’s family."
					},

					{
						figure: {
							imgSrc: "img/storm-poster.jpg",
							imgAlt: "Before & After Poster"
						}
					},

					// Window Sticker
					{
						title: {
							primary: "Window Sticker",
							secondary: "Big, Memorable, Sticky"
						},
						p: "The window sticker came shortly after I got the concept of the event nailed down with the poster. Visually, the ad would have a great impact on someone walking across the street from the store. I could imagine them exclaiming something similar to \"Whoa! What is that man chopped in 4 parts doing on that window?\""
					},

					{
						figure: {
							imgSrc: "img/storm-window.jpg",
							imgAlt: "Final Window Sticker In Context"
						}
					},
				]
			}

		]



	},


	// Cold For Now, But Always Wondering
	alwaysWondering: {
		permalink: 'always-wondering',
		title: 'Cold For Now, But Always Wondering',
		type: 'Artwork',
		skills: ['Photoshop', 'Photography'],
		bulletPoints: [
			'A collage of photographs I took while experimenting with long-exposures',
			'Featured in 2015 CU Honor\'s Journal',
			'I\'m an artist too!'
		],
		imageUrls: [
			'img/always-wondering.jpg'
		],
		links: [
			{
				label: "Behance",
				icon: "fa-behance-square",
				url: "https://www.behance.net/gallery/29680169/Cold-For-Now-Always-Wondering",
				title: "View on Behance"
			}
		],

		sections: [
			{
				"type": "two-column",
				"title": "Context",
				"columns": [
					{
						title: {
							primary: "Cold for now..."
						},
						p: "This piece was a side result of a stop-motion project I did for a class in November of 2013. In the project, I experimented with exposures of 20-30 seconds of the stars from my home outside of Bozeman, Montana. I stood out in the sub-zero weather for nearly 3 hours pressing the trigger on my camera every 20-30 seconds. I was cold - no doubt - but as I held my hot chocolate in my heavily-gloved hand, my mind wandered up to the heavens I was photographing."
					},

					{
						title: {
							primary: "...but always wondering."
						},
						p: "Ever since I was a kid, my dad - who was a science & astronomy teacher for over a dozen years - would provoke my mind with thoughts about space, the earth, and what the hell the Universe actually is. Thanks to him, thinking has become one of my favorite pastimes, and space is one of my favorite subjects. "
					}
				]
			},

			{
				type: "two-column",
				title: "2015 CU Honor's Journal",
				columns: [
					{
						title: {
							primary: "On advice from a friend"
						},
						p: "Later in February of 2014, I sat at my computer messing around in Photoshop like I love to do. Using a few of the images from that night the previous November, I compiled this collage. It is one of my favorite pieces I've ever come up with. Then, on the advice from a good friend of mine, Hailey Badovinac, I submitted this piece to the Honor's journal at the University of Colorado. I didn't think too much of it, but it became one of the featured pieces in 2015. Do any of the images in the picture look familiar?"
					},
					{
						figure: {
							imgSrc: "img/always-wondering-proof.jpg",
							imgAlt: "My piece on the advertisement for the Honor's Journal release event"
						}
					}
				]
			}
		]

	},

	// Gridrunner
	gridrunner: {
		permalink: 'gridrunner',
		title: 'Gridrunner',
		type: 'HTML5 Canvas Game',
		skills: ['HTML5', 'jQuery', 'JavaScript'],
		bulletPoints: [
			'Digital Media 2 Team Project',
			'Object-oriented JavaScript at its finest'
		],
		imageUrls: [
			'img/gridrunner.png'
		],
		links: [{
			label: "GitHub",
			icon: "fa-github-square",
			url: "https://github.com/dillondrenzek/dm2-team-project",
			title: "View on GitHub"
		}, 
		// {
		// 	label: "Play Game",
		// 	icon: "fa-caret-square-o-right",
		// 	url: "http://dillon.drenzek.com/gridrunner/index.html",
		// 	title: "Play Gridrunner"
		// }
		],
		sections: [
			{
				type: "two-column",
				title: "Overview",
				columns: [
					{
						title: {
							primary: "Digital Media 2 Team Project"
						},
						p: "This was a team project I completed with my friend Logan McCaul as part of our Digital Media 2 class in the Technology, Arts & Media program at CU. Logan came up with the concept of the game, the layout of each of the puzzles, and I was proud to implement the game in a way that would allow for players to create custom puzzles later on. I figured out a lot of Object-Oriented Programming paradigms on my own, and it was this project that really jump-started my passion for programming. Give the game a shot, it was a huge hit with our class!"
					},
					{
						figure: {
							imgSrc:"img/gridrunner-screen1.jpg",
							imgAlt:"Gridrunner Gameplay"
						}
					}
				]
			}
		]
	},

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
		"links": [
			{
				label: "Launch",
				icon: "fa-external-link-square",
				url: "http://denmark.drenzek.com",
				title: "Launch Project"
			},
			{
				label: "GitHub",
				icon: "fa-github-square",
				url: "https://github.com/dillondrenzek/drenzek-does-denmark",
				title: "View on GitHub",
			},
		],

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
			'Utilized graph database Neo4j'
		],
		"imageUrls": ['img/capstone-portfolio-1.jpg'],

		"links": [
			// {
			// 	label: "Launch",
			// 	icon: "fa-external-link-square",
			// 	url: "http://drenzek-capstone-portfolio.herokuapp.com/",
			// 	title: "Launch Project"
			// },
			{
				label: "GitHub",
				icon: "fa-github-square",
				url: "https://github.com/dillondrenzek/drenzek-capstone-portfolio",
				title: "View on GitHub",
			},
		],

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