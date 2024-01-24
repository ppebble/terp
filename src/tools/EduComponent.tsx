import React, { useEffect } from 'react';
import Select from 'react-select';

interface EduProps {
  school: string;
  refSchool: any;
  refMajor: any;
  refGradFlag: any;
  refGradDate: any;
}

function EduComponent({
  school = '',
  refSchool = '',
  refMajor = '',
  refGradFlag = '',
  refGradDate = '',
}: EduProps) {
  useEffect(() => {}, []);
  const gradStateList = [
    { label: '졸업', value: '졸업' },
    { label: '중퇴', value: '중퇴' },
    { label: '졸업예정', value: '졸업예정' },
  ];
  return (
    <div className="row form-group">
      <div className="col col-md-3">
        <label htmlFor="text-input" className=" form-control-label">
          {school}
        </label>
      </div>
      <div className="col-12 col-md-3">
        <input
          type="text"
          name="pre_grad_school"
          placeholder="학교명"
          className="form-control"
          ref={refSchool}
        />
      </div>
      <div className="col-12 col-md-2">
        <input
          ref={refMajor}
          type={school === '고등학교' ? 'hidden' : 'text'}
          name="pre_grad_school"
          placeholder="전공"
          className="form-control"
        />
      </div>
      <div className="col-12 col-md-2">
        <Select
          isSearchable={false}
          name="pre_grad_school"
          className="form-control"
          options={gradStateList}
          ref={refGradFlag}
        />
      </div>
      <div className="col-12 col-md-2">
        <input
          ref={refGradDate}
          type="month"
          name="pre_grad_school"
          className="form-control"
          id="gradMax"
          max="2090-01"
          min="1900-01"
        />
      </div>
    </div>
  );
}
EduComponent.defaultProps = {};
export default EduComponent;
