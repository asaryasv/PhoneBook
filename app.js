const express = require('express');
const bodyParser = require('body-parser');

const router = require('./router.js');
const user = require('./user.js');
const contacts = require('./contacts.js');

module.exports = () =>{
	const app = express();
	app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
	app.use('/api', router);
	app.use('/users', user);
	app.use('/contacts', contacts);
	return app
}