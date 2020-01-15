const db = require('../db.js');
const standardResponse = require('../components/standardResponse.js')
const ObjectId = require('mongodb').ObjectID;

const getContacts = (req,res) => {
	const collection = db.getDbStatus().collection('contacts')
  	collection.find().toArray((err, docs) => {
  		if(err){
  			res.status(500).send(sendResponse(err))
  		}
    	res.send(standardResponse(null,docs))
  });
 }

const addContacts = (req,res) => {
	const newContact = req.body;
	const collection = db.getDbStatus().collection('contacts')
	const userCollection = db.getDbStatus().collection('users')
	newContact.userId = ObjectId(req.loggedInUser);
	collection.insertOne(newContact,(err,dbRes) => {
		if(err){
			res.status(500).send(sendResponse(err))
		}
		console.log("1 records inserted");
		res.send(standardResponse(null,dbRes))
	});
}

const getLoggedInUserContact = (req,res) => {
	const collection = db.getDbStatus().collection('contacts')
  	const userCollection = db.getDbStatus().collection('users')
  		collection.find({userId:ObjectId(req.loggedInUser)}).toArray((err, docs) => {
  			if(err){
  				res.status(500).send(sendResponse(err))
  			}
    		res.send(standardResponse(null,docs))
  });
}

module.exports = {getContacts, addContacts, getLoggedInUserContact}