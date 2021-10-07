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

// DELETE / /paginas/restaurante/:id / tienda - DELETE;
router.delete('/paginas/tienda/:id', (req, res, next) => {
	const { id } = req.params;
	//console.log(id);

	Tienda.findByIdAndRemove(id)
		.then(() => res.json({ message: `Tienda removed successfully.` }))
		.catch((error) => res.json(error));
});

module.exports = router;
