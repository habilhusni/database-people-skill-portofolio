'use strict'
var express = require('express');
var router = express.Router();
var Users = require('../models/user');

let getUsers = (req, res) => {

	// Users.find(function (err, users) {
 //  		if (err) return console.error(err);
 //  		res.send(users);
	// })

	Users.find()
	.populate('skill', ['name_skill', 'type_skill'])
	.exec(function (err, instances) {
		if (err) res.send(err);
		else res.send(instances);
	})

}

let getOneUser = (req, res) => {

	Users.findOne(
		{ 
			name: req.params.name 
		},
		function (err, user) {
  		if (err) return handleError(err);
  		res.send(user);
		})

}

let createUsers = (req, res) => {

	let user = new Users(
		{ 
			name: req.body.name, 
			age: req.body.age,
			skill: req.body.skill_id
		});

	user.save(function (err) {
  	if (err) return console.error(err);
	});

	res.send(user);

}

let delUsers = (req, res) => {
	
	Users.remove(
		{
			name: req.body.name
		},
		function(err) {
			if(err) return handleError(err);
		}
	);

	res.send('User Removed!')
}

let updateUsers = (req, res) => {

	Users.findOneAndUpdate(
		{
			name: req.body.oldName
		},
		{
			name: req.body.name,
			age: req.body.age,
			skill: req.body.skill
		},
		function(err) {
			if(err) return handleError(err);
		}
	);

	res.send('User Updated')

}

module.exports = {
	getUsers,
	getOneUser,
	createUsers,
	delUsers,
	updateUsers
}