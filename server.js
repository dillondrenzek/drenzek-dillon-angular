var express = require('express')
	, path = require('path');

var app = express();

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/ng'));
app.use(express.static(__dirname + '/bower_components'));


// API Routes
var api = express();

api.get('/projects', function(req,res){	res.json(
	[
		{
			"permalink": "capstone-portfolio",
			"title": 'Capstone Portfolio',
			"type": 'Website',
			"skills": ['Node.js', 'Express.js', 'Neo4j', 'Jade', 'Stylus'],
			"bulletPoints": ['Major project in senior Capstone class at CU',
			'How I fell in love with Node.js & server-side JavaScript', 'Utilized graph database Neo4j'],
			"imageUrls": ['img/capstone-portfolio-1.jpg']
		},{
			"permalink": "native",
			"title": 'Native',
			"type": 'iOS App',
			"skills": ['Objective-C', 'Sketch'],
			"bulletPoints": ['I implemented pixel-perfect views from mockups', 'Helped define product requirements','Participated in Techstars Boulder', 'Company still running in CO named Pana']
		},{
			"permalink": "drenzek-does-denmark",
			"title": 'Drenzek Does Denmark',
			"type": 'Website',
			"skills": ['Angular.js', 'MongoDB', 'Node.js', 'Express.js', 'Stylus'],
			"bulletPoints": ['Blog I built abroad in Denmark to Practice Angular.js', 'Uses Mongoose to help interface with MongoDB', 'Has an Admin interface with authentication'],
			"imageUrls": ['img/drenzek-does-denmark.png'],
			"launchUrl": 'http://denmark.drenzek.com',
			"githubUrl": 'https://github.com/dillondrenzek/drenzek-does-denmark'
		},{
			"permalink": "storm-case-study",
			"title": 'Storm Branding & Case Study',
			"type": 'Branding, Website',
			"skills": ['Photoshop', 'Illustrator', 'InDesign', 'HTML/CSS', 'Node.js'],
			"bulletPoints": ['Rebranding of Copenhagen\'s premiere fashion shop', 'Completed Summer of 2015 during study abroad in Denmark', 'Website serves as case study'],
			"imageUrls": ['img/storm.jpg']
		}
	]); 

});

// GET Project (by permalink)
api.get('/projects/:permalink', function(req,res){

	// TODO: this will be fixed with MongoDB
	if (req.params.permalink === 'capstone-portfolio') {
		res.json({
			"permalink": "capstone-portfolio",
			"title": 'Capstone Portfolio',
			"type": 'Website',
			"skills": ['Node.js', 'Express.js', 'Neo4j', 'Jade', 'Stylus'],
			"bulletPoints": ['Major project in senior Capstone class at CU',
			'How I fell in love with Node.js & server-side JavaScript', 'Utilized graph database Neo4j'],
			"imageUrls": ['img/capstone-portfolio-1.jpg']
		}); 
	} else if (req.params.permalink === 'native') {
		res.json({
			"permalink": "native",
			"title": 'Native',
			"type": 'iOS App',
			"skills": ['Objective-C', 'Sketch'],
			"bulletPoints": ['I implemented pixel-perfect views from mockups', 'Helped define product requirements','Participated in Techstars Boulder', 'Company still running in CO named Pana']
		}); 
	} else if (req.params.permalink === 'storm-case-study') {
		res.json({
			"permalink": "storm-case-study",
			"title": 'Storm Branding & Case Study',
			"type": 'Branding, Website',
			"skills": ['Photoshop', 'Illustrator', 'InDesign', 'HTML/CSS', 'Node.js'],
			"bulletPoints": ['Rebranding of Copenhagen\'s premiere fashion shop', 'Completed Summer of 2015 during study abroad in Denmark', 'Website serves as case study'],
			"imageUrls": ['img/storm.jpg']
		}); 
	} else if (req.params.permalink === 'drenzek-does-denmark') {
		res.json({
			"permalink": "drenzek-does-denmark",
			"title": 'Drenzek Does Denmark',
			"type": 'Website',
			"skills": ['Angular.js', 'MongoDB', 'Node.js', 'Express.js', 'Stylus'],
			"bulletPoints": ['Blog I built abroad in Denmark to Practice Angular.js', 'Uses Mongoose to help interface with MongoDB', 'Has an Admin interface with authentication'],
			"imageUrls": ['img/drenzek-does-denmark.png'],
			"launchUrl": 'http://denmark.drenzek.com',
			"githubUrl": 'https://github.com/dillondrenzek/drenzek-does-denmark'
		}); 
	} 
	
});

api.post('/projects/:id', function(req,res){res.json({}); });
api.put('/projects/:id', function(req,res){res.json({}); });
api.delete('/projects/:id', function(req,res){res.json({}); });

api.get('/skills', function(req,res){
	res.json([
		"HTML/CSS", 
		"JavaScript", 
		"jQuery", 
		"Stylus", 
		"MongoDB", 
		"Node.js", 
		"Angular.js", 
		"Photoshop", 
		"Illustrator", 
		"Sketch", 
		"InDesign",
		"programming",
		"Objective-C", 
		"C/C++", 
		"Python"
		]); 
});
api.get('/skills/:id', function(req,res){ res.json({}); });
api.post('/skills/:id', function(req,res){res.json({}); });
api.put('/skills/:id', function(req,res){res.json({}); });
api.delete('/skills/:id', function(req,res){res.json({}); });


app.use('/api', api);

app.get('/resume', function(req, res){
	res.send('resume.pdf');
})

app.use('/', function(req, res){
	res.render('angular');
});


app.listen(8081);
console.log("App: Listening on 8081");