var express = require('express');
var router = express.Router();

var ProjectController = require('../../controllers/project.controller');


// Map each API to the Controller Functions
router.get('/:id', ProjectController.getProject);
router.get('/', ProjectController.listProjects);
router.post('/', ProjectController.createProject);
router.put('/', ProjectController.updateProject);
router.delete('/:id',ProjectController.removeProject);


// Export the Router

module.exports = router;
