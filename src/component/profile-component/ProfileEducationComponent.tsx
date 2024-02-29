/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/heading-has-content */
import React, { useState } from 'react';
import classNames from 'classnames';
import { ParamType } from '../FormProfile';
import useProfileStore from '../../tools/zustand/profile.store.module';

function ProfileEducationComponent({ param }: ParamType) {
  const { indProfileData } = useProfileStore();
  const [isDetail, setIsDetail] = useState<number>(0);
  return (
    <>
      {Array.from({ length: indProfileData.eduList.length }).map((_, index) => (
        <div
          className={classNames('tab-pane fade', {
            'active show': param.activeTab === 'edu',
          })}
          key={indProfileData.eduList[index].eduName}
          id="v-pills-education-icons"
          role="tabpanel"
          aria-labelledby="v-pills-education-tab-icons"
        >
          <div
            className="accordion accordion-secondary notFirstMargin"
            style={{ border: '1px solid rgba(0,0,0,.125)' }}
          >
            <div
              className="card-header sort"
              // onClick="active(this)"
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
                <i className="fa fa-laptop" />
                <i className="fas fa-plus m-t-5" style={{ float: 'right' }} />
                title
              </div>
            </div>
            <div
              className={classNames('collapse', {
                ' show': isDetail === index + 1,
              })}
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.03)' }}
            >
              <div className="card-body" style={{ backgroundColor: 'white' }}>
                <h5 className="horizontal" style={{ width: '30%' }}>
                  시작일
                </h5>
                {indProfileData.eduList[index].startDate}
                <h5 className="horizontal" style={{ width: '30%' }}>
                  종료일
                </h5>
                {indProfileData.eduList[index].EndDate}
                <h5 className="horizontal" style={{ width: '30%' }}>
                  기관
                </h5>
                {indProfileData.eduList[index].organization}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
export default ProfileEducationComponent;
