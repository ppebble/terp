import React, { PropsWithChildren } from 'react';
import { Button, CloseButton } from 'react-bootstrap';
import styled from 'styled-components';

interface ModalDefaultType {
  onClickToggleModal: () => void;
}
const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
`;

const DialogBox = styled.dialog`
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
  border-radius: 3px;
  box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
  box-sizing: border-box;
  background-color: white;
  z-index: 10000;
  padding-top: 10px;
`;

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.2);
`;
function Modal({
  onClickToggleModal,
  children,
}: PropsWithChildren<ModalDefaultType>) {
  return (
    <ModalContainer>
      <DialogBox>
        {/* <CloseButton onClick={onClickToggleModal} /> */}
        {children}
      </DialogBox>
      <Backdrop
        onClick={(e: React.MouseEvent) => {
          e.preventDefault();

          if (onClickToggleModal) {
            onClickToggleModal();
          }
        }}
      />
    </ModalContainer>
  );
}

export default Modal;
