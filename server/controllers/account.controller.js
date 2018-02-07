var AccountService = require('../services/account.service');


exports.getAccount = async function (req, res, next) {
    var id = req.params.id;

    try {
        var account = await AccountService.get(id);
        return res.status(200).json({status: 200, data: account, message: 'Success'})
    } catch(e) {
        return res.status(400).json({status: 400., message: e.message})
    }
}

exports.listAccounts = async function (req, res, next) {

  var page = req.query.page || 1;
  var limit = req.query.limit || 10;

  try {
    var accounts = await AccountService.list({}, page, limit);

    return res.status(200).json({ status: 200, data: accounts, message: 'Success' });
  } catch (e) {

    return res.status(400).json({ status: 400, message: e.message });
  }

}


exports.createAccount = async function (req, res, next) {

  console.log('Create Account with body:', req.body);

  var account = {
    title: req.body.title,
    slug: req.body.slug,
    faIconClasses: req.body.faIconClasses,
    url: req.body.url,
  };

  try {
    var savedAccount = await AccountService.create(account);
    return res.status(200).redirect('/');
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}


// no update yet


// remove account
exports.removeAccount = async function(req, res, next){

    var id = req.params.id;
    console.log('Delete Account with id:', id);

    try {
        var deleted = await AccountService.remove(id);

        console.log('Deleted Account:', deleted);
        return res.status(204).json({ status: 204, message: 'Successfully deleted account with id:', id });
    } catch(e) {
      console.error('Error Deleting Account:', e);
        return res.status(400).json({ status: 400, message: e.message });
    }

}
