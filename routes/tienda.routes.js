const express = require('express');
//require hotel model
const Tienda = require('../models/Tienda.model');

const router = express.Router();

//  POST /paginas/tienda - Create a shop
router.post('/paginas/tienda', (req, res, next) => {
	const { nombre, info, imagen } = req.body;

	Tienda.create({
		nombre,
		info,
		imagen
	})
		.then((response) => res.json(response))
		.catch((err) => res.json(err));
});

//  GET /paginas/tienda -  Retrieves all of the shops
router.get('/paginas/tienda', (req, res, next) => {
	Tienda.find()
		.then((tienda) => {
			res.json(tienda);
			//console.log(tienda);
		})
		.catch((err) => res.json(err));
});

module.exports = router;
