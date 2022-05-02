// require the Express module
const express = require('express');
// instantiate a router -- this will hold all the logic
// for the URLs + methods for this resource
const router = express.Router();
// import the Student model
const Student = require('../models/Student');

// Add routes to the router object
// Index: GET all the Students
router.get('/', (req, res, next) => {
	// 1. Get all of the Students from the DB
	Student.find({})
		// 2. Send them back to the client as JSON
		.then((Students) => res.json(Students))
		// 3. If there's an error pass it on!
		.catch(next);
});

// Export this router object so that it is accessible when we require the file elsewhere
module.exports = router;