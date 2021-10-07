const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//Models
const User = require('../models/User.model');

//  GET /dashboard/usuarios -  Retrieves all of the users
router.get('/dashboard/usuarios', (req, res, next) => {
	User.find()
		.then((user) => {
			res.json(user);
			// console.log(user);
		})
		.catch((err) => res.json(err));
});

module.exports = router;
