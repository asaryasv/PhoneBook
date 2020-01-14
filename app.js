const express = require('express');
const router = require('./router.js');

module.exports = () =>{
	const app = express();
	app.use('/api', router);
	return app
}