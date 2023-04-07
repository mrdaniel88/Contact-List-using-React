import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'

export const Forms = () => {
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
            <Button variant="success" onClick={handleShowForms}>
                Add new contact
            </Button>
        </>
    );
}
