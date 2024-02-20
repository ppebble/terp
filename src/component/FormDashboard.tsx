import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import orgImg from '../tools/resources/images/icon/organization.png';
import '../tools/css/dashBoard.css';
import 'react-bootstrap';
import AlertComponent from '../tools/modules/alert/AlertComponent';
import useProfileStore from '../tools/zustand/profile.store.module';
import Mainlayout from '../tools/modules/MainLayout';
import { ProfileAttributes } from '../tools/redux/profile';
import DataColumnChart from '../tools/modules/chart/DataColumnChart';
import useLoginStore from '../tools/zustand/login.store.module';

import { LicenseDataType } from '../tools/modules/chart/DashboardLicenseData';
import { GetTotalProfile, getLicenseData } from '../tools/service/ServiceAPI';
import { useChartData } from '../tools/react-query/custom-hook/useDashChartData';

function FormDashboard() {
  const [memberCount, setMemberCount] = useState(0);

  const navigate = useNavigate();
  const { isAuthorized } = useLoginStore();
  const useProfile = useProfileStore();

  // profile 테이블 전체 값
  const totalRes = useQuery<ProfileAttributes[]>({
    queryKey: ['getTotalData'],
    queryFn: GetTotalProfile,
  });
  // profile.license 테이블 전체 값
  const licenseRes = useQuery<LicenseDataType[]>({
    queryKey: ['getLicenseData'],
    queryFn: getLicenseData,
  });

  useEffect(() => {
    if (!isAuthorized) {
      AlertComponent({
        inputTitle: 'Auth Error',
        inputText: `로그인 되지 않았습니다. 로그인 화면으로 이동합니다`,
      });
      navigate('/login');
    } else {
      if (totalRes.isError && licenseRes.isError) {
        AlertComponent({
          inputTitle: 'Network Error',
          inputText: `데이터 조회에 실패했습니다.`,
        });
      }
      if (!totalRes.isLoading) {
        useProfile.setTotalData(totalRes.data || []);
      }
      if (!totalRes.isLoading) {
        // current ? total 중 leavedate가 null인 값
        useProfile.setCurrentMember(useProfile.totalData);
      }
      if (totalRes.isSuccess) {
        setMemberCount(useProfile.current.length);
      }
      if (!licenseRes.isLoading) {
        useProfile.setLicenseData(licenseRes.data || []);
      }
    }
  }, [totalRes.data, licenseRes.data, useProfile.current]);
  const chartData = useChartData();

  return (
    <Mainlayout>
      <div className="col-lg-13">
        <div className="chart-card">
          <h3 className="title-2 tm-b-5" style={{ marginBottom: 15 }}>
            사내 조직도
          </h3>
          <div className="au-card-inner" id="chart-container">
            <div className="row no-gutters" style={{ maxWidth: '100%' }}>
              <div
                className="col-xl-10"
                style={{ marginLeft: 'auto', marginRight: 'auto' }}
              >
                <img src={orgImg} style={{ margin: 30 }} alt="org img" />
              </div>
              <div
                className="col-xl-2"
                style={{ marginLeft: '-12%', paddingLeft: '-5%' }}
              >
                <span id="chart-container2" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-12">
        <div
          className="chart-card"
          // onclick="move('profile')"
        >
          <div className="au-card-inner">
            <h3 className="title-2 tm-b-5">직원현황</h3>
            <h4
              style={{
                textAlign: 'center',
                marginBottom: 15,
                fontWeight: 'bolder',
                color: 'graytext',
              }}
            >
              총 인원 : {memberCount}명
            </h4>
            <div className="row no-gutters">
              <div className="col-xl-6">
                <canvas id="employee" />
                <DataColumnChart ChartOptions={chartData.memberChartData} />
              </div>
              <div className="col-xl-6">
                <canvas id="developer" />
                <DataColumnChart ChartOptions={chartData.techGradeChartData} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-12">
        <div
          className="chart-card"
          // onclick="move('license')"
        >
          <div className="au-card-inner">
            <h3 className="title-2 tm-b-5">인원별 자격증 현황</h3>
            <div className="row no-gutters" style={{ marginTop: '3%' }}>
              <div className="col-xl-12">
                <canvas id="license" />
                <DataColumnChart ChartOptions={chartData.licenseChartData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Mainlayout>
  );
}
export default FormDashboard;
