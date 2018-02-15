import path from "path";
import url from "url";
import fs from "fs";
import routes from "./helper-router";
fs.readdirSync('./routes').forEach(file => {
  require('../routes/'+file);
});

var route= {};
exports.init = function () {
  route = routes.route()
}

exports.route = function (pathname,req,res) {

    console.log(req.method+' : '+pathname);

    let folders = ["js","css","uploads","img"];
    let idx = 1;
    let arrPath = pathname.split("/")[1];
    // for (var i = 0; i < arrPath.length; i++) {
    //   if (folders.indexOf(arrPath[i])>=0) {
    //     idx = i;
    //     i = arrPath.length;
    //   }
    // }
    // let resource = arrPath.splice(idx,arrPath.length).join('/');

		if(folders.indexOf(arrPath)>=0) {/////resource.split("/")[0]
            getFile("./public/", pathname, req, res);
        } else {

          let method = req.method;
          if (typeof route[method][pathname] === 'function') {
            return route[method][pathname](req,res);
          }else {
              console.log('404, '+ pathname+' Not Found');
              res.writeHead(404,{'Content-Type':'text/html'});
              res.write('404, '+ pathname+' Not Found',function () {
                return res.end();
              });
          }
        }

}

function getFile(route, pathname, req, res) {
      fs.readFile(route + "" + pathname, function(err, file) {
        if (!file) {
            res.writeHead(404);
            res.end();
            return;
        }
        let ext = path.extname(pathname),
            opts = {};

        let getType = {
          ".js":"text/javascript",
          ".css":"text/css",
          ".jpg":"image/jpeg",
          ".png":"image/png"
        };

        opts["Content-Type"] = getType[ext];
  	    res.writeHead(200,opts);
  	    res.write(file);
  	    res.end();
      });
}
