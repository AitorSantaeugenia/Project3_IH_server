const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const tiendaSchema = new Schema({
	nombre: String,
	info: String,
	imagen: String
});

module.exports = model('Tienda', tiendaSchema);
