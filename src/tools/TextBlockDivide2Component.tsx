/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-param-reassign */
import React, { useEffect } from 'react';
import AlertComponent from './modules/alert/AlertComponent';

interface Text2Props {
  handler?: (event: any) => void;
  label: string;
  type1: string;
  type2: string;
  ref1: React.RefObject<HTMLInputElement>;
  ref2: React.RefObject<HTMLInputElement>;
  id1: string;
  id2: string;
}
function TextBlockDivide2Componet({
  label,
  handler,
  type1 = 'text',
  type2 = 'text',
  id1 = `id1_${{ label }}`,
  id2 = `id1_${{ label }}`,
  ref1,
  ref2,
}: Text2Props) {
  useEffect(() => {}, []);
  const dateHandler = () => {
    if (ref1.current?.type === 'date' && ref2.current?.type === 'date') {
      if (ref2.current?.value && ref1.current.value > ref2.current.value) {
        AlertComponent({
          inputTitle: '입력 에러',
          inputText: '뒤의 날짜는 앞의 날짜보다 과거일 수 없습니다..',
        });
        ref1.current.value = '';
        ref2.current.value = '';
      }
    }
  };
  return (
    <div className="row form-group">
      <div style={{ display: 'flex' }}>
        <div className="col col-md-3">
          <label htmlFor="select" className=" form-control-label m-t-5">
            {label}
          </label>
        </div>
        <div className="col col-md-2">
          <input
            type={type1}
            name="pre_sno"
            id={id1}
            onChange={handler}
            onInput={dateHandler}
            ref={ref1}
            className="form-control"
          />
        </div>
        <div className="m-t-5">
          <p>-</p>
        </div>
        <div className="col col-md-2">
          <input
            type={type2}
            name="pre_sno"
            onChange={handler}
            id={id2}
            ref={ref2}
            onInput={dateHandler}
            className="form-control"
          />
        </div>
      </div>
    </div>
  );
}
export default TextBlockDivide2Componet;
