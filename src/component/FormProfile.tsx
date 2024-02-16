/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import Mainlayout from '../tools/modules/MainLayout';
import userIcon from '../tools/resources/images/user-shape.png';
import dexcel from '../tools/resources/images/icon/dexcel.gif';
import ProfileBasicComponent from './profile-component/ProfileBasicComponent';
import ProfileCareerComponent from './profile-component/ProfileCareerComponent';
import ProfileLicenseComponent from './profile-component/ProfileLicenseComponent';
import ProfileEducationComponent from './ProfileEducationComponent';
import ProfileLangComponent from './profile-component/ProfileLangComponent';
import ProfileSkillInventoryComponent from './profile-component/ProfileSkillInventoryComponent';
import ProfileTabComponent from './profile-component/ProfileTabComponent';

export type ParamType = {
  param: { activeTab: string };
};

function FormProfile() {
  const [activeTab, setActiveTab] = useState('basic');
  const param = { activeTab };
  const tabChangeHandler = (value: string) => {
    setActiveTab(value);
    param.activeTab = activeTab;
  };
  return (
    <Mainlayout>
      <div className="section__content section__content--p30">
        <div className="card">
          <div
            className="card-header"
            style={{ backgroundColor: 'transparent' }}
          >
            <span className="image">
              <img
                style={{ width: 70, height: 70 }}
                src={userIcon}
                alt="userIcon"
              />
            </span>
            <label
              className="profile-title"
              style={{ fontSize: 18, fontWeight: 400 }}
              htmlFor="profile"
            >
              {}님의 정보
            </label>
            <span>
              <button className="btn btn-success btn-sm">
                <img alt="btn" src={dexcel} />
              </button>
            </span>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-12 col-md-3">
                <ProfileTabComponent
                  activeTab={activeTab}
                  tabChangeHandler={tabChangeHandler}
                />
              </div>
              <div className="col-12 col-md-9">
                <div className="tab-content" id="v-pills-tabContent">
                  <ProfileBasicComponent param={param} />
                  <ProfileCareerComponent param={param} />
                  <ProfileLicenseComponent param={param} />
                  <ProfileEducationComponent param={param} />
                  <ProfileLangComponent param={param} />
                  <ProfileSkillInventoryComponent param={param} />
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <button
              className="btn btn-success btn-sm"
              type="submit"
              style={{ float: 'right' }}
              // onClick="modify('${profileInfo[0].number}')"
            >
              수정
            </button>
            <div className="fr">
              <button className="btn btn-info btn-sm">목록으로</button>
            </div>
          </div>
        </div>
      </div>
    </Mainlayout>
  );
}
export default FormProfile;
