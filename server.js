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
			"title": 'Capstone Portfolio',
			"type": 'Website',
			"skills": ['Node.js', 'Express.js', 'Neo4j', 'Jade', 'Stylus'],
			"bulletPoints": ['Major project in senior Capstone class at CU',
			'How I fell in love with Node.js & server-side JavaScript', 'Utilized graph database Neo4j'],
			"imageUrls": ['images/capstone-portfolio-1.jpg']
		},{
			"title": 'Native',
			"type": 'iOS App',
			"skills": ['Objective-C', 'Sketch'],
			"bulletPoints": ['I implemented pixel-perfect views from mockups', 'Helped define product requirements','Participated in Techstars Boulder', 'Company still running in CO named Pana']
		},{
			"title": 'Drenzek Does Denmark',
			"type": 'Website',
			"skills": ['Angular.js', 'MongoDB', 'Node.js', 'Express.js', 'Stylus'],
			"bulletPoints": ['Blog I built abroad in Denmark to Practice Angular.js', 'Uses Mongoose to help interface with MongoDB', 'Has an Admin interface with authentication'],
			"imageUrls": ['images/drenzek-does-denmark.png'],
			"launchUrl": 'http://denmark.drenzek.com',
			"githubUrl": 'https://github.com/dillondrenzek/drenzek-does-denmark'
		},{
			"title": 'Storm Branding & Case Study',
			"type": 'Branding, Website',
			"skills": ['Photoshop', 'Illustrator', 'InDesign', 'HTML/CSS', 'Node.js'],
			"bulletPoints": ['Rebranding of Copenhagen\'s premiere fashion shop', 'Completed Summer of 2015 during study abroad in Denmark', 'Website serves as case study'],
			"imageUrls": ['images/storm.jpg']
		}
	]); 

});
api.get('/projects/:id', function(req,res){res.json({}); });
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
api.get('/skills/:id', function(req,res){res.json({}); });
api.post('/skills/:id', function(req,res){res.json({}); });
api.put('/skills/:id', function(req,res){res.json({}); });
api.delete('/skills/:id', function(req,res){res.json({}); });



app.use('/api', api);


app.use('/', function(req, res){
	res.render('angular');
});


app.listen(8081);
console.log("App: Listening on 8081");