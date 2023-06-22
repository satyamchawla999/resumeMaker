import { useState } from "react";
import "../../Assets/Styles/form.css"
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addResume } from "../../Features/Users/usersSlice";
import { Button, Modal } from 'antd';

let initialValue = {
    name: "",
    email: "",
    phone: "",
    summary: "",
    language1: "",
    language2: "",
    skill1: "",
    skill2: "",
    school: "",
    college: "",
    experience: "",
    organisation: ""
}

const Form = () => {

    const dispatch = useDispatch()

    const [values, setValues] = useState(initialValue);
    const [submit, setSubmit] = useState(false);
    const Navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (values !== initialValue) {
            dispatch(addResume(values));
            setValues(initialValue);
            setSubmit(true);
        }
    }

    const handleInputChange = (e) => {
        setSubmit(false);
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,
        });
    };

    const handleCancle = () => {
        Navigate("/dashboard");
    }

    const handleReset = () => {
        setValues(initialValue)
    }

    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="form">
            <div className="heading"> <h1>Insert Details</h1> </div>

            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" value={values.name} onChange={handleInputChange}/>

                <label>Email</label>
                <input type="email" name="email" value={values.email} onChange={handleInputChange}/>

                <label>Phone</label>
                <input type="text" name="phone" value={values.phone} onChange={handleInputChange}/>

                <label>Summary</label>
                <input type="text" name="summary" value={values.summary} onChange={handleInputChange} />

                <label>Language</label>
                <input
                    type="text"
                    name="language1"
                    value={values.language1}
                    onChange={handleInputChange}
                    placeholder="Language 1"
                />

                <input
                    type="text"
                    name="language2"
                    value={values.language2}
                    onChange={handleInputChange}
                    placeholder="Language 2"
                />

                <label>Skills</label>
                <input
                    type="text"
                    name="skill1"
                    value={values.skill1}
                    onChange={handleInputChange}
                    placeholder="Skill 1"
                />

                <input
                    type="text"
                    name="skill2"
                    value={values.skill2}
                    onChange={handleInputChange}
                    placeholder="Skill 2"
                />

                <label>School</label>
                <input type="text" name="school" value={values.school} onChange={handleInputChange} />

                <label>College</label>
                <input type="text" name="college" value={values.college} onChange={handleInputChange} />

                <label>Experience</label>
                <input type="text" name="experience" value={values.experience} onChange={handleInputChange} />

                <label>Organisation</label>
                <input type="text" name="organisation" value={values.organisation} onChange={handleInputChange} />
                
                {submit &&  <p style={{color:"red"}}>Details Submitted Successfully</p>}
                <button>Submit</button>
            </form>

            <div className="formButtons">
                <button onClick={handleCancle}>Cancle</button>
                <button onClick={handleReset}>Reset</button>
                <button onClick={showModal}>Preview</button>
            </div>

            <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <h1>Info</h1>
                <p>Name : {values.name}</p>
                <p>Email : {values.email}</p>
                <p>summary : {values.summary}</p>
                <h1>Language</h1>
                <p>Language1 : {values.language1}</p>
                <p>language2 : {values.language2}</p>
                <h1>Skills</h1>
                <p>skill1 : {values.skill1}</p>
                <p>skill2 : {values.skill2}</p>
                <h1>organisation</h1>
                <p>Organisation : {values.organisation}</p>
                <h1>Education</h1>
                <p>school : {values.school}</p>
                <p>college : {values.college}</p>
                <h1>Experience</h1>
                <p>Experience : {values.experience}</p>
            </Modal>
        </div>
    );
}

export default Form;