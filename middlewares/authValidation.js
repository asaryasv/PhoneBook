const jwt = require('jsonwebtoken');

const errors = require('../components/error.js')
const standardResponse = require('../components/standardResponse.js');

const validateLogin = (req,res,next) => {
	jwt.verify(req.headers['x-access-token'], req.app.get('secretKey'), function(err, decoded) {
    	if (err) {
      		res.status(500).send(standardResponse(err))
    	} else{
      		req.loggedInUser = decoded.id;
      		next();
    	}
  	});
}

module.exports = validateLogin