const db = require('./db.js');
const express = require('express');
const router = express.Router();


router.get('/getall', (req, res) =>{
  const collection = db.getDbStatus().collection('contacts')
  collection.find().toArray((err, docs) => {
  	if(err){
  		throw err;
  	}
    res.send({users: docs})
  });
});

router.post('/add',(req,res) =>{
	const newContact = req.body;
	const collection = db.getDbStatus().collection('contacts')
	const userCollection = db.getDbStatus().collection('users')
	userCollection.findOne({userId:'asaryasv@gmail.com'},(usErr,user) => {
		newContact.userId = user._id;
	collection.insertOne(newContact,(err,dbRes) => {
		if(err){
			throw err;
		}
		console.log("1 records inserted");
		res.send({user: dbRes})
	});
});
})

router.get('/getContacts', (req, res) =>{
  const collection = db.getDbStatus().collection('contacts')
  const userCollection = db.getDbStatus().collection('users')
	userCollection.findOne({userId:'asaryasv@gmail.com'},(usErr,user) => {
  collection.find({userId:user._id}).toArray((err, docs) => {
  	if(err){
  		throw err;
  	}
    res.send({contacts: docs})
  });
});
});

module.exports = router