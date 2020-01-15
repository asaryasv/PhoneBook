const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const db = require('../db.js');
const standardResponse = require('../components/standardResponse.js');
const errors = require('../components/error.js');
const security = require('../components/validation.js');

const getUsers = (req,res) => {
	const collection = db.getDbStatus().collection('users')
  	collection.find().toArray((err, docs) => {
  		if(err){
  			res.status(500).send(standardResponse(err))
  		}
    	res.send(standardResponse(null,docs))
  });
}

const login = (req,res) => {
  security.validateLogin(req).then((isValid)=> {
    if(isValid) {
    	const collection = db.getDbStatus().collection('users')
      	collection.findOne({emailId: req.body.emailId}, (err, user) => {
      		if(err){
      			res.status(500).send(standardResponse(err))
      		} else {
      			if(user && bcrypt.compareSync(req.body.password, user.password)) {
      				const token = jwt.sign({id: user._id}, req.app.get('secretKey'), { expiresIn: '1h' });
      				user.token = token;
        			res.send(standardResponse(null,user))
        		} else {
        			const errorMessage = new errors.invalidUser();
        			res.status(500).send(standardResponse(errorMessage))
        		}
        	}
      });
    }
  }).catch(error => {
    res.status(500).send(standardResponse(error))
  });
}

const register = (req,res) => {
  security.validateUser(req).then((isValid)=> {
    if(isValid) {
    	const newUser = req.body;
    	newUser.password = bcrypt.hashSync(req.body.password, 10)
    	const collection = db.getDbStatus().collection('users')
    	collection.insertOne(newUser,(err,dbRes) => {
    		if(err){
    			res.status(500).send(standardResponse(err))
    		}
    		console.log("1 records inserted");
    		res.send(standardResponse(null,dbRes))
    	});
    } 
}).catch(error => {
    res.status(500).send(standardResponse(error))
  });
}


module.exports = {getUsers, login, register }