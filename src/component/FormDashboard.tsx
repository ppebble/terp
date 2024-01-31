import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import orgImg from '../tools/resources/images/icon/organization.png';
import '../tools/css/dashBoard.css';
import 'react-bootstrap';
import { useAppSelector } from '../tools/redux/hook/useCustomHook';
import { RootState } from '../tools/redux/store';
import AlertComponent from '../tools/modules/alert/AlertComponent';

function FormDashboard() {
  const navigate = useNavigate();
  const state = useAppSelector(
    (profileState: RootState) => profileState.profile,
  );
  useEffect(() => {
    if (!state.value.isAuthorized) {
      AlertComponent({
        inputTitle: 'Auth Error',
        type: 'custom',
        inputText: `로그인 되지 않았습니다. 로그인 화면으로 이동합니다`,
      });
      navigate('/login');
    }
  }, [navigate, state.value.isAuthorized]);
  return (
    <div className="main-content">
      <div className="section__content section__content--p30">
        <div className="container-fluid">
          <div className="col-lg-13">
            <div className="au-card chart-percent-card sort">
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
              className="au-card chart-percent-card sort"
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
                  총 인원 : ${'{'}profileSpotCount.j{'}'} 명
                </h4>
                <div className="row no-gutters">
                  <div className="col-xl-6">
                    <canvas id="employee" />
                  </div>
                  <div className="col-xl-6">
                    <canvas id="developer" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div
              className="au-card chart-percent-card sort"
              // onclick="move('license')"
            >
              <div className="au-card-inner">
                <h3 className="title-2 tm-b-5">인원별 자격증 현황</h3>
                <div className="row no-gutters" style={{ marginTop: '3%' }}>
                  <div className="col-xl-12">
                    <canvas id="license" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <canvas
            id="stateOfEquip"
            // onclick="event.cancelBubble=true"
          />

          {/*                             </div> */}
          {/*                             <div class="col-xl-6"> */}

          <canvas
            id="equipment"
            // onclick="event.cancelBubble=true"
          />

          <canvas
            id="stateOfBooks"
            // onclick="event.cancelBubble=true"
          />
          <canvas id="books" />
        </div>
      </div>
    </div>
  );
}
export default FormDashboard;
