var express = require('express');
var router = express.Router();

var AccountController = require('../../controllers/account.controller');


// Map each API to the Controller Functions
router.get('/:id', AccountController.getAccount);
router.get('/', AccountController.listAccounts);
router.post('/', AccountController.createAccount);
// router.put('/', AccountController.updateAccount)
router.delete('/:id',AccountController.removeAccount);


// Export the Router
module.exports = router;
