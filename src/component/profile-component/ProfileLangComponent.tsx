/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import classNames from 'classnames';
import { ParamType } from '../FormProfile';

function ProfileLangComponent({ param }: ParamType) {
  return (
    <div
      className={classNames('tab-pane fade', {
        'active show': param.activeTab === 'lang',
      })}
      id="v-pills-skill-icons"
      role="tabpanel"
      aria-labelledby="v-pills-skill-tab-icons"
    >
      <table className="table table-striped" style={{ width: '70%' }}>
        <thead className="thead-dark" style={{ border: '1px solid #000000' }}>
          <tr>
            <th scope="col">보유기술 및 외국어</th>
            <th scope="col">숙련도(A,B,C)</th>
            <th scope="col">분류기준</th>
          </tr>
        </thead>
        <tbody style={{ border: '1px solid #dee2e6' }}>
          <tr>
            <td />
            <td>
              <span className="horizontal license_horizontal" />
              <span className="star" style={{ marginLeft: '-37%' }}>
                {' '}
                ★★★
              </span>

              <span className="horizontal license_horizontal" />
              <span className="star" style={{ marginLeft: '-37%' }}>
                {' '}
                ★★
              </span>
              <span style={{ color: '#a7a6a6' }}>★</span>
              <span className="horizontal license_horizontal" />
              <span className="star" style={{ marginLeft: '-37%' }}>
                {' '}
                ★
              </span>
              <span style={{ color: '#a7a6a6' }}>★★</span>
            </td>
            <td />
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default ProfileLangComponent;
