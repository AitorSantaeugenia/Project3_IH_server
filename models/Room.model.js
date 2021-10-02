const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const roomSchema = new Schema({
	hotel: {
		type: String
	},
	number: {
		type: String,
		required: [ true, 'Room number is required' ]
	},
	name: {
		type: String,
		required: [ true, 'Room name is required' ]
	},
	type: {
		type: String,
		required: [ true, 'Please specify room type' ]
	},
	phonenumber: {
		type: Number,
		required: true
	},
	price: {
		type: Number,
		required: [ true, 'Please specify price per night' ]
	},
	maxGuests: {
		type: Number,
		required: [ true, 'Please specify maximum number of guests allowed' ]
	},
	imageurls: [],
	currentbookings: [],
	dateCreated: {
		type: Date,
		default: Date.now
	}
});

module.exports = model('Room', roomSchema);
