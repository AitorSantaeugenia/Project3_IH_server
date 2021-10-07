const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const restSchema = new Schema({
	nombre: String,
	info: String,
	imagen: String
});

module.exports = model('Restaurante', restSchema);
