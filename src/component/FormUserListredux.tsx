import React, { useEffect, useState } from 'react';
import '../tools/css/template.css';
import DataTable, { TableColumn } from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';
import SortIcon from '@material-ui/icons/ArrowDownward';
import Mainlayout from '../tools/modules/MainLayout';
import { ProfileAttributes, fetchProfile } from '../tools/redux/profile';
import { RootState, useAppDispatch } from '../tools/redux/store';
import { useAppSelector } from '../tools/redux/hook/useCustomHook';
import AlertComponent from '../tools/modules/alert/AlertComponent';

function FormUserList() {
  const [members, setMembers] = useState<ProfileAttributes[]>([]);

  const state = useAppSelector(
    (profileState: RootState) => profileState.profile,
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state.value.isAuthorized) {
      AlertComponent({
        inputTitle: 'Auth Error',
        inputText: `로그인 되지 않았습니다. 로그인 화면으로 이동합니다`,
      });
      navigate('/login');
    } else {
      dispatch(fetchProfile()).then((response: any) => {
        if (!response.payload) {
          return false;
        }
        const memberList: ProfileAttributes[] = [...state.data];
        for (let i = 0; i < memberList.length; i += 1) {
          if (memberList[i].leavedate) {
            memberList.splice(i, 1);
            i -= 1;
          }
        }
        setMembers(memberList);
        return true;
      });
    }
  }, [dispatch, navigate, state.data, state.value.isAuthorized]);

  const col: TableColumn<ProfileAttributes>[] = [
    { selector: row => row.empNo, name: '사원번호' },
    { selector: row => row.userId, name: 'ID' },
    { selector: row => row.userName, name: '이름' },
    { selector: row => row.userEmail, name: '이메일' },
    { selector: row => row.tel, name: '연락처', width: '150px' },
    { selector: row => row.position, name: '직책' },
    { selector: row => row.spot, name: '직급' },
    { selector: row => row.task, name: '부서' },
    { selector: row => row.techGrade, name: '기술등급' },
    {
      selector: row => row.scienceTechCertify,
      name: '과학기술인등록번호',
      width: '150px',
    },
    { selector: row => row.locDetail, name: '근무지' },
    { selector: row => row.hiredate, name: '입사일' },
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
        <DataTable
          title="인력 사항"
          columns={col}
          data={members}
          //   defaultSortFieldId="empNo"
          sortIcon={<SortIcon />}
          pagination
          selectableRows
        />
      </div>
    </Mainlayout>
  );
}

export default FormUserList;
