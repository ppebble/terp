import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Chart from 'react-apexcharts';
import orgImg from '../tools/resources/images/icon/organization.png';
import '../tools/css/dashBoard.css';
import 'react-bootstrap';
import { useAppSelector } from '../tools/redux/hook/useCustomHook';
import { RootState, useAppDispatch } from '../tools/redux/store';
import AlertComponent from '../tools/modules/alert/AlertComponent';
import useProfileStore, {
  ProfileInfo,
} from '../tools/zustand/profile.store.module';
import Mainlayout from '../tools/modules/MainLayout';
import { ProfileAttributes } from '../tools/redux/profile';
import DataColumnChart from '../tools/modules/chart/DataColumnChart';
import { fetchInitData } from '../tools/redux/init';
import memberOptions from '../tools/modules/chart/DashboardMemberData';
import useLoginStore from '../tools/zustand/login.store.module';

import ServiceUrls from '../tools/config/ServiceUrls';
import LicenseChartOptions, {
  LicenseDataType,
} from '../tools/modules/chart/DashboardLicenseData';
import TechGradeOptions from '../tools/modules/chart/DashboardTechGradeData';

function FormDashboard() {
  const [memberCount, setMemberCount] = useState(0);
  const navigate = useNavigate();
  //   const state = useAppSelector(
  //     (profileState: RootState) => profileState.profile,
  //   );
  const { isAuthorized } = useLoginStore();
  const useProfile = useProfileStore();

  const chartData = (chartOptions: any) => {
    return {
      options: chartOptions(),
      data: chartOptions().series,
      type: chartOptions().chart.type,
      height: chartOptions().chart.height,
    };
  };
  const memberChartData = chartData(memberOptions);
  const licenseChartData = chartData(LicenseChartOptions);
  const techGradeChartData = chartData(TechGradeOptions);
  useEffect(() => {
    if (!isAuthorized) {
      AlertComponent({
        inputTitle: 'Auth Error',
        type: 'custom',
        inputText: `로그인 되지 않았습니다. 로그인 화면으로 이동합니다`,
      });
      navigate('/login');
    } else {
      axios.get(`${ServiceUrls().localUrl}/member`).then(response => {
        const memberList: ProfileInfo[] = [...response.data];
        useProfile.setTotalData(memberList);
        useProfile.setCurrentMember([...memberList]);
      });
      setMemberCount(useProfile.current.length);
      axios
        .get(`${ServiceUrls().localUrl}/init`)
        .then(response => {
          const initDataList: LicenseDataType[] = [...response.data];
          useProfile.setLicenseData(initDataList);
        })
        .catch(e => {
          AlertComponent({
            inputTitle: 'Network Error',
            type: 'custom',
            inputText: `자격증 현황 조회에 실패했습니다.`,
          });
        });
    }
  }, []);
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
                <DataColumnChart ChartOptions={memberChartData} />
              </div>
              <div className="col-xl-6">
                <canvas id="developer" />
                <DataColumnChart ChartOptions={techGradeChartData} />
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
                <DataColumnChart ChartOptions={licenseChartData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Mainlayout>
  );
}
export default FormDashboard;
