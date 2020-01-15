const express = require('express');
const bodyParser = require('body-parser');

const router = require('./routes/router.js');
const user = require('./routes/user.js');
const contacts = require('./routes/contacts.js');

module.exports = () =>{
	const app = express();
	app.set('secretKey','ApHoneBoKSERtCwe');
	app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
	app.use('/api', router);
	app.use('/users', user);
	app.use('/contacts', contacts);
	return app
}