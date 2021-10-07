const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const roomSchema = new Schema({
	nombre: {
		type: String
	},
	tipo: {
		type: String
	},
	info: {
		type: String
	},
	maxguests: {
		type: Number
	},
	precio: {
		type: Number
	},
	cantidad: {
		type: Number
	},
	imagen: {
		type: String
	},
	dateCreated: {
		type: Date,
		default: Date.now
	}
});

module.exports = model('Room', roomSchema);
