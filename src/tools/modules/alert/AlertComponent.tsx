import React, { useState } from 'react';
import Swal from 'sweetalert2';

interface AlertType {
  inputTitle: string;
  showCancelBtn?: boolean;
  inputText?: string;
  onClose?: () => void;
}
function AlertComponent({
  inputTitle,
  showCancelBtn = false,
  inputText = '',
  onClose,
}: AlertType) {
  return Swal.fire({
    title: inputTitle,
    html: `<hr />
                ${inputText}
                `,
    showCancelButton: showCancelBtn,
    confirmButtonText: '확인',
    didClose: onClose,
  });
}

export default AlertComponent;
