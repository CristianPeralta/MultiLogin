import userController from '../controllers/userController';
import Router from '../server/classRouter';
var routes = new Router();

routes.get('/',userController.index);

routes.post('/create',userController.create);
routes.get('/read',userController.read);
routes.put('/update',userController.update);
routes.delete('/delete',userController.delete);


export default routes;
