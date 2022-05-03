// require the Express module
const express = require('express');
// instantiate a router -- this will hold all the logic
// for the URLs + methods for this resource
const router = express.Router();
// import the Student model
const Student = require('../models/Student');

// this does not get seedstudent data
// Index: GET all the Students
router.get('/', (req, res, next) => {
	// Get all of the Students from the DB
	Student.find({})
		//  Send them back to the client as JSON
		.then((Students) => res.json(Students))
		// If there's an error pass it on
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
        next (err)
    }
});
// Update: Put a Student
router.put('/:studentId', async (req, res, next) => {
	try {
		// find the student by id, passing in two additional arguments:
		// the request body holds the updated information
		// { new: true } returns the updated document instead of the old one
		const StudentToUpdate = await Student.findByIdAndUpdate(
			req.params.studentId,
			req.body,
			{
				new: true,
			}
		);
		// If a studnet was found and operation successful
		if (StudentToUpdate) {
			// send back updated student
			res.redirect(303, '/')
		} else {
			// else send back 404 Not Found
			res.sendStatus(404);
		}
	} catch (error) {
		next(err);
	}
});

router.delete('/:studentId', async (req, res, next) => {
    try {
        const StudentToDelete = await Student.findByIdAndDelete(req.params.studentId,{new: true});
        console.log(StudentToDelete);
        if (StudentToDelete) {
            res.redirect(303, '/')
        }else{
            res.sendStatus(404);
        }
    }catch(error) {
        next(err);
    }
});

// Export this router object so that it is accessible when we require the file elsewhere
module.exports = router;