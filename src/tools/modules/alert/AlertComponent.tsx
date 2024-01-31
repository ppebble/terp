import React, { useState } from 'react';
import Swal from 'sweetalert2';

interface AlertType {
  inputTitle: string;
  type: string;
  showCancelBtn?: boolean;
  inputText?: string;
}
type textType = {
  [key: string]: string;
};
function AlertComponent({
  inputTitle,
  type,
  showCancelBtn = false,
  inputText = '',
}: AlertType) {
  const text: textType = {
    login: ' 로그인에 실패하였습니다. ',
    durationError: '뒤의 날짜가 앞의 날짜보다 과거일 수 없습니다.',
    inputError: '입력 값이 올바르지 않습니다',
    custom: inputText,
  };
  return Swal.fire({
    title: inputTitle,
    html: `<hr />
                ${text[type]}
                `,
    showCancelButton: showCancelBtn,
    confirmButtonText: '확인',
  });
}

export default AlertComponent;
