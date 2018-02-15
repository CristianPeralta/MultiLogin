import userController from '../controllers/userController';
import Router from '../server/classRouter';
import passportFacebook from '../auth/facebook';

var routes = new Router();

routes.get('/',userController.index);

routes.get('/auth/facebook',
  passportFacebook.authenticate('facebook',{ scope: ['email']}));

routes.get('/auth/facebook/callback',
  passportFacebook.authenticate('facebook', { failureRedirect: '/' }),
  function(req, res) {
    console.log(req.user);
    return res.render('index', {'user':req.user});
  });


routes.post('/create',userController.create);
routes.get('/read',userController.read);
routes.put('/update',userController.update);
routes.delete('/delete',userController.delete);


export default routes;
