const errors = require('./errors.js')

const invalidInput = (req)=> new Promise(function(resolve,reject){
	if(1){
		resolve(true)
	} else {
		reject(new errors.badRequest())
	}
})

module.exports = {invalidInput}