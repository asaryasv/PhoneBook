const  MongoClient = require('mongodb').MongoClient;
let dbStatus ={
  db:null
}
 
// Connection URL 
var url = 'mongodb://localhost:27017/phoneBook';

/*MongoClient.connect(url, function(err, mongodb) {

  if(err){
    throw err;
  } else {
  console.log("datebase connection established");
}


   
});*/
connect = (url, done)=>{
  if (dbStatus.db) return done()

  MongoClient.connect(url,{ useUnifiedTopology: true, useNewUrlParser: true}, (err, mongodb)=> {

  if(err){
    return done(err)
  } else {
  dbStatus.db = mongodb;
  done();
}
});
}

getDbStatus = ()=> {
  return dbStatus.db;
}

closeDbConnection = (done)=>{
if (dbStatus.db) {
    dbStatus.db.close((err, result) => {
      dbStatus.db = null
      dbStatus.mode = null
      done(err)
    })
  }
}

module.exports = {connect, getDbStatus, closeDbConnection}