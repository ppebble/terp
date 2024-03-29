import React from 'react';

interface RadioProps {
  onChangeHandler?: () => void;
  label: string;
  val1: string;
  val2: string;
  ref1: React.RefObject<HTMLInputElement>;
  ref2: React.RefObject<HTMLInputElement>;
}
function RadioComponent({
  onChangeHandler,
  label = 'label',
  val1 = '',
  val2 = '',
  ref1,
  ref2,
}: RadioProps) {
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
      <div className="col-12 col-md-3" style={{ display: 'flex' }}>
        <input
          onChange={onChangeHandler}
          ref={ref1}
          type="radio"
          id="male"
          name={val1}
          defaultValue="male"
          style={{ marginRight: 10 }}
        />
        <label className="form-check-label" htmlFor="male">
          {val1}
        </label>
      </div>
      <div className="col-12 col-md-3">
        <input
          onChange={onChangeHandler}
          ref={ref2}
          type="radio"
          id="female"
          name={val2}
          defaultValue="female"
          style={{ marginRight: 10 }}
        />
        <label className="form-check-label" htmlFor="female">
          {val2}
        </label>
      </div>
    </div>
  );
}
export default RadioComponent;
