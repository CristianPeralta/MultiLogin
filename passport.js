var passport = require('passport');
var User = require('./models/user');


module.exports = function() {

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.getOne(id, function (err, user) {
      console.log('deserializeUser : '+user);
      done(err, user);
    });
  });

};
© 2018 GitHub, Inc.
