/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/heading-has-content */
import React, { useState } from 'react';
import classNames from 'classnames';
import { ParamType } from '../FormProfile';
import useProfileStore from '../../tools/zustand/profile.store.module';

function ProfileSkillInventoryComponent({ param }: ParamType) {
  const { indProfileData } = useProfileStore();
  const [isDetail, setIsDetail] = useState<number>(0);
  return (
    <>
      {Array.from({ length: indProfileData.eduList.length }).map((_, index) => (
        <div
          className={classNames('tab-pane fade', {
            'active show': param.activeTab === 'skill',
          })}
          id="v-pills-project-icons"
          role="tabpanel"
          aria-labelledby="v-pills-project-tab-icons"
        >
          skill
          <div
            className="accordion accordion-secondary notFirstMargin"
            style={{ border: '1px solid rgba(0,0,0,.125)' }}
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
                <i className="fa fa-sitemap" />

                <i className="fas fa-plus m-t-5" style={{ float: 'right' }} />
              </div>
            </div>
            <div
              // id="collapse${i.count}"
              className={classNames('collapse', {
                ' show': isDetail === index + 1,
              })}
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.03)' }}
            >
              <div
                className="card-body profileWidth15p"
                style={{ backgroundColor: 'white' }}
              >
                <div className="line-bottom padding10">
                  <h5 className="horizontal p-r-5">시작일</h5>
                  <h4 className="horizontal p-r-5">
                    {indProfileData.skillList[index].startDate}
                  </h4>
                </div>
                <div className="line-bottom padding10">
                  <h5 className="horizontal p-r-5">종료일</h5>
                  <h4 className="horizontal p-r-5">
                    {indProfileData.skillList[index].endDate}
                  </h4>
                </div>
                <div className="line-bottom padding10">
                  <h5 className="horizontal p-r-5">고객사</h5>
                  <h4 className="horizontal p-r-5">
                    {indProfileData.skillList[index].clientCompany}
                  </h4>
                </div>
                <div className="line-bottom padding10">
                  <h5 className="horizontal p-r-5">근무회사</h5>
                  <h4 className="horizontal p-r-5">
                    {indProfileData.skillList[index].workingCompany}
                  </h4>
                </div>
                <div className="line-bottom padding10">
                  <h5 className="horizontal p-r-5">개발분야</h5>

                  <h4 className="horizontal p-r-5">
                    {indProfileData.skillList[index].developmentField}
                  </h4>

                  <h4 className="horizontal p-r-5"> </h4>
                </div>
                <div className="line-bottom padding10">
                  <h5 className="horizontal p-r-5">역할</h5>
                  <h4 className="horizontal p-r-5">
                    {' '}
                    {indProfileData.skillList[index].role}{' '}
                  </h4>
                </div>
                <div className="line-bottom padding10">
                  <h5 className="horizontal p-r-5">기종</h5>
                  <h4 className="horizontal p-r-5">
                    {' '}
                    {indProfileData.skillList[index].model}{' '}
                  </h4>
                </div>
                <div className="line-bottom padding10">
                  <h5 className="horizontal p-r-5">OS</h5>
                  <h4 className="horizontal p-r-5">
                    {' '}
                    {indProfileData.skillList[index].os}
                  </h4>
                </div>
                <div className="line-bottom padding10">
                  <h5 className="horizontal p-r-5">언어</h5>
                  <h4 className="horizontal p-r-5">
                    {' '}
                    {indProfileData.skillList[index].language}
                  </h4>
                </div>
                <div className="line-bottom padding10">
                  <h5 className="horizontal p-r-5">DBMS</h5>
                  <h4 className="horizontal p-r-5">
                    {' '}
                    {indProfileData.skillList[index].dbms}{' '}
                  </h4>
                </div>
                <div className="line-bottom padding10">
                  <h5 className="horizontal p-r-5">TOOL</h5>
                  <h4 className="horizontal p-r-5">
                    {' '}
                    {indProfileData.skillList[index].tool}{' '}
                  </h4>
                </div>
                <div className="line-bottom padding10">
                  <h5 className="horizontal p-r-5">통신</h5>
                  <h4 className="horizontal p-r-5">
                    {' '}
                    {indProfileData.skillList[index].communication}
                  </h4>
                </div>
                <div className="padding10">
                  <h5
                    className="horizontal"
                    style={{ color: 'rgb(150, 150, 150)' }}
                  >
                    기타
                  </h5>
                  <h4 className="horizontal">
                    {indProfileData.skillList[index].etc}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
export default ProfileSkillInventoryComponent;
