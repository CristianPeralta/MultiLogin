
import userController from '../controllers/userController';
import routes from '../server/helper-router';
import passportFacebook from '../auth/facebook';

routes.get('/',userController.index);
routes.get('/auth/facebook/callback',userController.facebook);
routes.get('/politics',userController.user);
routes.get('/service',userController.user);
routes.get('/auth/facebook', passportFacebook.authenticate('facebook'));

routes.get('/facebook/callback',
  passportFacebook.authenticate('facebook', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

routes.pre('/user',function () {
    routes.get('/',userController.user);
    routes.get('/store/last',userController.store);
    routes.post('/profile',userController.profile);
    routes.put('/edit',userController.edit);

});


exports.default = routes;
