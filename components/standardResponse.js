const standardResponse = (err,data)=>{
	const response = {
		statusCode : err ? (err.statusCode || '700') : '200',
		statusMessage: err ? (err.statusMessage || err.message) : 'Operation was successful'
	}

	if(data){
		response.data = data;
	}
	if(err){
		response.error = [];
		response.error.push({
			code:err.code,
			message:err.message
		})
	}
	return response;
}

module.exports = standardResponse