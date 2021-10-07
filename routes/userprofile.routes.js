const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

//Models
const User = require('../models/User.model');

//  GET /dashboard/usuarios -  Retrieves all of the users
router.get('/perfil', (req, res, next) => {
	User.findById('615c10fe277e803579a4df1e')
		.then((user) => {
			res.json(user);
			// console.log(user);
		})
		.catch((err) => res.json(err));
});

module.exports = router;
