var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var AccountSchema = new mongoose.Schema({
  slug: String,
  title: String,
  url: String,
  faIconClasses: String,
  createdAt: Date,
  modifiedAt: Date
});

AccountSchema.plugin(mongoosePaginate)

const Account = mongoose.model('Account', AccountSchema);

module.exports = Account;
