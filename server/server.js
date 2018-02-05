import http from "http";
import url from "url";
import helper from "./helper";


exports.init = function (port,hostname) {
  const server = http.createServer(helper.init).listen(port,hostname,()=>{
    console.log(`Listening on http://${hostname}:${port}`);
  })
}
