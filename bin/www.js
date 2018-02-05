import server from "../server/server";
import db from "../database/connect";

const port = 3000;
const hostname = "0.0.0.0";

db.connect();

server.init(port,hostname);
