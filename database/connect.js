import mongodb from  "mongodb";

const MongoClient = mongodb.MongoClient;


exports.connect =  function () {

  let host   = "127.0.0.1";
  let port   = 27017;
  let nameDb = "MultiLoginDB";

  MongoClient.connect("mongodb://"+host+":"+port+"/"+nameDb, function(err, client) {
    if(err)
      throw err;
    console.log("Connected to the mongoDB ! -> mongodb://"+host+":"+port+"/"+nameDb);
    global.db = client;
  });
}
