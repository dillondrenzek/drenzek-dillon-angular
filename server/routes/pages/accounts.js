var express = require('express');
var router = express.Router();

var AccountService = require('../../services/account.service');


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
