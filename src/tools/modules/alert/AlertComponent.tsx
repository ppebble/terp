import React, { useState } from 'react';
import Swal from 'sweetalert2';

interface AlertType {
  inputTitle: string;
  showCancelBtn?: boolean;
  inputText?: string;
}
function AlertComponent({
  inputTitle,
  showCancelBtn = false,
  inputText = '',
}: AlertType) {
  return Swal.fire({
    title: inputTitle,
    html: `<hr />
                ${inputText}
                `,
    showCancelButton: showCancelBtn,
    confirmButtonText: '확인',
  });
}

export default AlertComponent;
