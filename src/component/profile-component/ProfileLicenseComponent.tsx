/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import _ from 'lodash';
import { ParamType } from '../FormProfile';
import { useUserId } from '../../tools/zustand/login.store.module';
import { LicenseDataType } from '../../tools/modules/chart/DashboardLicenseData';
import { useLicense } from '../../tools/zustand/profile.store.module';

function ProfileLicenseComponent({ param }: ParamType) {
  const userId = useUserId();
  const license = useLicense();
  const [userData, setUserData] = useState<LicenseDataType[]>([]);
  useEffect(() => {
    setUserData(_.filter(license, { userId }));
  }, []);
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
          {Array.from({ length: userData.length || 0 }).map((item, index) => (
            <tr key={userData[index].licenseName}>
              <td style={{ paddingLeft: 20 }}>{userData[index].licenseName}</td>
              <td style={{ paddingLeft: 20 }}>{userData[index].licenseDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default ProfileLicenseComponent;
