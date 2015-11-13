var express = require('express')
	, path = require('path')
	, Projects = require('./db/seed-projects');

var app = express();


app.set('port', process.env.PORT);


app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/ng'));
app.use(express.static(__dirname + '/bower_components'));


app.get('/mobile', function(req, res){
	res.render('mobile');
});

// API Routes
var api = express();

api.get('/projects', function(req,res){	res.json(
	[
		
		
		Projects['capstonePortfolio'],
		Projects['drenzekDoesDenmark'],
		Projects['storm'],
		Projects['alwaysWondering'],
		Projects['gridrunner'],
		// Projects['native'],
		// Projects['stormCaseStudy']
	]); 

});

// GET Project (by permalink)
api.get('/projects/:permalink', function(req,res){

	// TODO: this will be fixed with MongoDB
	if (req.params.permalink === 'capstone-portfolio') {
		res.json(Projects['capstonePortfolio']); 
	// } else if (req.params.permalink === 'native') {
	// 	res.json(Projects['native']); 
	// } else if (req.params.permalink === 'storm-case-study') {
	// 	res.json(Projects['stormCaseStudy']); 
	} else if (req.params.permalink === 'drenzek-does-denmark') {
		res.json(Projects['drenzekDoesDenmark']); 
	} else if (req.params.permalink === 'storm') {
		res.json(Projects['storm']);
	} else if (req.params.permalink === 'always-wondering') {
		res.json(Projects['alwaysWondering']);
	} else if (req.params.permalink === 'gridrunner') {
		res.json(Projects['gridrunner']);
	}
	
});

api.post('/projects/:id', function(req,res){res.json({}); });
api.put('/projects/:id', function(req,res){res.json({}); });
api.delete('/projects/:id', function(req,res){res.json({}); });

api.get('/skills', function(req,res){
	res.json(
	{
		best: [
			"HTML/CSS", 
			"Photoshop", 
			"Illustrator",
			"JavaScript", 
			"jQuery", 
			"Stylus", 
			"MongoDB", 
			"Node.js", 
			"Angular.js",
			"Objective-C",
		],
		frontEnd: [
			"HTML(5)",
			"CSS(3)",
			"JavaScript",
			"jQuery",
			"Angular.js",
		],
		uiDesign: [
			"Photoshop",
			"Illustrator",
			"Sketch",
			"InDesign",
			"Pencil & Paper"
		],

		backEnd: [
			"Node.js",
			"MongoDB",
			"Express.js",
			"Jade",
			"PHP",
			"SQL",
			"Haml",
			"Ruby on Rails",
		],
		programming: [
			"Objective-C",
			"Swift",
			"C",
			"C++",
			"Python",
			"Java",
			
		],

		workflow: [
			"Git",
			"Stylus",
			"UNIX Terminal",
			"Sass",
			"Gulp.js",
		],

		techConcepts: [
			"Object-Orientation",
			"Model-View-Controller",
			"REST APIs",
			"AJAX"
		]
	}

		); 
});
api.get('/skills/:id', function(req,res){ res.json({}); });
api.post('/skills/:id', function(req,res){res.json({}); });
api.put('/skills/:id', function(req,res){res.json({}); });
api.delete('/skills/:id', function(req,res){res.json({}); });


app.use('/api', api);

app.use('/gridrunner/', express.static(__dirname + '/gridrunner/'));
app.use('/resume', express.static(__dirname + '/pdf/dillon-drenzek-resume.pdf'));

app.use('/', function(req, res){
	res.render('angular');
});


app.listen(app.get('port'));
console.log("App: Listening on "+app.get('port'));