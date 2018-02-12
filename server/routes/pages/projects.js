var express = require('express');
var router = express.Router();

var ProjectService = require('../../services/project.service');

router.get('/new', new_);

async function new_(req, res, next) {

  try {
    res.render('new', {
      title: 'Project',
      baseUrl: '/api/projects',
      keys: ['title',
        'type',
        'image_src',
        'image_alt',
        'description',
        'url',
        'createdAt',
        'modifiedAt'
      ]
    });
  } catch (e) {
    res.status(400).json({ status: 400, message: e.message });
  }
}

//
router.get('/', get);

async function get(req, res, next) {

  var page = req.query.page || 1;
  var limit = req.query.limit || 10;

  try {
    var projects = await ProjectService.list({}, page, limit);

    res.render('list', {
      title: {
        singular: 'Project',
        plural: 'Projects'
      },
      items: projects.docs,
      item_display: {
        title_key: 'title',
        subtitle_key: 'type',
        keys: ['title',
        'type',
        'image_src',
        'image_alt',
        'description',
        'url',
        'createdAt',
        'modifiedAt']
      }
    });
  } catch (e) {

    res.status(400).json({ status: 400, message: e.message });
  }
}

// Export the Router

module.exports = router;
