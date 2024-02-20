/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/heading-has-content */
import React from 'react';
import classNames from 'classnames';
import { ParamType } from './FormProfile';

function ProfileEducationComponent({ param }: ParamType) {
  return (
    <>
      <div
        className={classNames('tab-pane fade', {
          'active show': param.activeTab === 'edu',
        })}
        id="v-pills-education-icons"
        role="tabpanel"
        aria-labelledby="v-pills-education-tab-icons"
      >
        edu
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
          >
            <div className="span-title">
              <i className="fa fa-laptop" />
              <i className="fas fa-plus m-t-5" style={{ float: 'right' }} />
            </div>
          </div>
          <div
            // id="collapse${i.count}"
            className="collapse"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.03)' }}
          >
            <div className="card-body" style={{ backgroundColor: 'white' }}>
              <h5 className="horizontal" style={{ width: '30%' }}>
                시작일
              </h5>
              <h5 className="horizontal" style={{ width: '30%' }}>
                종료일
              </h5>
              <h5 className="horizontal" style={{ width: '30%' }}>
                기관
              </h5>
              <h5 className="horizontal" style={{ width: '30%' }} />
              <h5 className="horizontal" style={{ width: '30%' }} />
              <h5 className="horizontal" style={{ width: '30%' }} />
            </div>
          </div>
        </div>
      </div>
      <div
        className="tab-pane fade"
        id="v-pills-evidence-icons"
        role="tabpanel"
        aria-labelledby="v-pills-evidence-tab-icons"
      >
        <table className="table table-striped" style={{ width: '100%' }}>
          <thead className="thead-dark" style={{ border: '1px solid #000000' }}>
            <tr>
              <th scope="col">증빙서류 첨부파일</th>
            </tr>
          </thead>
          <tbody style={{ border: '1px solid #dee2e6' }}>
            <tr>
              <td>
                <h4 className="horizontal" style={{ marginRight: '3%' }}>
                  ${'{'}item{'}'}
                </h4>
                <i className="fas fa-download proNinfoArrow" />
                <i className="fas fa-trash-alt proNinfoArrow m-l-5" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
export default ProfileEducationComponent;
