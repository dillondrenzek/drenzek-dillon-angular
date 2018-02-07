var express = require('express');
var router = express.Router();

var ProjectService = require('../../services/project.service');
var AccountService = require('../../services/account.service');


//
router.get('/', get);

async function get(req, res, next) {

  var context = {
    title: 'Home'
  };

  // Projects
  try {
    var [projects, accounts] = await Promise.all([
        ProjectService.list({}),
        AccountService.list({})
      ]);

    // Add to context
    context = Object.assign(context, {
      projects: projects.docs,
      accounts: accounts.docs
    });

    // Render the page with context
    res.render('index', context);

  } catch (e) {
    console.error(e);
    res.status(400).json({ status: 400, message: e.message });
  }


}

// Export the Router

module.exports = router;
