const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const servicesRoomSchema = new Schema({
	title: String,
	description: String,
	tasks: [ { type: Schema.Types.ObjectId, ref: 'Task' } ]
	// owner will be added later on
});

module.exports = model('Service', servicesRoomSchema);
