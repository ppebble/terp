/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { ParamType } from '../FormProfile';
import { useIndProfile } from '../../tools/zustand/profile.store.module';

function ProfileLangComponent({ param }: ParamType) {
  const personal = useIndProfile();
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
          {Array.from({ length: personal.abilityList.length || 0 }).map(
            (item, index) => (
              <tr key={personal.abilityList[index].skillName}>
                <td>{personal.abilityList[index].skillName}</td>
                <td>
                  <span className="horizontal license_horizontal" />
                  <span className="star">
                    {personal.abilityList[index].skillGrade === 'A'
                      ? '★★★'
                      : personal.abilityList[index].skillGrade === 'B'
                        ? '★★'
                        : personal.abilityList[index].skillGrade === 'C'
                          ? '★'
                          : ''}
                  </span>
                  <span style={{ color: '#a7a6a6' }}>
                    {personal.abilityList[index].skillGrade === 'A'
                      ? ''
                      : personal.abilityList[index].skillGrade === 'B'
                        ? '★'
                        : personal.abilityList[index].skillGrade === 'C'
                          ? '★★'
                          : ''}
                  </span>
                </td>
                <td>{personal.abilityList[index].classificationCriteria}</td>
              </tr>
            ),
          )}
        </tbody>
      </table>
    </div>
  );
}
export default ProfileLangComponent;
