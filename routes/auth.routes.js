const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User.model');

const { isAuthenticated } = require('./../middleware/jwt.middleware.js');

const router = express.Router();
const saltRounds = 10;

// POST /auth/signup  - Creates a new user in the database
router.post('/signup', (req, res, next) => {
	const { email, password, name, image } = req.body;

	// Check if email or password or name are provided as empty string
	if (email === '' || password === '' || name === '') {
		res.status(400).json({ message: 'Todos los campos necesarios.' });
		return;
	}

	// Use regex to validate the email format
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
	if (!emailRegex.test(email)) {
		res.status(400).json({ message: 'Dirección email no valida.' });
		return;
	}

	// Use regex to validate the password format
	const passwordRegex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
	if (!passwordRegex.test(password)) {
		res.status(400).json({
			message: 'Password con número, mayúscula, minúscula y número.'
		});
		return;
	}

	// Check the users collection if a user with the same email already exists
	User.findOne({ email })
		.then((foundUser) => {
			// If the user with the same email already exists, send an error response
			if (foundUser) {
				res.status(400).json({ message: 'El usuario ya existe.' });
				return;
			}

			// If email is unique, proceed to hash the password
			const salt = bcrypt.genSaltSync(saltRounds);
			const hashedPassword = bcrypt.hashSync(password, salt);

			// Create the new user in the database
			// We return a pending promise, which allows us to chain another `then`
			return User.create({ email, password: hashedPassword, name, image });
		})
		.then((createdUser) => {
			// Deconstruct the newly created user object to omit the password
			// We should never expose passwords publicly
			const { email, name, _id } = createdUser;

			// Create a new object that doesn't expose the password
			const user = { email, name, _id };

			// Send a json response containing the user object
			res.status(201).json({ user: user, message: 'Usuario registrado.' });
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({ message: 'Internal Server Error' });
		});
});

// POST  /auth/login - Verifies email and password and returns a JWT
router.post('/login', (req, res, next) => {
	const { email, password } = req.body;

	// Check if email or password are provided as empty string
	if (email === '' || password === '') {
		res.status(400).json({ message: 'Email o password incorrectos.' });
		return;
	}

	// Check the users collection if a user with the same email exists
	User.findOne({ email })
		.then((foundUser) => {
			if (!foundUser) {
				// If the user is not found, send an error response
				res.status(401).json({ message: 'Usuario no encontrado.' });
				return;
			}

			// Compare the provided password with the one saved in the database
			const passwordCorrect = bcrypt.compareSync(password, foundUser.password);

			if (passwordCorrect) {
				// Deconstruct the user object to omit the password
				const { _id, email, name } = foundUser;

				// Create an object that will be set as the token payload
				const payload = { _id, email, name };

				// Create and sign the token
				const authToken = jwt.sign(payload, process.env.TOKEN_SECRET, { algorithm: 'HS256', expiresIn: '6h' });

				// Send the token as the response
				res.status(200).json({ authToken: authToken, user: foundUser, message: 'Bienvenido.' });
			} else {
				res.status(401).json({ message: 'No es posible autenticar el usuario.' });
			}
		})
		.catch((err) => res.status(500).json({ message: 'Internal Server Error' }));
});

// GET  /auth/verify  -  Used to verify JWT stored on the client
router.get('/verify', isAuthenticated, (req, res, next) => {
	// If JWT token is valid the payload gets decoded by the
	// isAuthenticated middleware and made available on `req.payload`
	console.log(`req.payload`, req.payload);

	// Send back the object with user data
	// previously set as the token payload
	res.status(200).json(req.payload);
});

module.exports = router;
