import { Button, Modal } from 'react-bootstrap';
import React from 'react';

interface InfoModalProps {
  close: boolean;
  handleClose?: any;
  message: string;
}
function InfoModal({ close = false, handleClose, message }: InfoModalProps) {
  return (
    <Modal show={close} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>INFO</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{message}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default InfoModal;
