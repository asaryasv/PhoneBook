const db = require('../db.js');
const standardResponse = require('../components/standardResponse.js')
const ObjectId = require('mongodb').ObjectID;
const security = require('../components/validation.js');

const getContacts = (req,res) => {
	const collection = db.getDbStatus().collection('contacts')
  	collection.find().toArray((err, docs) => {
  		if(err){
  			res.status(500).send(standardResponse(err))
  		}
    	res.send(standardResponse(null,docs))
  });
 }

const addContacts = (req,res) => {
	security.validateContact(req).then((isvalid) => {
		if(isvalid) {
			const newContact = req.body;
			const collection = db.getDbStatus().collection('contacts')
			newContact.userId = ObjectId(req.loggedInUser);
			collection.insertOne(newContact,(err,dbRes) => {
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

const getLoggedInUserContact = (req,res) => {
	const collection = db.getDbStatus().collection('contacts')
	const pageSize = (req.query && req.query.pageSize) ? parseInt(req.query.pageSize) : 0;
	const pageNum = (req.query && req.query.pageNum) ? parseInt(req.query.pageNum) : 0;
	const skip = (pageSize && pageNum) ? (pageSize * (pageNum -1)) : 0;
  		collection.find({userId:ObjectId(req.loggedInUser)}).skip(skip).limit(pageSize).toArray((err, docs) => {
  			if(err){
  				res.status(500).send(standardResponse(err))
  			}
    		res.send(standardResponse(null,docs))
  });
}

const updateContact = (req,res)=> {
	const collection = db.getDbStatus().collection('contacts')
	const updateContactId = req.params.id;
	const updatedValue = { $set: req.body };
  		collection.updateOne({_id:ObjectId(updateContactId), userId:ObjectId(req.loggedInUser)},updatedValue,(err, docs) => {
  			if(err){
  				res.status(500).send(standardResponse(err))
  			}
    		res.send(standardResponse(null,docs))
  });
}

module.exports = {getContacts, addContacts, getLoggedInUserContact, updateContact}