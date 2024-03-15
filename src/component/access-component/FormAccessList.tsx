import React, { useEffect, useState } from 'react';
import { TableColumn } from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Button } from '@material-ui/core';
import Mainlayout from '../../tools/modules/MainLayout';
import AlertComponent from '../../tools/modules/alert/AlertComponent';
import { GetTotalProfile } from '../../tools/service/ServiceAPI';
import { ProfileInfo } from '../../tools/model/ProfileInfo';
import { AccessProps } from '../../tools/model/AccessProps';
import AccessCommuteComponent from './AccessCommuteComponent';
import AccessPersonalComponent from './AccessPersonalComponent copy';
import { useIsAuth } from '../../tools/zustand/login.store.module';

function FormAccessList() {
  const [members, setMembers] = useState<AccessProps[]>([]);
  const navigate = useNavigate();
  const isAuth = useIsAuth();
  const { data, isSuccess, isLoading } = useQuery<ProfileInfo[]>({
    queryKey: ['getTotalData'],
    queryFn: GetTotalProfile,
    refetchOnWindowFocus: true,
    staleTime: 30000,
  });
  const [activeTab, setActiveTab] = useState('total');

  const param = { activeTab };

  const tabChangeHandler = (value: string) => {
    setActiveTab(value);
    param.activeTab = activeTab;
  };

  useEffect(() => {
    if (!isAuth) {
      AlertComponent({
        inputTitle: 'Auth Error',
        inputText: `로그인 되지 않았습니다. 로그인 화면으로 이동합니다`,
      });
      navigate('/login');
    } else {
      /* empty */
    }
  }, [data]);

  return (
    <Mainlayout>
      <div className="main-content">
        <div className="section__content section__content--p30">
          <ul className="nav nav-tabs" style={{ borderBottom: '0 solid' }}>
            <li className="tab_custom">
              <div
                className="nav-link non-active"
                style={{
                  borderColor: '#e9ecef #e9ecef #dee2e6',
                  backgroundColor: '#3333',
                }}
              >
                <Button
                  style={{ color: 'black' }}
                  id="allList"
                  onClick={() => {
                    tabChangeHandler('total');
                  }}
                >
                  전체 이력
                </Button>
              </div>
            </li>
            <li className="tab_custom">
              <div className="nav-link non-active">
                <Button
                  className="tab_active"
                  id="personalList"
                  type="button"
                  onClick={() => {
                    tabChangeHandler('personal');
                  }}
                >
                  개인 이력
                </Button>
              </div>
            </li>
          </ul>
          <div className="tab-content" id="v-pills-tabContent">
            <AccessCommuteComponent param={param} />
            <AccessPersonalComponent param={param} />
          </div>
        </div>
      </div>
    </Mainlayout>
  );
}

export default FormAccessList;
