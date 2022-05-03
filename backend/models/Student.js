const mongoose = require('../db/connection');

const StudentSchema = new mongoose.Schema({
    name: String,
    course: String,
    gpa: String
})
const Student = mongoose.model('Student', StudentSchema);

module.exports = Student