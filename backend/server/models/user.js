const mongoose = require('mongoose');
//var bcrypt = require('bcryptjs');

// User Schema
const UserSchema = mongoose.Schema({
	password: {
		type: String
	},
	email: {
		type: String
	}
});

const User = module.exports = mongoose.model('User', UserSchema);

