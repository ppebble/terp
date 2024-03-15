import React, { useEffect, useState } from 'react';
import '../tools/css/template.css';
import DataTable, { TableColumn } from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';
import SortIcon from '@material-ui/icons/ArrowDownward';
import { useQuery } from '@tanstack/react-query';
import Mainlayout from '../tools/modules/MainLayout';
import AlertComponent from '../tools/modules/alert/AlertComponent';
// import useLoginStore from '../tools/zustand/login.store.module';
import { GetTotalProfile, getProfileData } from '../tools/service/ServiceAPI';
import { ProfileInfo } from '../tools/model/ProfileInfo';
import { ProfileIndividualProps } from '../tools/model/ProfileIndividualProps';
import LoadingSpinner from '../tools/modules/LoadingSpinner';
import { useIsAuth, useUserId } from '../tools/zustand/login.store.module';
import {
  useCurrent,
  useIndProfile,
  useProfileAction,
} from '../tools/zustand/profile.store.module';

function FormUserList() {
  const [members, setMembers] = useState<ProfileInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  //   const useLogin = useLoginStore();
  const isAuth = useIsAuth();
  const userId = useUserId();
  const profileAction = useProfileAction();
  const current = useCurrent();
  const personal = useIndProfile();
  const navigate = useNavigate();
  const {
    data: member,
    isSuccess,
    isPending,
  } = useQuery<ProfileInfo[]>({
    queryKey: ['getTotalData'],
    queryFn: GetTotalProfile,
    refetchOnWindowFocus: true,
    staleTime: 30000,
  });
  const indQuery = useQuery<ProfileIndividualProps>({
    queryKey: ['getProfileElseData'],
    queryFn: () => getProfileData(userId),
    throwOnError: true,
  });

  useEffect(() => {
    if (!isAuth) {
      AlertComponent({
        inputTitle: 'Auth Error',
        inputText: `로그인 되지 않았습니다. 로그인 화면으로 이동합니다`,
      });
      navigate('/login');
    } else {
      if (isPending) {
        setLoading(true);
      }
      if (isSuccess) {
        setLoading(false);
        profileAction.setCurrentMember(member || []);
        setMembers(current);
      }
      if (indQuery.isSuccess) {
        profileAction.setIndProfileData(indQuery.data);
      }
    }
  }, [member]);

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
              <div
                className="table-data__tool-left"
                style={{
                  border: '1px solid #b5b5b5',
                  padding: 15,
                  fontSize: 20,
                }}
              >
                <div className="horizontal">
                  <button type="button" className="btn btn-light">
                    <i className="zmdi zmdi-search">
                      <a href="/member/leave">퇴사자 관리</a>
                    </i>
                  </button>
                </div>
              </div>
              <div className="table-data__tool-right" style={{ padding: 10 }} />
            </div>
          </div>
        </div>
      </div>
      <div className="section__content section__content--p30">
        <div className="card shadow mb-4">
          <div className="table-responsive" style={{ overflow: 'auto' }}>
            {loading ? (
              <LoadingSpinner />
            ) : (
              <DataTable
                title="인력 사항"
                columns={col}
                data={members}
                sortIcon={<SortIcon />}
                selectableRows
                pagination
                onRowClicked={e => {
                  if (personal) {
                    if (userId !== e.userId) {
                      AlertComponent({
                        inputTitle: 'Auth Error',
                        inputText: `조회할 권한이 없습니다.`,
                      });
                      return false;
                    }
                    navigate('/member/profile');
                  }
                  return true;
                }}
              />
            )}
          </div>
        </div>
      </div>
    </Mainlayout>
  );
}

export default FormUserList;
