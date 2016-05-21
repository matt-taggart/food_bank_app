var LocalStrategy = require('passport-local').Strategy;
var User = require('../server/models/user.js');
var bcrypt = require('bcryptjs');

module.exports = function(passport) {

  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  passport.use('register', new LocalStrategy({
    passReqToCallback: true
  }, function(req, username, password, done) {
    User.findOne({ username: username }, function(err, userData) {
      if (err) {
        console.log(err);
        return err;
      }

      if (!userData) {
        var newUser = new User(req.body);

        newUser.save(function(err, userData) {
          if (err) {
            return done(null, false);
          } else {
            return done(false, userData);
          }
        });

      } else {
        return done(null, false);
      }

    });
  }));

  passport.use('login', new LocalStrategy({
    passReqToCallback: true
  }, function(req, username, password, done) {
    User.findOne({ username: username}, function(err, userData) {
      if (err) {
        console.log(err);
        return err;
      }

      if (!userData) {
        console.log(err);
        return done(null, false);
      }

     if (userData) {
      bcrypt.compare(password, userData.password, function(err, user) {
        if (user) {
          return done(null, userData);
        } else {
          return done(null, false);
        }
      });
     }

    });
  }));
};
