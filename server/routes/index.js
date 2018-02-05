var express = require('express');
var router = express.Router();

var ProjectPages = require('./pages/projects');

router.use('/projects', ProjectPages);



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
