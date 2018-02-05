import http from "http";
import url from "url";
import passport from "passport";
import passfacebook from "passport-facebook";
import helper from "./helper";


exports.init = function (port,hostname) {
  passport.initialize();
  passport.session();
  const server = http.createServer(helper.init).listen(port,hostname,()=>{
    console.log(`Listening on http://${hostname}:${port}`);
  })
}
