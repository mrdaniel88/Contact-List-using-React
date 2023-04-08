import React, { useState } from "react";
import { Modal, Button, Form } from 'react-bootstrap'
import contact from "../../img/contact.jpg";
import { Forms } from "./forms.jsx";
import { DeleteContact } from "./delete_contact.jsx"



export const ContactList = () => {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const [showDelete, setShowDelete] = useState(false);

    const handleShowDelete = () => {
        setShowDelete(true);
    }

    const handleCloseDelete = () => {
        setShowDelete(false);
    }

    return (
        <div>
            <div className=" d-flex justify-content-end">
                <button onClick={handleShowModal} type="button" className="btn btn-success mb-2 mt-2">Add new contact</button>
                <Forms showModal={showModal} handleCloseModal={handleCloseModal} />
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
                        <i className="fa-solid fa-pencil me-4" onClick={handleShowModal}></i>
                        <Forms showModal={showModal} handleCloseModal={handleCloseModal} />
                        <i className="fa-solid fa-trash-can me-2" onClick={handleShowDelete}></i>
                        <DeleteContact showDelete={showDelete} handleCloseDelete={handleCloseDelete} />
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
                        <i className="fa-solid fa-pencil me-4" onClick={handleShowModal}></i>
                        <Forms showModal={showModal} handleCloseModal={handleCloseModal} />
                        <i className="fa-solid fa-trash-can me-2" onClick={handleShowDelete}></i>
                        <DeleteContact showDelete={showDelete} handleCloseDelete={handleCloseDelete} />
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
                        <i className="fa-solid fa-pencil me-4" onClick={handleShowModal}></i>
                        <Forms showModal={showModal} handleCloseModal={handleCloseModal} />
                        <i className="fa-solid fa-trash-can me-2" onClick={handleShowDelete}></i>
                        <DeleteContact showDelete={showDelete} handleCloseDelete={handleCloseDelete} />
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
                        <i className="fa-solid fa-pencil me-4" onClick={handleShowModal}></i>
                        <Forms showModal={showModal} handleCloseModal={handleCloseModal} />
                        <i className="fa-solid fa-trash-can me-2" onClick={handleShowDelete}></i>
                        <DeleteContact showDelete={showDelete} handleCloseDelete={handleCloseDelete} />
                    </div>
                </li>
            </ul>
        </div>
    );
}