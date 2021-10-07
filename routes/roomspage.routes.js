const express = require('express');
//require hotel model
const Rooms = require('../models/Room.model');

const router = express.Router();

//  GET /paginas/habitaciones -  Retrieves all the rooms
router.get('/habitaciones', (req, res, next) => {
	Rooms.find()
		.then((rooms) => {
			res.json(rooms);
			//console.log(rooms);
		})
		.catch((err) => res.json(err));
});

module.exports = router;
