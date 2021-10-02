const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const servicesRoomSchema = new Schema({
	title: String,
	description: String
	// owner will be added later on
});

module.exports = model('Service', servicesRoomSchema);
