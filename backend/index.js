//=============================================================================
// Basic Config
//=============================================================================
const express = require('express');

// instantiate express
const app = express();
app.set('port', process.env.PORT || 3000);
const cors = require('cors');
//=============================================================================
// Middleware
//=============================================================================
// `express.json` parses application/json request data and
//  adds it to the request object as request.body
app.use(express.json());
// `express.urlencoded` parses x-ww-form-urlencoded request data and
//  adds it to the request object as request.body
app.use(express.urlencoded({ extended: true }));
app.use(cors());
//=============================================================================
// ROUTES
//=============================================================================
// Redirect
app.get('/', (req, res) => {
	res.redirect('/students');
});
/* START CONTROLLERS HERE */
const studentController = require('./controllers/studentController');
app.use('/students', studentController);

/* END CONTROLLERS HERE */
// err handling
app.use((err, req, res, next) => {
	const statusCode = res.statusCode || 500;
	const message = err.message || 'Internal Server Error';
	res.status(statusCode).send(message);
  });
//=============================================================================
// START SERVER
//=============================================================================
app.listen(app.get('port'), () => {
	console.log(`✅ PORT: ${app.get('port')} 🌟`);
});