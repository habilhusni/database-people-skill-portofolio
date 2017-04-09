'use strict'
var express = require('express');
var router = express.Router();
var Skills = require('../models/skill');
var relationship = require("mongoose-relationship");

let getSkills = (req, res) => {

	// Skills.find(function (err, skills) {
 //  		if (err) return console.error(err);
 //  		res.send(skills);
	// })

	Skills.find()
	.populate('user')
	.exec(function (err, instances) {
		if (err) res.send(err);
		else res.send(instances);
	})

	// Wisata.find()
 //  .populate('kota',['kota_id','kota_name'])
 //  .exec(function (err, instances) {
 //    if (err) res.send(err);
 //    else res.send(instances);
 //  })

}

let getOneSkill = (req, res) => {

	Skills.findOne(
		{ 
			name_skill: req.params.name_skill 
		},
		function (err, skill) {
  		if (err) return handleError(err);
  		res.send(skill);
		})

}

let createSkills = (req, res) => {

	let skill = new Skills(
		{ 
			name_skill: req.body.name_skill, 
			type_skill: req.body.type_skill,
			user: req.body.user
		});

	skill.save(function (err) {
  	if (err) return console.error(err);
	});

	res.send(skill);

}

let delSkills = (req, res) => {
	
	Skills.remove(
		{
			name_skill: req.body.name_skill
		},
		function(err) {
			if(err) return handleError(err);
		}
	);

	res.send('Skill Removed!')
}

let updateSkills = (req, res) => {

	Skills.findOneAndUpdate(
		{
			name_skill: req.body.oldName
		},
		{
			name_skill: req.body.name_skill,
			type_skill: req.body.type_skill
		},
		function(err) {
			if(err) return handleError(err);
		}
	);

	res.send('Skill Updated')

}

module.exports = {
	getSkills,
	getOneSkill,
	createSkills,
	delSkills,
	updateSkills
}