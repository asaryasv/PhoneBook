const errors = require('./error.js')
const db = require('../db.js');

const validateLogin = (req) => new Promise(function(resolve,reject){
	if(req.body && req.body.emailId && req.body.password){
		resolve(true)
	} else {
		reject(new errors.badRequest())
	}
})

const validateUser = (req) => new Promise(function(resolve,reject){
	if(req.body && req.body.emailId && req.body.password && req.body.fname && req.body.lname){
		if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(req.body.emailId)) {
			isUserExist(req.body.emailId).then((exist)=> {
				if(exist){
					reject(new errors.invalidEmailId())
				}else {
					resolve(true)
				}
			});			
		} else {
			reject(new errors.invalidEmailId())
		}
	} else {
		reject(new errors.badRequest())
	}
})

 const isUserExist = (emailId) => new Promise(function(resolve,reject){
  	const collection = db.getDbStatus().collection('users')
     collection.findOne({emailId:emailId},(err, docs) => {
      if(docs){
        resolve(true)
      } else {
      resolve(false);
  }
  });
 });

 const validateContact = (req)=> new Promise(function(resolve,reject){
	if(req.body && req.body.emailId && req.body.fname && req.body.lname && req.body.address && req.body.contactnumbers){
		resolve(true)
	} else {
		reject(new errors.badRequest())
	}
})


module.exports = {validateLogin, validateUser, validateContact}