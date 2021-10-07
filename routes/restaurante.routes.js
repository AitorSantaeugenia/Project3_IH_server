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

// POST /paginas/restaurante/:id / restaurante - DELETE;
router.delete('/paginas/restaurante/:id', (req, res, next) => {
	const { id } = req.params;
	//console.log(id);

	Restaurante.findByIdAndRemove(id)
		.then(() => res.json({ message: `Restaurante removed successfully.` }))
		.catch((error) => res.json(error));
});

module.exports = router;
