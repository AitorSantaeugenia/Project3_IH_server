const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const bookingSchema = new Schema({
	hotel: {
		type: String
	},
	checkin: {
		type: Date,
		required: [ true, 'Checkin date is required' ]
	},
	checkout: {
		type: Date,
		required: [ true, 'Checkout date is required' ]
	},
	status: { type: String, required: true, default: 'booked' },
	transactionid: { type: String, required: true },
	roomid: { type: String, required: true },
	userid: { type: String, required: true },
	amount: {
		type: Number,
		required: [ true, 'Total amount is required' ]
	},
	guests: {
		type: Number,
		required: [ true, 'Number of guests is required' ]
	},
	nights: {
		type: Number,
		required: [ true, 'Number of nights is required' ]
	},
	adults: {
		type: Number
	},
	children: {
		type: Number,
		default: 0
	},
	dateCreated: {
		type: Date,
		default: Date.now
	}
});

module.exports = model('Booking', bookingSchema);
