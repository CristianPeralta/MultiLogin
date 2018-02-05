
import path from 'path';

var get= {};
var post= {};
var put= {};
var files = {};
var prefix = '';

module.exports = {
  get(path,cb) {
    return get[prefix+path] = cb;
  },
  pre(path,obj) {
      if (path != '/') {
        prefix = path;
      }
      let allfunction = obj();
      prefix = '';
  },
  post (path,cb){
    return post[prefix+path] = cb;
  },
  put (path,cb){
    return put[prefix+path] = cb;
  },
  route :{
      'GET':get,
      'POST':post,
      'PUT':put
  }
}
