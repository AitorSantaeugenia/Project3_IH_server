const express = require('express');
//require hotel model
const Rooms = require('../models/Room.model');

const router = express.Router();

//  POST /paginas/habitaciones - Create a room
router.post('/paginas/habitaciones', (req, res, next) => {
	const { nombre, tipo, info, maxguests, precio, cantidad, imagen } = req.body;

	Rooms.create({
		nombre,
		tipo,
		info,
		maxguests,
		precio,
		cantidad,
		imagen
	})
		.then((response) => res.json(response))
		.catch((err) => res.json(err));
});

//  GET /paginas/habitaciones -  Retrieves all the rooms
router.get('/paginas/habitaciones', (req, res, next) => {
	Rooms.find()
		.then((rooms) => {
			res.json(rooms);
			//console.log(tienda);
		})
		.catch((err) => res.json(err));
});

module.exports = router;
