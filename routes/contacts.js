const express = require('express');
const router = express.Router();

const contactController = require('../controllers/contacts.js');

router.get('/',contactController.getContacts);
router.post('/',contactController.addContacts);
router.get('/getcontact',contactController.getLoggedInUserContact);

module.exports = router