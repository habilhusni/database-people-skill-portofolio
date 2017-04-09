var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Users = require('./user');
var relationship = require("mongoose-relationship");

var skillSchema = new Schema({
	name_skill: {type: String, unique: true},
	type_skill: String,
	user: [{type: Schema.Types.ObjectId, ref:'User', childPath: 'skill'}]
	// available_at: [{type: Schema.Types.ObjectId, ref:'Restaurants'}]
});
skillSchema.plugin(relationship, { relationshipPathName:'user' });
var Skill = mongoose.model('Skill', skillSchema);

module.exports = Skill;