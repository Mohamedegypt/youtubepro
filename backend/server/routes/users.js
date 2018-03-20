const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../models/user');
const bcrypt = require('bcryptjs');#

// Creating a Hash
const hashPassword = (newUser, callback) => {
  bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
          newUser.password = hash;
          newUser.save(callback);
      });
  });
}

// Query to DB for Email Adress
exports.getUserByEmail = (email, callback) => {
  const query = {email: email};
  User.findOne(query, callback);
} 

// Query to DB for ID Adress
exports.getUserById = (id, callback) => {
   User.findById(id, callback);
}

// Comparing the Password
exports.comparePassword = (candidatePassword, hash, callback) => {
  bcrypt.compare(candidatePassword, hash,  (err, isMatch) => {
      if(err) throw err;
      callback(null, isMatch);
  });
}


exports.login =  (req, res)  => {
  res.json({'success': 'You are on the login page'});
};


// Register and creating new user route
router.get('/register', (req, res) => {
  res.json({'success': 'You are on the registration page'});
});

router.post('/register', (req, res)  => {
  const email = req.body.email;
  const password = req.body.password;
  // Validation with expressValidator
  const errors = req.validationErrors();
  if(errors){
    res.send('register',{
      errors: errors
    });
  } else {
    var newUser = new User({
      email:email,
      password: password
    });

    hashPassword(newUser, (err, user) => {
      if(err) {
        return res.json({'err': err});
      }
    });

    res.json({'success': 'You are registered and can now login'});
  }
});


// Login
router.get('/login',  (req, res)  => {
  res.json({'success': 'You are on the login page'});
});

router.post('/login',
  passport.authenticate('local', {
    successRedirect:'/', 
    failureRedirect:'/login',
    failureFlash: "Login failed! Please type correct email and password!"}),
  (req, res) => {
    res.json({'success': 'You are logged into the admin panel!'});
 });

// Lougout
router.get('/logout', (req, res)  => {
  req.logout();
  res.json({'success': 'You are logged out'});
});