/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/heading-has-content */
import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import moment from 'moment';
import { ParamType } from '../FormProfile';
import { ProfileCareerType } from '../../tools/model/ProfileIndividualProps';
import { useIndProfile } from '../../tools/zustand/profile.store.module';

function ProfileCareerComponent({ param }: ParamType) {
  const careerDiv = useRef<HTMLDivElement>(null);
  const personal = useIndProfile();
  const [isDetail, setIsDetail] = useState<number>(0);
  function setHireDay(item: ProfileCareerType) {
    const startDate = moment(item.careerStart);
    const endDate = item.careerEnd ? moment(item.careerEnd) : moment.now();
    return Math.abs(startDate.diff(endDate, 'days'));
  }

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
      {Array.from({ length: personal.careerList.length || 0 }).map(
        (_, index) => (
          <div
            className="accordion accordion-secondary notFirstMargin"
            style={{ border: '1px solid rgba(0,0,0,.125)' }}
            key={personal.careerList[index].companyName}
          >
            <div
              className="card-header sort"
              data-toggle="collapse"
              role="button"
              aria-expanded="false"
              onClick={() => {
                if (isDetail !== index + 1) setIsDetail(index + 1);
                else {
                  setIsDetail(0);
                }
              }}
            >
              <div className="span-title">
                <i className="far fa-building" />
                {personal.careerList[index].companyName}
                <i className="fas fa-plus m-t-5" style={{ float: 'right' }} />
                <p>
                  경력기간 :{' '}
                  {Math.floor(setHireDay(personal.careerList[index]) / 30)}
                  개월(
                  {setHireDay(personal.careerList[index])}
                  일)
                </p>
              </div>
            </div>
            <div
              className={classNames('collapse', {
                ' show': isDetail === index + 1,
              })}
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.03)' }}
            >
              <div className="card-body" style={{ backgroundColor: 'white' }}>
                <h5 className="horizontal" style={{ width: '13%' }}>
                  입사일
                </h5>
                {personal.careerList[index].careerStart}
                <br />
                <h5 className="horizontal" style={{ width: '13%' }}>
                  퇴사일
                </h5>
                {personal.careerList[index].careerEnd}
                <br />
                <h5 className="horizontal" style={{ width: '13%' }}>
                  직위
                </h5>
                {personal.careerList[index].spot || 'x'}
                <br />
                <h5 className="horizontal" style={{ width: '17%' }}>
                  직무분류
                </h5>
                {personal.careerList[index].jobClassification}
                <br />
                <h5 className="horizontal" style={{ width: '16%' }}>
                  담당업무
                </h5>
                {personal.careerList[index].task}
                <br />
                <h5 className="horizontal" style={{ width: '20%' }}>
                  주프로젝트명
                </h5>
                {personal.careerList[index].mainCareer}
                <br />
              </div>
            </div>
          </div>
        ),
      )}
    </div>
  );
}
export default ProfileCareerComponent;
