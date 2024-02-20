/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import classNames from 'classnames';
import { ParamType } from '../FormProfile';

function ProfileLicenseComponent({ param }: ParamType) {
  return (
    <div
      className={classNames('tab-pane fade', {
        'active show': param.activeTab === 'license',
      })}
      id="v-pills-license-icons"
      role="tabpanel"
      aria-labelledby="v-pills-license-tab-icons"
    >
      <table className="table table-striped" style={{ width: '70%' }}>
        <thead className="thead-dark" style={{ border: '1px solid #000000' }}>
          <tr>
            <th scope="col" style={{ paddingLeft: 20 }}>
              자격증
            </th>
            <th scope="col">취득일</th>
          </tr>
        </thead>
        <tbody style={{ border: '1px solid #dee2e6' }}>
          <tr>
            <td style={{ paddingLeft: 20 }} />
            <td />
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default ProfileLicenseComponent;
