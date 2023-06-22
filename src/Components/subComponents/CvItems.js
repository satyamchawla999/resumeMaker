import { Modal } from 'antd';
import { useDispatch } from 'react-redux';
import { deleteResume } from '../../Features/Users/usersSlice';
import React, { useState } from 'react';

import "../../Assets/Styles/items.css"

const CvItems = (props) => {
    const dispatch = useDispatch()

    const item = props.item;
    const name = item.name ? item.name : "Dummy";
    const email = item.email ? item.email : "Dummy";
    const experience = item.experience ? item.experience : "Dummy";
    const language1 = item.language1 ? item.language1 : "Dummy";
    const language2 = item.language2 ? item.language2 : "Dummy";
    const skill1 = item.skill1 ? item.skill1 : "Dummy";
    const skill2 = item.skill2 ? item.skill2 : "Dummy";
    const organisation = item.organisation ? item.organisation : "Dummy";
    const summary = item.summary ? item.summary : "Dummy";
    const school = item.school ? item.school : "Dummy";
    const college = item.school ? item.college : "Dummy";

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

    const handleDelete = ()=>{
        dispatch(deleteResume(item.id))
    }

    return (
        <div className="cvItems">

            <div className="image">
                <img src="https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png?f=webp" />

            </div>

            <div className="buttons">
                <p>Name: {name}</p>
                <button onClick={showModal}>
                    View
                </button>
                <br></br>
                <button onClick={handleDelete} style={{backgroundColor:"red"}}>
                    Delete
                </button>
            </div>

            <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <h1>Info</h1>
                <p>Name : {name}</p>
                <p>Email : {email}</p>
                <p>summary : {summary}</p>
                <h1>Language</h1>
                <p>Language1 : {language1}</p>
                <p>language2 : {language2}</p>
                <h1>Skills</h1>
                <p>skill1 : {skill1}</p>
                <p>skill2 : {skill2}</p>
                <h1>Organisation</h1>
                <p>Organisation : {organisation}</p>
                <h1>Education</h1>
                <p>school : {school}</p>
                <p>college : {college}</p>
                <h1>Experience</h1>
                <p>Experience : {experience}</p>
            </Modal>

        </div>
    );
}

export default CvItems;