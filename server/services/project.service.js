const Project = require('../models/project.model'),
  { Page } = require('../util/index');

_this = this;

// get project
exports.get = async function (id) {
  try {
      var project = await Project.findById(id);
      return project;
  } catch(e) {
      throw Error("Error occured while Finding the Todo")
  }
}

// list projects
exports.list = async function(query, page, limit) {

  page = page || 1;
  limit = limit || 10;

  var params = {
    page,
    limit
  };

  try {
    var projects = await Project.paginate(query, params);

    return projects;
  } catch (e) {
    throw Error('Error listing Projects');
  }

}


// create project
exports.create = async function (project) {

  console.log('Creating Project:', project);

  var newProject = new Project({
    title: project.title,
    type: project.type,
    image_src: project.image_src,
    image_alt: project.image_alt,
    description: project.description,
    url: project.url,
    createdAt: new Date(),
    modifiedAt: new Date()
  });

  try {
    var savedProject = await newProject.save();
    return savedProject;
  } catch (e) {
    throw Error('Error creating Project: ' + e);
  }
}


// update project
exports.update = async function (project) {
  var id = project.id;

  try {
    var oldProject = await Project.findById(id);
  } catch (e) {
    throw Error('Error updating Project');
  }

  if (!oldProject) {
    return false;
  }

  console.log('Updating project:', oldProject);

  // update project
  Object.assign(oldProject, project);


  try {
    var savedProject = await oldProject.save();
    return savedProject;
  } catch (e) {
    throw Error('Error saving updated Project');
  }
};


// delete project
exports.remove = async function (id) {

  // Delete the Todo
    try{
        var deleted = await Project.remove({_id: id});
        if(deleted.result.n === 0){
            throw Error("Project could not be deleted");
        }
        return deleted;
    } catch(e) {
        throw Error("Error Occured while Deleting the Project" + e);
    }

};
