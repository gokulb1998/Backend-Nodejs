var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://Gokulb1998:evz54180827@mydb98-jvqcp.mongodb.net/test?retryWrites=true&w=majority";

MongoClient.connect(url,{useUnifiedTopology: true},function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});