import server from "../server/server";
import db from "../database/connect";
import routes from '../server/helper-router';
import cfg from '../config';
import index from '../routes/index';
import book from '../routes/book';

db.connect(cfg.db);

server.init(cfg.server);

routes.use('/', index);

routes.use('/book', book);
