const errors = {
	badRequest: function(code, message){
		this.code = code || 500;
		this.message = message || 'bad request';
		this.name = 'BadRequest'
	}
}

module.exports = errors