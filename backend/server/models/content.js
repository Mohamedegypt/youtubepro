const mongoose = require('mongoose');
//var bcrypt = require('bcryptjs');

// User Schema
const ContentSchema = mongoose.Schema({
	type: String,
	title: String,
	description: String,
	displayDate: Date,
	expiryDate: Date,
	content: Array
});

const Content = module.exports = mongoose.model('Content', ContentSchema);
