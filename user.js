const db = require('./db.js');
const express = require('express');
const router = express.Router();


router.get('/getall', (req, res) =>{
  const collection = db.getDbStatus().collection('users')
  collection.find().toArray((err, docs) => {
  	if(err){
  		throw err;
  	}
    res.send({users: docs})
  });
});

router.post('/login', (req, res) =>{
  const collection = db.getDbStatus().collection('users')
  collection.find(req.body).toArray((err, user) => {
  	if(err){
  		throw err;
  	}
    res.send({users: user})
  });
});

router.post('/register',(req,res) =>{
	const newUser = req.body;
	const collection = db.getDbStatus().collection('users')
	collection.insertOne(newUser,(err,dbRes) => {
		if(err){
			throw err;
		}
		console.log("1 records inserted");
		res.send({user: dbRes})
	});
})

module.exports = router