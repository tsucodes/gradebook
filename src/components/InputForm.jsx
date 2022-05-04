import React, {useState} from "react";
import axios from "axios";

const InputForm = () => {
    const [student, setStudent] = useState({
        name: '',
        course: '',
        gpa: '',
    })
    
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const addStudent = () => {
        axios.post('http://localhost:3000/students',student)
    }
    return(
        <div className="input-form">
            <form onSubmit={handleSubmit}>
                <div><h3>Add Student</h3></div>
                 <div className="name">
                <label> Name: 
                    <input type="text"
                    placeholder="Enter name here"
                    value={student.name}
                    onChange={(e) => {setStudent({ ...student, name: e.target.value})}}/>
                </label>
                </div>
                <br></br> 
                <div className="course">  
                <label> Course: 
                    <input type="text"
                    placeholder="Enter course here"
                    value={student.course}
                    onChange={(e) => {setStudent({ ...student, course: e.target.value})}}/>
                </label>
                </div>
                <br></br> 
                <div className="gpa"> 
                <label>GPA: 
                    <input type="text"
                    placeholder="Enter gpa here"
                    value={student.gpa}
                    onChange={(e) => {setStudent({ ...student, gpa: e.target.value})}}/>
                </label>
                </div>
                <button onClick={addStudent}>Submit</button>
            </form>  
        </div>
    )
}
export default InputForm;