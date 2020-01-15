const db = require('../db.js');
const standardResponse = require('../components/standardResponse.js')

const getUsers = (req,res) => {
	const collection = db.getDbStatus().collection('users')
  	collection.find().toArray((err, docs) => {
  		if(err){
  			res.status(500).send(sendResponse(err))
  		}
    	res.send(standardResponse(null,docs))
  });
}

const login = (req,res) => {
	const collection = db.getDbStatus().collection('users')
  	collection.find(req.body).toArray((err, user) => {
  		if(err){
  			res.status(500).send(sendResponse(err))
  		}
    	res.send(standardResponse(null,user))
  });
}

const register = (req,res) => {
	const newUser = req.body;
	const collection = db.getDbStatus().collection('users')
	collection.insertOne(newUser,(err,dbRes) => {
		if(err){
			res.status(500).send(sendResponse(err))
		}
		console.log("1 records inserted");
		res.send(standardResponse(null,dbRes))
	});
}

module.exports = {getUsers, login, register }