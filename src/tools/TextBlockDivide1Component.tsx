import React from 'react';

interface Text1Props {
  // onChangeHandler?: () => void;
  label: string;
  ref1: React.RefObject<HTMLInputElement>;
  id: string;
  type: string;
  placeHolder: string;
}
function TextBlockDivide1Componet({
  label = '',
  id = `id_${{ label }}`,
  type = 'text',
  ref1,
  placeHolder = '',
}: Text1Props) {
  return (
    <div className="row form-group">
      <div className="col col-md-3">
        <label
          style={{ display: 'inline-block' }}
          htmlFor="text-input"
          className=" form-control-label"
        >
          {label}
        </label>
      </div>
      <div className="col-12 col-md-3">
        <input
          type={type}
          id={id}
          name={label}
          placeholder={placeHolder || label}
          className="form-control"
          ref={ref1}
        />
      </div>
    </div>
  );
}
export default TextBlockDivide1Componet;
