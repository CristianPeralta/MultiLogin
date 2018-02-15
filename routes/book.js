import bookController from '../controllers/bookController';
import Router from '../server/classRouter';
var routes = new Router();

  routes.get('/index/js',bookController.index);
  routes.get('/storeB',bookController.store);
  routes.post('/storeB',bookController.store);
  routes.put('/storeB',bookController.store);

export default routes;
