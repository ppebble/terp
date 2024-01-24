import { Button, Modal } from 'react-bootstrap';
import React from 'react';

interface ValidationModalProps {
  close: boolean;
  handleClose?: any;
  message: string;
}
function ValidationModal({
  close,
  handleClose,
  message,
}: ValidationModalProps) {
  return (
    <Modal show={close} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Validation Error</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>데이터 입력에 오류가 있습니다.</p>
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

export default ValidationModal;
