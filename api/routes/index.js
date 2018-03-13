var express = require('express');

var router = express.Router();
var projects = require('./api/project.route');
var accounts = require('./api/account.route');


router.use('/projects', projects);
router.use('/accounts', accounts);


module.exports = router;
