var express = require('express');
var router = express.Router();

var AccountService = require('../../services/account.service');


//
router.get('/:id/edit', edit);

async function edit(req, res, next) {

  var page = req.query.page || 1;
  var limit = req.query.limit || 10;

  try {
    var account = await AccountService.get(req.params['id']);

    res.render('edit', {
      title: account.title,
      subtitle: account.slug,
      baseUrl: '/api/accounts',
      item: account,
      keys: [ 'title', 'slug', 'url', 'faIconClasses', 'createdAt', 'modifiedAt' ]
    });
  } catch (e) {

    res.status(400).json({ status: 400, message: e.message });
  }
}


router.get('/new', new_);

async function new_(req, res, next) {

  try {
    res.render('new', {
      title: 'Account',
      baseUrl: '/api/accounts',
      keys: [ 'title', 'slug', 'url', 'faIconClasses', 'createdAt', 'modifiedAt' ]
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
    var accounts = await AccountService.list({}, page, limit);

    res.render('list', {
      title: {
        singular: 'Account',
        plural: 'Accounts'
      },
      items: accounts.docs,
      item_display: {
        title_key: 'title',
        subtitle_key: 'slug',
        keys: [ '_id', 'title', 'slug', 'url', 'faIconClasses', 'createdAt', 'modifiedAt' ]
      }
    });
  } catch (e) {

    res.status(400).json({ status: 400, message: e.message });
  }
}

// Export the Router

module.exports = router;
