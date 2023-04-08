import React from "react";
import { Button, Card, Modal } from 'react-bootstrap';
import { ContactList } from "./contact_list.jsx";

export const ContactCard = ({showCard, handleCloseCard}) => {
    return (
        <>
            <Modal show={showCard} onHide={handleCloseCard}>
                  <Modal.Body>
                    <Card show={showCard} onHide={handleCloseCard}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary" onClick={handleCloseCard}>Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </Modal.Body>
            </Modal>
            {/* <Button variant="success" onClick={handleShowModal}>
                Add new contact
            </Button> */}
        </>
    );
}