const express = require('express');
const app = express();
const mockupJson = require("./mockup/mockup.json");
var mongo = require('mongodb');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv').config();
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');
const session = require('express-session');
const passport = require('passport');
const users = require('./routes/users');
const User = require('./models/user');
const content = require('./routes/content');
const flash = require("connect-flash");


// Connection to DB using .env File
mongoose.connect(process.env.DB_URI);
var db = mongoose.connection;

db.once("open", () => {
	console.log("DB Connection established");
});

db.on("error", (err) => {
	console.log(err);
});

// Using Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Using session to create a cookie using passport
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

// Passport Config
require('./config/passport')(passport);
// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Express Validator
app.use(expressValidator({
  errorFormatter: (param, msg, value) => {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));


// Routes
// Main Route

// Route Files
let admin = require('./routes/admin');
let users = require('./routes/users');
app.use('/admin', admin);
app.use('/users', users);

// Server Port
const PORT = process.env.PORT || 4000;
app.listen(PORT,() => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});
