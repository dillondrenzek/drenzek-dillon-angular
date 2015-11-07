var express = require('express')
	, path = require('path');

var app = express();

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/ng'));
app.use(express.static(__dirname + '/bower_components'));


// API Routes
var api = express();

api.get('/projects', function(req,res){res.json({}); });
api.get('/projects/:id', function(req,res){res.json({}); });
api.post('/projects/:id', function(req,res){res.json({}); });
api.put('/projects/:id', function(req,res){res.json({}); });
api.delete('/projects/:id', function(req,res){res.json({}); });

api.get('/skills', function(req,res){res.json({}); });
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