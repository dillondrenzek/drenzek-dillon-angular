"use strict";

const express = require('express'),
  path = require('path'),
  pug = require('pug'),
  app = express();


// App Port
app.set('port', (process.env.PORT || 8085));


// HTML Templates with Pug
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'pug');

app.use('/static', express.static(__dirname + '/static'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));

app.get('/', function (req, res) {
  res.render('index');
});



app.listen(app.get('port'), function () {
  console.log('App listening on port', app.get('port'));
});






// Get Meta App info
// app.use('/meta', metaApi);

// // Static files
// app.use('/node_modules', express.static(__dirname + '/node_modules'));
// app.use('/static', express.static(__dirname + '/src/static'));
// // app.use('/src/app',       express.static(__dirname + '/src/app'));
// app.use('/app', express.static(__dirname + '/src/app'));
// app.use('/systemjs-angular-loader.js', express.static(__dirname + '/src/app/systemjs-angular-loader.js'));
// // app.use('/app',           express.static(__dirname + '/public/app'));
// app.get('/*', function (req, res) {
//     res.sendFile(__dirname + '/src/app/index.html');
// });
// // App Listen
// app.listen(app.get('port'), function () {
//     console.log("App: Listening on " + app.get('port'));
// });
// // // Main Server
// // // v4.0.2
// //
// // var express = require('express'),
// // 	app = express(),
// // 	path = require('path'),
// // 	Projects = require('./db/seed-projects'),
// // 	Skills = require('./db/seed-skills');
// //
// //
// //
// // //-----------
// // // App Setup
// // //-----------
// //
// // // App Port
// // app.set('port', (process.env.PORT || 8081));
// //

// //
// // // Public Directories
// // app.use(express.static(__dirname + '/ng-deprecated'));
// // app.use(express.static(__dirname + '/bower_components'));
// //
// //
// //
// // //------------
// // // API Routes
// // //------------
// //
// // var api = express();
// // app.use('/api', api);
// //
// // // Projects API
// //
// // // GET projects
// // api.get('/projects', function(req,res){
// // 	// TODO: fix with mongoDB v4.1
// // 	res.json([
// // 		Projects['capstonePortfolio'],
// // 		Projects['drenzekDoesDenmark'],
// // 		Projects['storm'],
// // 		Projects['gridrunner'],
// // 		Projects['leFaux'],
// // 		Projects['tam'],
// // 		// Projects['wordpressPortfolio'],
// // 		// Projects['alwaysWondering'],
// // 	]);
// // });
// //
// // // GET Project by permalink
// // api.get('/projects/:permalink', function(req,res){
// //
// // 	// TODO: v4.1 - fix with mongoDB
// // 	if (req.params.permalink === 'capstone-portfolio') {
// // 		res.json(Projects['capstonePortfolio']);
// // 	} else if (req.params.permalink === 'drenzek-does-denmark') {
// // 		res.json(Projects['drenzekDoesDenmark']);
// // 	} else if (req.params.permalink === 'storm') {
// // 		res.json(Projects['storm']);
// // 	} else if (req.params.permalink === 'always-wondering') {
// // 		res.json(Projects['alwaysWondering']);
// // 	} else if (req.params.permalink === 'gridrunner') {
// // 		res.json(Projects['gridrunner']);
// // 	}
// //
// // });
// //
// // // TODO: v4.1 - Projects Model CRUD operations
// // // api.post('/projects/:id', function(req,res){res.json({}); });
// // // api.put('/projects/:id', function(req,res){res.json({}); });
// // // api.delete('/projects/:id', function(req,res){res.json({}); });
// //
// //
// //
// // // Skills API
// //
// // // GET skills
// // api.get('/skills', function(req,res){
// // 	// TODO: v4.1 - Skills Model w/ MongoDB
// // 	res.json(Skills);
// // });
// //
// // // TODO: Implement Skill Model CRUD Operations
// // // api.get('/skills/:id', function(req,res){res.json({});});
// // // api.post('/skills/:id', function(req,res){res.json({});});
// // // api.put('/skills/:id', function(req,res){res.json({});});
// // // api.delete('/skills/:id', function(req,res){res.json({});});
// //
// //
// //
// // //--------------------
// // // Static Directories
// // //--------------------
// //
// // var staticHTMLPath = '/static/html';
// //
// // // Gridrunner
// // app.use('/gridrunner', express.static(__dirname + staticHTMLPath + '/gridrunner'));
// //
// // // TAM Portal
// // app.use('/tam', express.static(__dirname + staticHTMLPath + '/tam-portal'));
// //
// // // Le Faux Désign Compagnie
// // app.use('/le-faux', express.static(__dirname + staticHTMLPath + '/faux-company'));
// //
// // // GET '/resume'
// // app.use('/resume', express.static(__dirname + '/static/pdf/dillon-drenzek-resume.pdf'));
// //
// //
// //
// // // GET '/'
// // app.use('/', function(req, res){
// // 	res.render('angular');
// // });
// //
// // // App Listen
// // app.listen(app.get('port'));
// // console.log("App: Listening on "+app.get('port'));
// //# sourceMappingURL=server.js.map
