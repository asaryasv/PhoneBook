const errors = {
	badRequest: function(code, message){
		this.code = code || 500;
		this.message = message || 'any one of the required parameter missing';
		this.name = 'BadRequest'
	},
	invalidEmailId: function(code, message){
		this.code = code || 500;
		this.message = message || 'email id alreday exist/not proper';
		this.name = 'Invalid'
	},
	invalidUser: function(code, message){
		this.code = code || 500;
		this.message = message || 'Invalid emailid/password ';
		this.name = 'Invalid User'
	},
}

module.exports = errors