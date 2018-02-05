
import userController from '../controllers/userController';
import routes from '../server/helper-router';

routes.get('/',userController.index);

routes.pre('/user',function () {
    routes.get('/',userController.user);
    routes.get('/store/last',userController.store);
    routes.post('/profile',userController.profile);
    routes.put('/edit',userController.edit);

});


exports.default = routes;
