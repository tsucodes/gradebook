import React, {useState} from "react";

const InputForm = () => {
    const [name, setName] = useState("");
    const [course, setCourse] = useState("");
    const [gpa, setGpa] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return(
        <div className="input-form">
            <form onSubmit={handleSubmit}>
                 <div className="name">
                <label> Name: 
                    <input type="text"
                    placeholder="Enter name here..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}/>
                </label>
                </div>
                <br></br> 
                <div className="course">  
                <label> Course: 
                    <input type="text"
                    placeholder="Enter course here..."
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}/>
                </label>
                </div>
                <br></br> 
                <div className="gpa"> 
                <label>GPA: 
                    <input type="text"
                    placeholder="Enter GPA here..."
                    value={gpa}
                    onChange={(e) => setGpa(e.target.value)}/>
                </label>
                </div>
                {/* <button onClick={}>Submit</button> */}
            </form>  
        </div>
    )
}
export default InputForm;