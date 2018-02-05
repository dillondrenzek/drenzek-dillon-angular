var express = require('express');

var router = express.Router();
var projects = require('./api/project.route');


router.use('/projects', projects);


module.exports = router;
