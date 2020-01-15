const express = require('express');
const router = express.Router();

const userController = require('../controllers/users.js');

router.get('/',userController.getUsers);
router.post('/',userController.login);
router.post('/register',userController.register);

module.exports = router