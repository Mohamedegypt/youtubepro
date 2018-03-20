const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const userFunctions = require('../routes/users');

module.exports = (passport) => {
    passport.use(new LocalStrategy({
      usernameField: "email",
      passwordField: "password"
      }, (username, password, done) => {
       userFunctions.getUserByEmail(username, (err, user) => {
         console.log("email from passport function" + username);
        if(err){ return done(err)}
         // res.json({message: 'error from login'})
        if(!username){
          // res.json({message: 'Email does not exist'})
          return done(null, false, {message: 'Email does not exist'});
        }

        userFunctions.comparePassword(password, user.password, (err, isMatch) => {
          if(err) { return done(err)}
          if(isMatch){
            return done(null, user);
          } else {
            return done(null, false, {message: 'Invalid password'});
          }
        });
       });
      }));

    passport.serializeUser((user, done) => {
      done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
      userFunctions.getUserById(id, (err, user) => {
        done(err, user);
      });
    });
}