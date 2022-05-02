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

// get a student by ID
router.get('/:studentId', async (req, res, next) => {
    try {
        // find student by unique ID
        const Students = await Student.findById(req.body);
        // send back to frontend as Json
        res.json(Students);
    } catch (err) {
        next (err);
    }
});

// Create Post a student
router.post('/', async (req, res, next) => {
    try {
        // use the data in the req body to add new studentreport card
        const newStudent = await Student.create(req.body);
        // if sucessful send the data back to the record that was inserted and respond with redirect to '/'
        res.redirect(303, '/')
    } catch (err) {
        next (err);
    }
});

// Export this router object so that it is accessible when we require the file elsewhere
module.exports = router;