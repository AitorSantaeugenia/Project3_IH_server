const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const hotelSchema = new Schema({
	nombre: {
		type: String,
		required: [ true, 'Hotel name is required' ]
	},
	stars: {
		type: Number
	},
	info: String,
	catchPhrase: String,
	catchTwo: String,
	direct: String,
	codigoP: Number,
	telf: String,
	email: String,
	latitud: String,
	altitud: String,
	logo: {
		type: String,
		default: 'https://i.imgur.com/Y9G4UWU.png'
	},
	image: {
		type: String,
		default: 'https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg'
	},
	otherImage: {
		type: String,
		default: 'https://media-cdn.tripadvisor.com/media/photo-s/16/1a/ea/54/hotel-presidente-4s.jpg'
	},
	dateCreated: {
		type: Date,
		default: Date.now
	}
});

module.exports = model('Hotel', hotelSchema);
