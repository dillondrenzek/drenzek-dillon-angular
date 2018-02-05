var ProjectService = require('../services/project.service');


exports.listProjects = async function (req, res, next) {

  var page = req.query.page || 1;
  var limit = req.query.limit || 10;

  try {
    var projects = await ProjectService.list({}, page, limit);

    return res.status(200).json({ status: 200, data: projects, message: 'Success' });
  } catch (e) {

    return res.status(400).json({ status: 400, message: e.message });
  }

}


exports.createProject = async function (req, res, next) {

  var project = {
    title: req.body.title,
    type: req.body.type,
    image_src: req.body.image_src,
    image_alt: req.body.image_alt,
    description: req.body.description,
    url: req.body.url,
  };


  try {
    var savedProject = await ProjectService.create(project);
    return res.status(200).json({ status: 200, data: savedProject, message: 'Success' });
  } catch (e) {
    return res.status(400).json({ status: 400, message: e.message });
  }
}


// no update yet


// remove project
exports.removeProject = async function(req, res, next){

    var id = req.params.id;

    try {
        var deleted = await ProjectService.remove(id)
        return res.status(204).json({ status:204, message: 'Success' });
    } catch(e) {
        return res.status(400).json({ status: 400, message: e.message });
    }

}
