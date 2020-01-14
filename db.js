const  MongoClient = require('mongodb').MongoClient;
let dbStatus ={
  db:null
}
 
connect = (url, done)=>{
  if (dbStatus.db) return done()

  MongoClient.connect(url,{ useUnifiedTopology: true, useNewUrlParser: true}, (err, mongodb)=> {
    const db = mongodb.db('phoneBook')

  if(err){
    return done(err)
  } else {
  dbStatus.db = db;
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