const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const userSchema = new Schema({
	email: { type: String, unique: true, required: true },
	password: { type: String, required: true },
	name: { type: String, required: true },
	image: String,
	rol: {
		type: String,
		enum: [ 'administrator', 'guest' ],
		default: 'guest'
	}
});

module.exports = model('User', userSchema);
