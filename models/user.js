
import bcrypt from "bcrypt";
import mongodb from "mongodb";
const MongoClient = mongodb.MongoClient;

const ObjectID = mongodb.ObjectID;

module.exports.login = (data) => {
  const users = global.db.collection("users");
  return users.findOne({ email: data.email }).then((user) => {
    if(!user) throw "No existe el usuario";
    const checked = bcrypt.compareSync(data.password, user.password);
    if(checked) return user;
    throw "Contraseña incorrecta";
  })
};

module.exports.register = (data) => {
  const users = global.db.collection("users");
  const hash = bcrypt.hashSync(data.password, 8);
  let { _id, email, password, name, lastname, phone } = data;
  let user = { _id, email, password, name, lastname, phone };
  return new Promise((resolve,reject)=> users.insert(user,resolve))
              .then((err,result)=>{
                  if(err) throw err;
                  return result;
              });
};

module.exports.findOne = (data) => {
  MongoClient.connect("mongodb://"+host+":"+port+"/"+nameDb, function(err, client) {
    if(err)
      throw err;
    global.db = client;
    let users = client.collection("users");
    return users.findOne(data);
  });
};




module.exports.getOne = (id,callback) => {
  const users = global.db.collection("users");
  const objectId = new ObjectID(id);
  return new Promise((resolve,reject) => users.findOne({ _id:objectId }))
    .then((err,res) =>{
      callback(err,res);
    });
}
