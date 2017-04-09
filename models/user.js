var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Skills = require('./skill');
var relationship = require("mongoose-relationship");

var userSchema = new Schema({
	name: String,
	age: String,
	skill: [{type: Schema.Types.ObjectId, ref:'Skill'}]
	// available_at: [{type: Schema.Types.ObjectId, ref:'Restaurants'}]
});

var User = mongoose.model('User', userSchema);

module.exports = User;