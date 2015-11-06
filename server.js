var express = require('express')
	, path = require('path');

var app = express();

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'jade');
app.use(express.static(__dirname + '/ng'));
app.use(express.static(__dirname + '/bower_components'));

app.use('/', function(req, res){
	res.render('angular');
});


app.listen(8081);
console.log("App: Listening on 8081");