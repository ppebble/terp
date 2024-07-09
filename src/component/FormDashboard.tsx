import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import orgImg from '../tools/resources/images/icon/organization.png';
import '../tools/css/dashBoard.css';
import 'react-bootstrap';
import AlertComponent from '../tools/modules/alert/AlertComponent';
import Mainlayout from '../tools/modules/MainLayout';
import DataColumnChart from '../tools/modules/chart/DataColumnChart';

import { useChartData } from '../tools/react-query/custom-hook/useDashChartData';
import { useMainboardQuery } from '../tools/react-query/custom-hook/useCustomHook';
import { useIsAuth } from '../tools/zustand/login.store.module';
import useProfileStore, {
  useCurrent,
  useProfileAction,
  useTotalData,
} from '../tools/zustand/profile.store.module';

function FormDashboard() {
  const [memberCount, setMemberCount] = useState(0);
  const profileAction = useProfileAction();
  const useStore = useProfileStore();
  const current = useCurrent();
  const total = useTotalData();
  const navigate = useNavigate();
  const isAuthorized = useIsAuth();

  //   // profile 테이블 전체 값
  //   const totalRes = useQuery<ProfileInfo[]>({
  //     queryKey: ['getTotalData'],
  //     queryFn: GetTotalProfile,
  //   });
  //   // profile.license 테이블 전체 값
  //   const licenseRes = useQuery<LicenseDataType[]>({
  //     queryKey: ['getLicenseData'],
  //     queryFn: getLicenseData,
  //   });
  const useDashboard = useMainboardQuery();

  useEffect(() => {
    if (!isAuthorized) {
      AlertComponent({
        inputTitle: 'Auth Error',
        inputText: `로그인 되지 않았습니다. 로그인 화면으로 이동합니다`,
      });
      navigate('/login');
    } else {
      if (useDashboard.res.error) {
        AlertComponent({
          inputTitle: 'Network Error',
          inputText: `데이터 조회에 실패했습니다.`,
        });
      }
      if (!useDashboard.res.pending) {
        useStore.action.setTotalData(useDashboard.res.data[2] || []);
        useStore.action.setCurrentMember(total);
        setMemberCount(current.length);
        useStore.action.setLicenseData(useDashboard.res.data[0] || []);
      }
    }
  }, [useDashboard.res.data, current]);
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
