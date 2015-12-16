// Main Server
// v4.0

var express = require('express'),
	app = express(),
	path = require('path'),
	Projects = require('./db/seed-projects'),
	Skills = require('./db/seed-skills');

// App Port
app.set('port', (process.env.PORT || 8081));

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'jade');

// Public Directories TODO
app.use(express.static(__dirname + '/ng'));
app.use(express.static(__dirname + '/bower_components'));



app.get('/test', function(req, res){
	res.render('test');
});




// API Routes
var api = express();
app.use('/api', api);

// Projects API

// GET projects
api.get('/projects', function(req,res){	

	console.log("GET /projects");

	// TODO: fix with mongoDB v4.1
	res.json(Projects); 
});

// GET Project by permalink
api.get('/projects/:permalink', function(req,res){

	console.log("GET /projects/",req.params.permalink);

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



// Gridrunner Subapp
app.use('/gridrunner/', express.static(__dirname + '/gridrunner/'));

// Catch Mobile Browsers
app.get('/mobile', function(req, res){
	res.render('mobile');
});

// Testing
app.get('/test', function(req, res){
	res.render('test');
});

// GET '/resume'
app.use('/resume', express.static(__dirname + '/pdf/dillon-drenzek-resume.pdf'));

// GET '/'
app.use('/', function(req, res){
	res.render('angular');
});

// App Listen
app.listen(app.get('port'));
console.log("App: Listening on "+app.get('port'));


