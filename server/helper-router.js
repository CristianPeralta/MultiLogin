import path from 'path';
import router from './router';

var _get= {};
var _post= {};
var _put= {};
var _delete= {};
var files = {};
var prefix = '';
var routes = {
  'GET': _get,
  'POST':_post,
  'PUT':_put,
  'DELETE': _delete
};

function get(path,cb) {
    _get[path] = cb;
}
function post(path,cb) {
    _post[path] = cb;
}
function put(path,cb) {
    _put[path] = cb;
}
function remove (path,cb) {
    _delete[path] = cb;
}

module.exports = {
  use(pre,obj) {

      if (pre != '/') {
        prefix  = pre;
      }
      for (let method in obj.route) {
        for (let path in obj.route[method]) {
          let fullPath = prefix+path;
          let bindFunction = obj.route[method][path];
          switch (method) {
            case 'GET':get(fullPath,bindFunction);break;
            case 'POST':post(fullPath,bindFunction);break;
            case 'PUT':put(fullPath,bindFunction);break;
            case 'DELETE':remove(fullPath,bindFunction);break;
            default:

          }
          //console.log(method+' : '+pre+path+' : '+obj.route[method]);
        }
      }
      prefix = '';
      router.init();
  },
  route (){
    return {
    'GET': _get,
    'POST':_post,
    'PUT':_put,
    'DELETE':_delete
    }
  }
}
