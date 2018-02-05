var express = require('express');
var router = express.Router();

var ProjectPages = require('./pages/projects');
var AccountPages = require('./pages/accounts');

router.use('/projects', ProjectPages);
router.use('/accounts', AccountPages);



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
