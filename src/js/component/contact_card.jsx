import React from "react";
import { Button, Card, Modal } from 'react-bootstrap';
import { ContactList } from "./contact_list.jsx";
import contact from "../../img/contact.jpg";

export const ContactCard = ({ showCard, handleCloseCard }) => {
    return (
        <>
            <Modal show={showCard} onHide={handleCloseCard}>
                <Modal.Body>
                    <Card show={showCard} onHide={handleCloseCard}>
                        <Card.Img variant="top" src={contact} className="contact-image rounded-circle" />
                        <Card.Body>
                            <Card.Title>Contact Card</Card.Title>
                            <Card.Text>
                            <div className="d-flex flex-column p-2">
                                <p className="name">Name</p>
                                <p className="text-secondary fw-bold"><i className="fa-solid fa-location-dot "></i> Address</p>
                                <p className="text-secondary"><i className="fa-solid fa-phone text-secondary"></i> Phone</p>
                                <p className="text-secondary "><i className="fa-solid fa-envelope text-secondary"></i> Email</p>
                            </div>
                        </Card.Text>
                        <Button variant="secondary" onClick={handleCloseCard}>Close</Button>
                    </Card.Body>
                </Card>
            </Modal.Body>
        </Modal >
        {/* <Button variant="success" onClick={handleShowModal}>
                Add new contact
            </Button> */}
        </>
    );
}