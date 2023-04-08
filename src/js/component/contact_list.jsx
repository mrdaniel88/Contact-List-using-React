import React, {useState} from "react";
import { Modal, Button, Form } from 'react-bootstrap'
import contact from "../../img/contact.jpg";
import { Forms } from "./forms.jsx";
import {EditContact} from "./edit_contact.jsx";


export const ContactList = () => {
    // const [isModalOpen, setIsModalOpen] = useState(false);
    // const handleShowForms = () => {
    // setIsModalOpen(true);
    // }

    return (
        <div>
            <div className=" d-flex justify-content-end">
                {/* <button onClick={handleShowForms} type="button" className="btn btn-success mb-2 mt-2">Add new contact</button> */}
                <Forms />
            </div>
            <ul className="list-group mt-1">
                <li className="list-group-item d-flex">
                    <div className="me-3">
                        <img src={contact} alt="..." className="contact-image rounded-circle" />
                    </div>
                    <div className="d-flex flex-column p-2">
                        <p className="name">Name</p>
                        <p className="text-secondary fw-bold"><i className="fa-solid fa-location-dot "></i> Address</p>
                        <p className="text-secondary"><i className="fa-solid fa-phone text-secondary"></i> Phone</p>
                        <p className="text-secondary "><i className="fa-solid fa-envelope text-secondary"></i> Email</p>
                    </div>
                    <div className="icons-edit ms-auto">
                    <EditContact />
                        <i className="fa-solid fa-trash-can me-2"></i>
                    </div>
                </li>
                <li className="list-group-item d-flex">
                    <div className="me-3">
                        <img src={contact} alt="..." className="contact-image rounded-circle" />
                    </div>
                    <div className="d-flex flex-column p-2">
                        <p className="name">Name</p>
                        <p className="text-secondary fw-bold"><i className="fa-solid fa-location-dot "></i> Address</p>
                        <p className="text-secondary"><i className="fa-solid fa-phone text-secondary"></i> Phone</p>
                        <p className="text-secondary "><i className="fa-solid fa-envelope text-secondary"></i> Email</p>
                    </div>
                    <div className="icons-edit ms-auto">
                        <EditContact />
                        <i className="fa-solid fa-trash-can me-2"></i>
                    </div>
                </li>
                <li className="list-group-item d-flex">
                    <div className="me-3">
                        <img src={contact} alt="..." className="contact-image rounded-circle" />
                    </div>
                    <div className="d-flex flex-column p-2">
                        <p className="name">Name</p>
                        <p className="text-secondary fw-bold"><i className="fa-solid fa-location-dot "></i> Address</p>
                        <p className="text-secondary"><i className="fa-solid fa-phone text-secondary"></i> Phone</p>
                        <p className="text-secondary "><i className="fa-solid fa-envelope text-secondary"></i> Email</p>
                    </div>
                    <div className="icons-edit ms-auto">
                    <EditContact />
                        <i className="fa-solid fa-trash-can me-2"></i>
                    </div>
                </li>
                <li className="list-group-item d-flex">
                    <div className="me-3">
                        <img src={contact} alt="..." className="contact-image rounded-circle" />
                    </div>
                    <div className="d-flex flex-column p-2">
                        <p className="name">Name</p>
                        <p className="text-secondary fw-bold"><i className="fa-solid fa-location-dot "></i> Address</p>
                        <p className="text-secondary"><i className="fa-solid fa-phone text-secondary"></i> Phone</p>
                        <p className="text-secondary "><i className="fa-solid fa-envelope text-secondary"></i> Email</p>
                    </div>
                    <div className="icons-edit ms-auto">
                    <EditContact />
                        <i className="fa-solid fa-trash-can me-2"></i>
                    </div>
                </li>
            </ul>
        </div>
    );
}