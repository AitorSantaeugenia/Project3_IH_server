require('dotenv/config');
require('./db/index.js');
const express = require('express');

const { isAuthenticated } = require('./middleware/jwt.middleware'); // <== IMPORT

const app = express();
require('./config/index.js')(app);

// 👇 MIDDLEWARE MISSING
const allRoutes = require('./routes');
app.use('/api', allRoutes);

const authRouter = require('./routes/auth.routes');
app.use('/api/auth', authRouter);

const projectRouter = require('./routes/project.routes');
app.use('/api', isAuthenticated, projectRouter); // <== UPDATE

const taskRouter = require('./routes/task.routes');
app.use('/api', isAuthenticated, taskRouter); // <== UPDATE

const usuarios = require('./routes/users.routes');
app.use('/api', isAuthenticated, usuarios); // <== Mostrar usuarios

const crearHotel = require('./routes/dashboard.routes');
app.use('/api', isAuthenticated, crearHotel); // <== UPDATE

const crearTienda = require('./routes/tienda.routes');
app.use('/api', isAuthenticated, crearTienda); // <== UPDATE

const crearRestaurante = require('./routes/restaurante.routes');
app.use('/api', isAuthenticated, crearRestaurante); // <== UPDATE

const crearRoom = require('./routes/rooms.routes');
app.use('/api', isAuthenticated, crearRoom); // <== UPDATE

// app.use((req, res, next) => {
//   // If no routes match, send them the React HTML.
//   res.sendFile(__dirname + "/public/index.html");
// });

require('./error-handling')(app);

module.exports = app;
