import http from "http";
import url from "url";
import helper from "./helper";


exports.init = function ({host,port}) {
  const server = http.createServer(helper.init).listen(port,host,()=>{
    console.log(`Listening on http://${host}:${port}`);
  })
}
