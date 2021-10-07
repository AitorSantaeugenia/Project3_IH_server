const express = require('express');
//require hotel model
const Tienda = require('../models/Tienda.model');

const router = express.Router();

//  GET /paginas/habitaciones -  Retrieves all the rooms
router.get('/tienda', (req, res, next) => {
	Tienda.find()
		.then((tienda) => {
			res.json(tienda);
			//console.log(restaurante);
		})
		.catch((err) => res.json(err));
});

module.exports = router;
