const Account = require('../models/account.model');

_this = this;

// get account
exports.get = async function (id) {
  try {
      var account = await Account.findById(id);
      return account;
  } catch(e) {
      throw Error("Error occured while Finding the Todo")
  }
}

// list accounts
exports.list = async function(query, page, limit) {

  page = page || 1;
  limit = limit || 10;

  var params = {
    page,
    limit
  };

  try {
    var accounts = await Account.paginate(query, params);

    return accounts;
  } catch (e) {
    throw Error('Error listing Accounts');
  }

}


// create account
exports.create = async function (account) {

  console.log('Creating Account:', account);

  var newAccount = new Account({
    slug: account.slug,
    title: account.title,
    url: account.url,
    faIconClasses: account.faIconClasses,
    createdAt: new Date(),
    modifiedAt: new Date()
  });

  try {
    var savedAccount = await newAccount.save();
    return savedAccount;
  } catch (e) {
    throw Error('Error creating Account: ' + e);
  }
}


// update account
exports.update = async function (account) {
  var id = account.id;

  try {
    var oldAccount = await Account.findById(id);
  } catch (e) {
    throw Error('Error updating Account');
  }

  if (!oldAccount) {
    return false;
  }

  console.log('Updating account:', oldAccount);

  // update account
  Object.assign(oldAccount, account);


  try {
    var savedAccount = await oldAccount.save();
    return savedAccount;
  } catch (e) {
    throw Error('Error saving updated Account');
  }
};


// delete account
exports.remove = async function (id) {

  // Delete the Todo
    try{
        var deleted = await Account.remove({_id: id});
        if(deleted.result && deleted.result.n === 0){
            throw Error("Account could not be deleted");
        }
        return deleted;
    } catch(e) {
        throw Error("Error Occured while Deleting the Account" + e);
    }

};
