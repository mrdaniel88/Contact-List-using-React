import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap'

export const Forms = ({ showModal, handleCloseModal }) => {
    // const [showForms, setShowForms] = useState(false);

    // const handleShowForms = () => setShowForms(true);
    // const handleCloseForms = () => setShowForms(false);

    return (
        <>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a new contact</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type='text' placeholder='Full Name' />
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' placeholder='Enter Email' />
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type='number' placeholder='Enter Phone' />
                        <Form.Label>Address</Form.Label>
                        <Form.Control type='text' placeholder='Enter Address' />
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleCloseModal}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            {/* <Button variant="success" onClick={handleShowModal}>
                Add new contact
            </Button> */}
        </>
    );
}
