var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var ProjectSchema = new mongoose.Schema({
  title: String,
  type: String,
  image_src: String,
  image_alt: String,
  description: String,
  url: String,
  createdAt: Date,
  modifiedAt: Date
});

ProjectSchema.plugin(mongoosePaginate)

const Project = mongoose.model('Project', ProjectSchema);

module.exports = Project;
