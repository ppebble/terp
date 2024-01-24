import React from 'react';

interface RadioProps {
  onChangeHandler?: () => void;
  label: string;
  val1: string;
  val2: string;
  ref1: any;
  ref2: any;
}
function RadioComponent({
  onChangeHandler,
  label = 'label',
  val1 = '',
  val2 = '',
  ref1 = 'ref1',
  ref2 = 'ref2',
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
          name="gender"
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
          name="gender"
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
