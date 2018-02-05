import pug from 'pug';
import url from 'url';
import path from 'path';
import router from './router';


exports.init = function (req,res) {
  const pathView = path.join(__dirname,'..','views');
  let body = "";
  let pathname = url.parse(req.url).pathname;

  res.render = function (view,data) {
    let newPath= path.join(pathView,view+".pug");
    return pug.renderFile(newPath, data, (err,view) => {
      if (err) {
        console.log(err);
        return res.send(err);
      }
      return res.send(view);
    });
  }

  res.json = function (data) {
    this.writeHead(200,{'Content-Type':'application/json'});
    this.send(JSON.stringify(data));
  }

  res.send = function(file, code ) {
    code = code? code:200;
    if(file){
        this.writeHead(200,{ 'Content-Type': 'text/html' })
        this.write(file);
        this.end();
        return;
    }
    this.writeHead(code,function () {
      this.end();
    });
  }


  if (["POST","PUT"].indexOf(req.method) >= 0) {

      if (req.headers["content-type"].indexOf("multipart/form-data") < 0){
          req.on('data', function (chunk) {
              body += String(chunk);
            });
            req.on('end', function () {
              if(body&& !(body instanceof Object))	req.body = JSON.parse(body);
              router.route(pathname,req,res);
            });
          } else {
            router.route(pathname,req,res);
          }

          return;
    } else {
      req.query = url.parse(req.url,true).query;
      router.route(pathname,req,res);
    }
}
