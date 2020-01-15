const db = require('../db.js');
const standardResponse = require('../components/standardResponse.js')

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
	userCollection.findOne({userId:'asaryasv@gmail.com'},(usErr,user) => {
		newContact.userId = user._id;
	collection.insertOne(newContact,(err,dbRes) => {
		if(err){
			res.status(500).send(sendResponse(err))
		}
		console.log("1 records inserted");
		res.send(standardResponse(null,dbRes))
	});
});
}

const getLoggedInUserContact = (req,res) => {
	const collection = db.getDbStatus().collection('contacts')
  	const userCollection = db.getDbStatus().collection('users')
	userCollection.findOne({userId:'asaryasv@gmail.com'},(usErr,user) => {
  		collection.find({userId:user._id}).toArray((err, docs) => {
  			if(err){
  				res.status(500).send(sendResponse(err))
  			}
    		res.send(standardResponse(null,docs))
  });
});
}

module.exports = {getContacts, addContacts, getLoggedInUserContact}