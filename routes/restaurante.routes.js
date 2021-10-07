const express = require('express');
//require hotel model
const Restaurante = require('../models/Restaurante.model');

const router = express.Router();

//  POST /paginas/restaurante - Create a restaurant
router.post('/paginas/restaurante', (req, res, next) => {
	const { nombre, info, imagen } = req.body;

	Restaurante.create({
		nombre,
		info,
		imagen
	})
		.then((response) => res.json(response))
		.catch((err) => res.json(err));
});

//  GET /paginas/restaurante -  Retrieves all of the resta
router.get('/paginas/restaurante', (req, res, next) => {
	Restaurante.find()
		.then((resta) => {
			res.json(resta);
		})
		.catch((err) => res.json(err));
});

module.exports = router;
