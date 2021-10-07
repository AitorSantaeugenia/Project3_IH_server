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

// POST / dashboard / usuarios - DELETE;
router.delete('/dashboard/usuarios/:id', (req, res, next) => {
	const { id } = req.params;
	//console.log(idUser);

	User.findByIdAndRemove(id)
		.then(() => res.json({ message: `User removed successfully.` }))
		.catch((error) => res.json(error));
});

module.exports = router;
