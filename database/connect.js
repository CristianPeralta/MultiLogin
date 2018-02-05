import mongodb from  "mongodb";

const MongoClient = mongodb.MongoClient;

exports.connect =  function (host,port,nameDb) {

  MongoClient.connect("mongodb://"+host+":"+port+"/", function(err, client) {
    if(err)
      throw err;
    console.log("Connected to the mongoDB ! -> mongodb://"+host+":"+port+"/"+nameDb);
    let db = client.db(nameDb);
    global.db = client;
  });

}
