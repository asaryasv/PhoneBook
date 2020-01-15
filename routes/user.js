const express = require('express');
const router = express.Router();

const userController = require('../controllers/users.js');
const validateLogin = require('../middlewares/authValidation.js');

router.get('/', validateLogin, userController.getUsers);
router.post('/login',userController.login);
router.post('/register',userController.register);

module.exports = router