const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

router.get('/', (req, res, next) => {
	Student.find({})
		.then((Students) => res.json(Students))
		.catch(next);
});

router.get('/:studentId', async (req, res, next) => {
    try {
        const Students = await Student.findById(req.body);
        res.json(Students);
    } catch (err) {
        next (err);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const newStudent = await Student.create(req.body);
        res.redirect(303, '/')
    } catch (err) {
        next (err)
    }
});

router.put('/:studentId', async (req, res, next) => {
	try {
		const StudentToUpdate = await Student.findByIdAndUpdate(
			req.params.studentId,
			req.body,
			{
				new: true,
			}
		);
		if (StudentToUpdate) {
			res.redirect(303, '/')
		} else {
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

module.exports = router;