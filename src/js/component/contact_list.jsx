import React from "react";
import contact from "../../img/contact.jpg";

export const ContactList = () => {
    return (
        <div>
            <div className=" d-flex justify-content-end">
                <button type="button" className="btn btn-success mb-2 mt-2">Add new contact</button>
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
                        <i className="fa-solid fa-pencil me-4"></i>
                        <i className="fa-solid fa-trash-can me-2"></i>
                    </div>
                </li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Morbi leo risus</li>
                <li className="list-group-item">Porta ac consectetur ac</li>
                <li className="list-group-item">Vestibulum at eros</li>
            </ul>
        </div>
    );
}