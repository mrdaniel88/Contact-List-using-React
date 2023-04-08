import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap'

export const DeleteContact = ({showDelete, handleCloseDelete}) => {
    // const [showForms, setShowForms] = useState(false);

    // const handleShowForms = () => setShowForms(true);
    // const handleCloseForms = () => setShowForms(false);

    return (
        <>
            <Modal show={showDelete} onHide={handleCloseDelete}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete contact</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Are you sure?
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseDelete}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={handleCloseDelete}>
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