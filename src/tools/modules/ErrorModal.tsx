import { Button, Modal } from 'react-bootstrap';
import React from 'react';

interface ErrorProps {
  close: boolean;
  handleClose?: any;
  message: string;
}
function ErrorModal({ close, handleClose, message }: ErrorProps) {
  return (
    <Modal show={close} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>Connection Error</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>서버에 응답이 없거나 오류가 발생했습니다.</p>
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

export default ErrorModal;
