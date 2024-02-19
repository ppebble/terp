/* eslint-disable jsx-a11y/heading-has-content */
import React, { useRef } from 'react';
import classNames from 'classnames';
import { ParamType } from '../FormProfile';

function ProfileCareerComponent({ param }: ParamType) {
  const careerDiv = useRef<HTMLDivElement>(null);
  return (
    <div
      className={classNames('tab-pane fade', {
        'active show': param.activeTab === 'career',
      })}
      ref={careerDiv}
      id="v-pills-career-icons"
      role="tabpanel"
      aria-labelledby="v-pills-career-tab-icons"
    >
      ※경력기간의 개월 수는 30일 단위로 나눈 값입니다.
      <div
        className="accordion accordion-secondary notFirstMargin"
        style={{ border: '1px solid rgba(0,0,0,.125)' }}
      >
        <div
          className="card-header sort"
          // id="headingFour${i.count}"
          // onClick="active(this)"
          data-toggle="collapse"
          role="button"
          aria-expanded="false"
          // aria-controls="collapse${i.count}"
        >
          <div className="span-title">
            <i className="far fa-building" />
            &lt;%-- (${'{'}career.hire_term{'}'}개월) --%&gt;
            <i className="fas fa-plus m-t-5" style={{ float: 'right' }} />
            <p>
              경력기간 : ${'{'}career.careerterm{'}'}
            </p>
          </div>
        </div>
        <div
          className="collapse"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.03)' }}
        >
          <div className="card-body" style={{ backgroundColor: 'white' }}>
            <h5 className="horizontal" style={{ width: '13%' }}>
              입사일
            </h5>
            <h5 className="horizontal" style={{ width: '13%' }}>
              퇴사일
            </h5>
            <h5 className="horizontal" style={{ width: '13%' }}>
              직위
            </h5>
            <h5 className="horizontal" style={{ width: '17%' }}>
              직무분류
            </h5>
            <h5 className="horizontal" style={{ width: '16%' }}>
              담당업무
            </h5>
            <h5 className="horizontal" style={{ width: '20%' }}>
              주프로젝트명
            </h5>
            <h5 className="horizontal" style={{ width: '13%' }} />
            <h5 className="horizontal" style={{ width: '13%' }} />
            <h5 className="horizontal" style={{ width: '13%' }} />
            <h5 className="horizontal" style={{ width: '17%' }} />
            <h5 className="horizontal" style={{ width: '16%' }} />
            <h5 className="horizontal" style={{ width: '20%' }} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProfileCareerComponent;
