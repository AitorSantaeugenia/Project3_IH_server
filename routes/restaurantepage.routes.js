const express = require('express');
//require hotel model
const Restaurante = require('../models/Restaurante.model');

const router = express.Router();

//  GET /paginas/habitaciones -  Retrieves all the rooms
router.get('/restaurante', (req, res, next) => {
	Restaurante.find()
		.then((restaurante) => {
			res.json(restaurante);
			//console.log(restaurante);
		})
		.catch((err) => res.json(err));
});

module.exports = router;
