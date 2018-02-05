var passport = require('passport')
  , FacebookStrategy = require('passport-facebook').Strategy;
var User = require('../models/User');

passport.use(new FacebookStrategy({
    clientID: "703238480065028",
    clientSecret: "77795a9efd3aceaed76ab7f811402706",
    callbackURL: "http://127.0.0.1:3000/auth/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    console.log(profile);

    User.findOne({provider_id: profile.id}).then((result)=>{
      console.log(result);
    })


  }
));

module.exports = passport;
