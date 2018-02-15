import mongodb from "mongodb";
import connect from "../database/connect";

const ObjectID = mongodb.ObjectID;
var users;

module.exports.create = (data) => {
  users = global.db.collection("users");
  let {email, name } = data;
  let user = {email, name };
  return new Promise((resolve,reject)=> users.insert(user,(err,result)=>{
      if(err) reject(err);
      resolve(result.ops[0]);
  } ))
};


module.exports.read = (data) => {
  users = global.db.collection("users");
  return new Promise((resolve,reject)=> users.find().toArray((err,result)=>{
      if(err) reject(err);
      resolve(result);
  } ))
};


module.exports.findOne = (data) => {
  users = global.db.collection("users");
  if (data.hasOwnProperty('_id')) {
    data._id = ObjectID(data._id);
  }
  return new Promise((resolve,reject)=> users.findOne(data,(err,result)=>{
      if(err) reject(err);
      resolve(result);
  } ))
};


module.exports.update = (dataFilter,data) => {
  dataFilter._id = ObjectID(dataFilter._id);
  users = global.db.collection("users");
  return new Promise((resolve,reject)=> users.update(dataFilter,data,(err,result)=>{
      if(err) reject(err);
      resolve(result.result);
  } ))
};


module.exports.delete = () => {
  users = global.db.collection("users");
  return new Promise((resolve,reject)=> users.remove((err,result) => {
    if (err) reject(err);
    resolve(result.result);
  }))
};
