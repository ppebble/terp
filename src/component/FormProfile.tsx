/* eslint-disable jsx-a11y/heading-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
import React, { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import Mainlayout from '../tools/modules/MainLayout';
import userIcon from '../tools/resources/images/user-shape.png';
import dexcel from '../tools/resources/images/icon/dexcel.gif';
import ProfileBasicComponent from './profile-component/ProfileBasicComponent';
import ProfileCareerComponent from './profile-component/ProfileCareerComponent';
import ProfileLicenseComponent from './profile-component/ProfileLicenseComponent';
import ProfileEducationComponent from './profile-component/ProfileEducationComponent';
import ProfileLangComponent from './profile-component/ProfileLangComponent';
import ProfileSkillInventoryComponent from './profile-component/ProfileSkillInventoryComponent';
import ProfileTabComponent from './profile-component/ProfileTabComponent';
import { ProfileIndividualProps } from '../tools/model/ProfileIndividualProps';
import { getProfileData } from '../tools/service/ServiceAPI';
import useLoginStore from '../tools/zustand/login.store.module';
import AlertComponent from '../tools/modules/alert/AlertComponent';
import useProfileStore from '../tools/zustand/profile.store.module';

export type ParamType = {
  param: { activeTab: string; data?: ProfileIndividualProps | undefined };
};
function FormProfile() {
  const { userId, username } = useLoginStore();
  const profileStore = useProfileStore();

  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('basic');
  const param = { activeTab, data: {} as ProfileIndividualProps };

  useEffect(() => {
    // if (profileStore.indProfileData) {
    //   if (profileStore.selectedUser !== userId) {
    //     AlertComponent({
    //       inputTitle: 'Auth Error',
    //       inputText: `조회할 권한이 없습니다.`,
    //       onClose: () => {
    //         navigate(-1);
    //       },
    //     });
    //   }
    // }
  }, []);

  const tabChangeHandler = (value: string) => {
    setActiveTab(value);
    param.activeTab = activeTab;
  };
  const onClickBack = () => {
    navigate(-1);
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
              style={{ fontSize: 22, fontWeight: 'bolder' }}
              htmlFor="profile"
            >
              {username}님의 정보
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
              onClick={() => {
                navigate('/member/profile/edit');
              }}
            >
              수정
            </button>
            <div className="fr">
              <button className="btn btn-info btn-sm" onClick={onClickBack}>
                목록으로
              </button>
            </div>
          </div>
        </div>
      </div>
    </Mainlayout>
  );
}
export default FormProfile;
