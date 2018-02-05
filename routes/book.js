import bookController from '../controllers/bookController';
import routes from '../server/helper-router';

routes.pre('/book',function () {
  routes.get('/index',bookController.index);
  routes.get('/store',bookController.store);
});



exports.default = routes;
