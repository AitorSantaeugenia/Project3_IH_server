const express = require('express');
//require hotel model
const Hotel = require('../models/Hotel.model');

const router = express.Router();

//  POST /dashboard - Create a new Hotel
router.post('/dashboard', (req, res, next) => {
	const {
		nombre,
		stars,
		info,
		catchPhrase,
		catchTwo,
		direct,
		codigoP,
		telf,
		email,
		latitud,
		altitud,
		logo,
		image,
		otherImage
	} = req.body;

	Hotel.create({
		nombre,
		stars,
		info,
		catchPhrase,
		catchTwo,
		direct,
		codigoP,
		telf,
		email,
		latitud,
		altitud,
		logo,
		image,
		otherImage
	})
		.then((response) => res.json(response))
		.catch((err) => res.json(err));
});

//  GET /dashboard -  Retrieves all of the hotel
router.get('/dashboard', (req, res, next) => {
	Hotel.find()
		.then((hotel) => {
			res.json(hotel);
			//console.log(tienda);
		})
		.catch((err) => res.json(err));
});

module.exports = router;
