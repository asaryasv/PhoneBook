const express = require('express');
const router = express.Router();

router.get('/ping',(req,res)=>{
	res.send('Route working fine');
});

module.exports = router;