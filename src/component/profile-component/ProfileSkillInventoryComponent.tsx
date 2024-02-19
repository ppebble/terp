/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import { ParamType } from '../FormProfile';

function ProfileSkillInventoryComponent({ param }: ParamType) {
  return (
    <div
      className="tab-pane fade"
      id="v-pills-project-icons"
      role="tabpanel"
      aria-labelledby="v-pills-project-tab-icons"
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
          // aria-controls="collapse${i.count}"
        >
          <div className="span-title">
            <i className="fa fa-sitemap" />

            <i className="fas fa-plus m-t-5" style={{ float: 'right' }} />
          </div>
        </div>
        <div
          // id="collapse${i.count}"
          className="collapse"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.03)' }}
        >
          <div
            className="card-body profileWidth15p"
            style={{ backgroundColor: 'white' }}
          >
            <div className="line-bottom padding10">
              <h5 className="horizontal p-r-5">시작일</h5>
              <h4 className="horizontal p-r-5" />
            </div>
            <div className="line-bottom padding10">
              <h5 className="horizontal p-r-5">종료일</h5>
              <h4 className="horizontal p-r-5" />
            </div>
            <div className="line-bottom padding10">
              <h5 className="horizontal p-r-5">고객사</h5>
              <h4 className="horizontal p-r-5" />
            </div>
            <div className="line-bottom padding10">
              <h5 className="horizontal p-r-5">근무회사</h5>
              <h4 className="horizontal p-r-5" />
            </div>
            <div className="line-bottom padding10">
              <h5 className="horizontal p-r-5">개발분야</h5>

              <h4 className="horizontal p-r-5" />

              <h4 className="horizontal p-r-5" />
            </div>
            <div className="line-bottom padding10">
              <h5 className="horizontal p-r-5">역할</h5>
              <h4 className="horizontal p-r-5" />
            </div>
            <div className="line-bottom padding10">
              <h5 className="horizontal p-r-5">기종</h5>
              <h4 className="horizontal p-r-5" />
            </div>
            <div className="line-bottom padding10">
              <h5 className="horizontal p-r-5">OS</h5>
              <h4 className="horizontal p-r-5" />
            </div>
            <div className="line-bottom padding10">
              <h5 className="horizontal p-r-5">언어</h5>
              <h4 className="horizontal p-r-5" />
            </div>
            <div className="line-bottom padding10">
              <h5 className="horizontal p-r-5">DBMS</h5>
              <h4 className="horizontal p-r-5" />
            </div>
            <div className="line-bottom padding10">
              <h5 className="horizontal p-r-5">TOOL</h5>
              <h4 className="horizontal p-r-5" />
            </div>
            <div className="line-bottom padding10">
              <h5 className="horizontal p-r-5">통신</h5>
              <h4 className="horizontal p-r-5" />
            </div>
            <div className="padding10">
              <h5
                className="horizontal"
                style={{ color: 'rgb(150, 150, 150)' }}
              >
                기타
              </h5>
              <h4 className="horizontal">
                ${'{'}skill.etc{'}'}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProfileSkillInventoryComponent;