import React, { useEffect, useState } from 'react';
import '../tools/css/template.css';
import DataTable, { TableColumn } from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';
import SortIcon from '@material-ui/icons/ArrowDownward';
import { useQuery } from '@tanstack/react-query';
import Mainlayout from '../tools/modules/MainLayout';
import AlertComponent from '../tools/modules/alert/AlertComponent';
import useLoginStore from '../tools/zustand/login.store.module';
import useProfileStore from '../tools/zustand/profile.store.module';
import { GetTotalProfile } from '../tools/service/ServiceAPI';
import { ProfileInfo } from '../tools/model/ProfileInfo';

function FormLeaveList() {
  const [members, setMembers] = useState<ProfileInfo[]>([]);

  const { data, isLoading, isSuccess } = useQuery<ProfileInfo[]>({
    queryKey: ['getTotalData'],
    queryFn: GetTotalProfile,
  });
  const useLogin = useLoginStore();
  const useProfile = useProfileStore();
  const navigate = useNavigate();

  useEffect(() => {
    if (!useLogin.isAuthorized) {
      AlertComponent({
        inputTitle: 'Auth Error',
        inputText: `로그인 되지 않았습니다. 로그인 화면으로 이동합니다`,
      });
      navigate('/login');
    }

    if (!isLoading) {
      // leave ? total 중 leavedate IS NOT NULL 인 값
      useProfile.action.setLeaveMember(data || []);
    }
    if (isSuccess) {
      setMembers(useProfile.leave);
    }
  }, [data, useProfile.leave]);

  const col: TableColumn<ProfileInfo>[] = [
    { selector: row => row.empNo, name: '사원번호' },
    { selector: row => row.userId, name: 'ID' },
    { selector: row => row.userName, name: '이름' },
    { selector: row => row.emailAuth, name: '이메일' },
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
              <button type="button" className="btn btn-light">
                <i className="zmdi zmdi-search">
                  <a href="/member">사원 관리</a>
                </i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="section__content section__content--p30">
        <div className="card shadow mb-4">
          <div className="table-responsive" style={{ overflow: 'auto' }}>
            <DataTable
              title="퇴사자 관리"
              columns={col}
              data={members}
              //   defaultSortFieldId="empNo"
              sortIcon={<SortIcon />}
              pagination
              // selectableRows
            />
          </div>
        </div>
      </div>
    </Mainlayout>
  );
}

export default FormLeaveList;
