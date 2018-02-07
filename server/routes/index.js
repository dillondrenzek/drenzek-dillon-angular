var express = require('express');
var router = express.Router();

var HomePage = require('./pages/home');
var ProjectPages = require('./pages/projects');
var AccountPages = require('./pages/accounts');

router.use('/projects',   ProjectPages);
router.use('/accounts',   AccountPages);
router.use('/',           HomePage);

module.exports = router;
