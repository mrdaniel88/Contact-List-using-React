import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap'

export const DeleteContact = () => {
    const [showForms, setShowForms] = useState(false);

    const handleShowForms = () => setShowForms(true);
    const handleCloseForms = () => setShowForms(false);

    return (
        <>
            <Modal show={showForms} onHide={handleCloseForms}>
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
                    Modal content goes here.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseForms}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleCloseForms}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            <Button className='border-0' bg='white' variant='light' onClick={handleShowForms}>
            <i className="fa-solid fa-pencil me-4" onClick={handleShowForms}></i>
            </Button>
            
        </>
    );
}