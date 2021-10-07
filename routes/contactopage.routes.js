const express = require('express');
//require hotel model
const Hotel = require('../models/Hotel.model');

const router = express.Router();

// //  GET / -  Retrieves all from the Hotel
router.get('/contacto', (req, res, next) => {
	Hotel.find()
		.then((hotel) => {
			res.json(hotel);
		})
		.catch((err) => res.json(err));
});

module.exports = router;
