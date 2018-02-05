var express = require('express');
var router = express.Router();

var ProjectService = require('../../services/project.service');


//
router.get('/', get);

async function get(req, res, next) {

  var page = req.query.page || 1;
  var limit = req.query.limit || 10;

  try {
    var projects = await ProjectService.list({}, page, limit);

    res.render('list-projects', {
      title: 'List Projects',
      projects
    });
  } catch (e) {

    res.status(400).json({ status: 400, message: e.message });
  }
}

// Export the Router

module.exports = router;
