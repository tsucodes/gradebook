import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table'

const Roster = () => {
    const [studentList, setStudentList] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/students').then((allstudents) => {
            setStudentList(allstudents.data);
        })
    })
    
    return(
        <div className="roster">
            {/* Table is from boostrap */}
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>Name</th>
      <th>Course</th>
      <th>GPA</th>
    </tr>
  </thead>
  <tbody className="table-body">
      {studentList.map((student, key) => (
          <tr student={student} key={key}>
              <td>{student.name}</td>
              <td>{student.course}</td>
              <td>{student.gpa}</td>
          </tr>
      ))}
  </tbody>
</Table>
        </div>
    )
}
export default Roster
