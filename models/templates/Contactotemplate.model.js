const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const hotelSchema = new Schema({
	name: {
		type: String,
		required: [ true, 'Hotel name is required' ]
	},
	stars: {
		type: Number
	},
	manager: String,
	description: String,
	numberRooms: Number,
	dateCreated: {
		type: Date,
		default: Date.now
	},
	address: String,
	rooms: [ { type: Schema.Types.ObjectId, ref: 'Room' } ]
	//tasks: [ { type: Schema.Types.ObjectId, ref: 'Task' } ]
	// owner will be added later on
});

module.exports = model('Hotel', hotelSchema);
