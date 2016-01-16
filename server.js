// Main Server
// v4.0.2

var express = require('express'),
	app = express(),
	path = require('path'),
	Projects = require('./db/seed-projects'),
	Skills = require('./db/seed-skills');



//-----------
// App Setup 
//-----------

// App Port
app.set('port', (process.env.PORT || 8081));

// HTML Templates with Jade
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'jade');

// Public Directories
app.use(express.static(__dirname + '/ng'));
app.use(express.static(__dirname + '/bower_components'));



//------------
// API Routes 
//------------

var api = express();
app.use('/api', api);

// Projects API

// GET projects
api.get('/projects', function(req,res){	
	// TODO: fix with mongoDB v4.1
	res.json([
		Projects['capstonePortfolio'],
		Projects['drenzekDoesDenmark'],
		Projects['storm'],
		Projects['gridrunner'],
		Projects['leFaux'],
		Projects['tam'],
		// Projects['wordpressPortfolio'],
		// Projects['alwaysWondering'],
	]); 
});

// GET Project by permalink
api.get('/projects/:permalink', function(req,res){

	// TODO: v4.1 - fix with mongoDB 
	if (req.params.permalink === 'capstone-portfolio') {
		res.json(Projects['capstonePortfolio']);
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

// TODO: v4.1 - Projects Model CRUD operations
// api.post('/projects/:id', function(req,res){res.json({}); });
// api.put('/projects/:id', function(req,res){res.json({}); });
// api.delete('/projects/:id', function(req,res){res.json({}); });



// Skills API

// GET skills
api.get('/skills', function(req,res){
	// TODO: v4.1 - Skills Model w/ MongoDB
	res.json(Skills); 
});

// TODO: Implement Skill Model CRUD Operations
// api.get('/skills/:id', function(req,res){res.json({});});
// api.post('/skills/:id', function(req,res){res.json({});});
// api.put('/skills/:id', function(req,res){res.json({});});
// api.delete('/skills/:id', function(req,res){res.json({});});



//--------------------
// Static Directories 
//--------------------

var staticHTMLPath = '/static/html';

// Gridrunner
app.use('/gridrunner', express.static(__dirname + staticHTMLPath + '/gridrunner'));

// TAM Portal
app.use('/tam', express.static(__dirname + staticHTMLPath + '/tam-portal'));

// Le Faux Désign Compagnie
app.use('/le-faux', express.static(__dirname + staticHTMLPath + '/faux-company'));

// GET '/resume'
app.use('/resume', express.static(__dirname + '/static/pdf/dillon-drenzek-resume.pdf'));



// GET '/'
app.use('/', function(req, res){
	res.render('angular');
});

// App Listen
app.listen(app.get('port'));
console.log("App: Listening on "+app.get('port'));


