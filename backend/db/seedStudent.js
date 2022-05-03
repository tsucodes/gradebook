const mongoose = require('./connection');

const Student = require('../models/Student');
const studentSeeds = require('./seed.json');

const studentData = studentSeeds.map(student=>{
    return student;
})

Student.deleteMany({})
    .then(() => {
            Student.insertMany(studentData);
        })
    .catch(console.error)
