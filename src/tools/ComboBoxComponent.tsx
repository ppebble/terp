/* eslint-disable @typescript-eslint/no-empty-function */
import { any } from 'prop-types';
import React from 'react';
import Select from 'react-select';

interface ComboBoxProps {
  handler?: (e: any) => void;
  label: string;
  ref1?: any;
  options?: any;
  defalutValueIndex?: number;
}

function ComboBoxComponent({
  defalutValueIndex = 0,
  label = '',
  ref1 = '',
  handler,
  options,
}: ComboBoxProps) {
  return (
    <div className="row form-group">
      <div className="col col-md-3">
        <label htmlFor="select" className=" form-control-label">
          {label}
        </label>
      </div>
      <div className="col-12 col-md-3">
        <Select
          isSearchable={false}
          defaultValue={
            defalutValueIndex ? options[defalutValueIndex] : undefined
          }
          className="form-control"
          ref={ref1}
          onChange={handler}
          options={options}
        />
      </div>
    </div>
  );
}
export default ComboBoxComponent;
