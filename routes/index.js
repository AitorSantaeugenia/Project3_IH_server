const router = require('express').Router();
const Hotel = require('../models/Hotel.model');
const multer = require('./../config/cloudinary-config');

router.get('/', (req, res, next) => {
	Hotel.find()
		.then((hotel) => {
			res.json(hotel);
			//console.log(hotel);
		})
		.catch((err) => res.json(err));
	//res.json('All good in here');
});

router.post('/upload', multer.single('file'), (req, res) => {
	console.log(req.file.path);

	res.json({ imageUrl: req.file.path });
});

module.exports = router;
