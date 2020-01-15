const errors = {
	badRequest: function(code, message){
		this.code = code || 500;
		this.message = message || 'bad request';
		this.name = 'BadRequest'
	},
	invalidUser: function(code, message){
		this.code = code || 500;
		this.message = message || 'Invalid emailid/password ';
		this.name = 'Invalid User'
	},
}

module.exports = errors