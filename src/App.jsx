import "./App.css";
import { useState } from "react";
//new
function App() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [gender, setGender] = useState("male");
    const [subjects, setSubjects] = useState({
        english: true,
        maths: false,
        physics: false,
    });
    const [resume, setResume] = useState("");
    const [url, setUrl] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    const [about, setAbout] = useState("");

    const handleSubjectChange = (sub) => {
        setSubjects((prev) => ({
            ...prev,
            [sub]: !prev[sub],
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form Submitted Successfully!");
    };

    const handleReset = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setContact("");
        setGender("male");
        setSubjects({ english: true, maths: false, physics: false });
        setUrl("");
        setSelectedOption("");
        setAbout("");
    };

    return (
        <div className="container">
            <div className="moving-bg"></div>
            <div className="bike-animation">
    <img 
        src="" 
        alt="bike"
    />
</div>

            <div className="form-wrapper">
                <h1>React Registration Form</h1>

                <form>

                    <label>First Name*</label>
                    <input 
                        type="text" 
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Enter First Name"
                    />

                    <label>Last Name*</label>
                    <input 
                        type="text" 
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Enter Last Name"
                    />

                    <label>Email*</label>
                    <input 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter Email"
                    />

                    <label>Contact*</label>
                    <input 
                        type="tel" 
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        placeholder="Enter Mobile Number"
                    />

                    {/* Gender */}
                    <label>Gender*</label>
                    <div className="radio-group">
                        <label><input type="radio" value="male" checked={gender==="male"} onChange={(e)=>setGender(e.target.value)} /> Male</label>
                        <label><input type="radio" value="female" checked={gender==="female"} onChange={(e)=>setGender(e.target.value)} /> Female</label>
                        <label><input type="radio" value="other" checked={gender==="other"} onChange={(e)=>setGender(e.target.value)} /> Other</label>
                    </div>

                    {/* Subjects */}
                    <label>Your Best Subject*</label>
                    <div className="checkbox-group">
                        <label><input type="checkbox" checked={subjects.english} onChange={()=>handleSubjectChange("english")} /> English</label>
                        <label><input type="checkbox" checked={subjects.maths} onChange={()=>handleSubjectChange("maths")} /> Maths</label>
                        <label><input type="checkbox" checked={subjects.physics} onChange={()=>handleSubjectChange("physics")} /> Physics</label>
                    </div>

                    <label>Upload Resume*</label>
                    <input type="file" onChange={(e)=>setResume(e.target.files[0])} />

                    <label>Portfolio URL*</label>
                    <input 
                        type="url" 
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="Enter Website URL"
                    />

                    <label>Select Your Skill Level*</label>
                    <select 
                        value={selectedOption}
                        onChange={(e)=>setSelectedOption(e.target.value)}
                    >
                        <option value="" disabled>Select your answer</option>
                        <optgroup label="Beginner">
                            <option value="1">HTML</option>
                            <option value="2">CSS</option>
                            <option value="3">JavaScript</option>
                        </optgroup>
                        <optgroup label="Advanced">
                            <option value="4">React</option>
                            <option value="5">Node</option>
                            <option value="6">Express</option>
                            <option value="7">MongoDB</option>
                        </optgroup>
                    </select>

                    <label>About Yourself*</label>
                    <textarea 
                        value={about}
                        onChange={(e)=>setAbout(e.target.value)}
                        placeholder="Tell us something about yourself..."
                    ></textarea>

                    <div className="btn-row">
                        <button type="reset" onClick={handleReset} className="reset-btn">Reset</button>
                        <button type="submit" onClick={handleSubmit} className="submit-btn">Submit</button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default App;

