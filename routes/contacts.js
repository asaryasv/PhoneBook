const express = require('express');
const router = express.Router();

const contactController = require('../controllers/contacts.js');
const validateLogin = require('../middlewares/authValidation.js');

router.get('/', validateLogin, contactController.getContacts);
router.post('/', validateLogin, contactController.addContacts);
router.get('/getcontact', validateLogin, contactController.getLoggedInUserContact);
router.put('/:id', validateLogin, validateLogin, contactController.updateContact);

module.exports = router