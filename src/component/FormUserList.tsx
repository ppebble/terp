import React, { useEffect, useState } from 'react';
import '../tools/css/template.css';
import { useNavigate } from 'react-router-dom';
import Mainlayout from '../tools/modules/MainLayout';
import { fetchProfile } from '../tools/redux/profile';
import { RootState, useAppDispatch } from '../tools/redux/store';
import { useAppSelector } from '../tools/redux/hook/useCustomHook';
import AlertComponent from '../tools/modules/alert/AlertComponent';

function FormUserList() {
  const [members, setMembers] = useState([]);

  const state = useAppSelector(
    (profileState: RootState) => profileState.profile,
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state.value.isAuthorized) {
      AlertComponent({
        inputTitle: 'Auth Error',
        type: 'custom',
        inputText: `로그인 되지 않았습니다. 로그인 화면으로 이동합니다`,
      });
      navigate('/login');
    } else {
      dispatch(fetchProfile()).then((response: any) => {
        if (!response.payload) {
          return false;
        }
        setMembers(response.payload);
        return true;
      });
    }
  }, []);

  const col = [
    { key: 'empNo', name: '사원번호' },
    { key: 'userId', name: 'ID' },
    { key: 'userName', name: '이름' },
    { key: 'userEmail', name: '이메일' },
    { key: 'tel', name: '연락처' },
    { key: 'position', name: '직책' },
    { key: 'spot', name: '직급' },
    { key: 'task', name: '부서' },
    { key: 'techGrade', name: '기술등급' },
    { key: 'scienceTechCertify', name: '과학기술인등록번호' },
    { key: 'locDetail', name: '근무지' },
    { key: 'hiredate', name: '입사일' },
  ];
  return (
    <Mainlayout>
      <div className="section__content section__content--p30">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h3 className="m-3 font-weight-bold text-primary d-inline-block">
              Profiles
            </h3>
            <div id="btnGroup" className="float-right" />
          </div>
          <div className="card-body">
            <div className="table-data__tool">
              <div
                className="table-data__tool-left"
                style={{
                  border: '1px solid #b5b5b5',
                  padding: 15,
                  fontSize: 20,
                }}
              >
                <div className="horizontal">
                  자격증명 :
                  <input
                    style={{ border: '1px solid #b5b5b5', marginLeft: 10 }}
                    className="au-input au-input--xl selectBox"
                    type="text"
                    placeholder="검색 단어 포함"
                    id="license_name"
                    name="license_name"
                    maxLength={30}
                  />
                  <button
                    type="button"
                    className="btn btn-light"
                    // onClick={redux}
                  >
                    <i className="zmdi zmdi-search">자격증 소지자 검색</i>
                  </button>
                </div>
              </div>
              <div className="table-data__tool-right" style={{ padding: 10 }}>
                <button type="button" className="btn btn-light">
                  <i className="zmdi zmdi-search">
                    <a href="/profile/profileForm?menu=leave">퇴사자 관리</a>
                  </i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="table-responsive" style={{ overflow: 'auto' }}>
        <table
          className="table table-bordered table-striped 
            table-hover text-nowrap library"
          id="dataTable"
          width="100%"
          cellSpacing="0"
        >
          <thead>
            <tr style={{ backgroundColor: '#D6D6D6' }}>
              {col.map((column, index) => (
                <th key={column.key}>{column.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {members.map((row: any, rowIndex) => (
              <tr key={row.userId}>
                {col.map((column, colIndex) => (
                  <td key={column.key}>{row[column.key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Mainlayout>
  );
}

export default FormUserList;
