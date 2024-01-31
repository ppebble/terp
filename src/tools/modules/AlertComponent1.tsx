import React, { useEffect, useState } from 'react';
import ErrorModal from './ErrorModal';
import ValidationModal from './ValidaionModal';
import InfoModal from './InfoModal';

interface AlertProps {
  show: boolean;
  setAlert: React.Dispatch<
    React.SetStateAction<{ hasAlert: boolean; message: string; type: string }>
  >;
  message: string;
  type: string;
}
type modalType = {
  [key: string]: JSX.Element;
};

function AlertComponent1({ show, setAlert, message, type }: AlertProps) {
  const [close, setClose] = useState(show);
  useEffect(() => {
    setClose(show);
  }, [show]);

  const handleClose = () => {
    setClose(false);
    setAlert({ hasAlert: false, message: '', type: '' });
    return 0;
  };

  const errorModal: modalType = {
    access: (
      <ErrorModal
        key={type}
        close={close}
        handleClose={handleClose}
        message={message}
      />
    ),
    validation: (
      <ValidationModal
        key={type}
        close={close}
        handleClose={handleClose}
        message={message}
      />
    ),
    info: (
      <InfoModal
        key={type}
        close={close}
        handleClose={handleClose}
        message={message}
      />
    ),
  };

  const modal = errorModal[type];

  return modal;
}
export default AlertComponent1;
