import React, { useEffect, useState } from 'react';
import '../../tools/css/template.css';
import DataTable, { TableColumn } from 'react-data-table-component';
import { useNavigate } from 'react-router-dom';
import SortIcon from '@material-ui/icons/ArrowDownward';
import { useQuery } from '@tanstack/react-query';
import classNames from 'classnames';
import { Button } from '@material-ui/core';
import Mainlayout from '../../tools/modules/MainLayout';
import AlertComponent from '../../tools/modules/alert/AlertComponent';
import useLoginStore from '../../tools/zustand/login.store.module';
import useProfileStore from '../../tools/zustand/profile.store.module';
import {
  GetTotalProfile,
  getProfileData,
} from '../../tools/service/ServiceAPI';
import { ProfileInfo } from '../../tools/model/ProfileInfo';
import { ProfileIndividualProps } from '../../tools/model/ProfileIndividualProps';
import { AccessProps } from '../../tools/model/AccessProps';
import { ParamType } from '../FormProfile';

function AccessCommuteComponent({ param }: ParamType) {
  const [members, setMembers] = useState<AccessProps[]>([]);
  const useLogin = useLoginStore();
  const useProfile = useProfileStore();
  const navigate = useNavigate();
  //   const { data, isSuccess, isLoading } = useQuery<ProfileInfo[]>({
  //     queryKey: ['getTotalData'],
  //     queryFn: GetTotalProfile,
  //     refetchOnWindowFocus: true,
  //     staleTime: 30000,
  //   });
  //   const indQuery = useQuery<ProfileIndividualProps>({
  //     queryKey: ['getProfileElseData'],
  //     queryFn: () => getProfileData(useLogin.userId),
  //     throwOnError: true,
  //   });

  //   useEffect(() => {
  //     if (!useLogin.isAuthorized) {
  //       AlertComponent({
  //         inputTitle: 'Auth Error',
  //         inputText: `로그인 되지 않았습니다. 로그인 화면으로 이동합니다`,
  //       });
  //       navigate('/login');
  //     } else {
  //       if (!isLoading) useProfile.setCurrentMember(data || []);
  //       if (indQuery.isSuccess) {
  //         useProfile.setIndProfileData(indQuery.data);
  //       }
  //     }
  //   }, [data]);

  const col: TableColumn<AccessProps>[] = [
    { selector: row => row.userName, name: '이름' },
    { selector: row => row.empNo, name: '사원번호' },
    { selector: row => row.enteranceTime, name: '출근일시' },
    { selector: row => row.leaveTime, name: '퇴근일시' },
    { selector: row => row.day, name: '요일' },
    { selector: row => row.accessPlace, name: '리더기 장소' },
    { selector: row => row.accessMode, name: '인증모드' },
    { selector: row => row.accessStatus, name: '인증상태' },
    { selector: row => row.accessType, name: '방식' },
    { selector: row => row.spot, name: '직급' },
    { selector: row => row.task, name: '부서' },
    { selector: row => row.timeTable, name: '타임테이블' },
    { selector: row => row.accessNum, name: '인증번호' },
    { selector: row => row.position, name: '직원 상태' },
  ];
  return (
    <div
      className={classNames('tab-pane fade', {
        'active show': param.activeTab === 'total',
      })}
      style={{ borderTop: '0 solid' }}
    >
      <div id="cardHeaderP" className="card-header">
        <h4 className="m-3 font-weight-bold text-primary d-inline-block">
          개인 출퇴근 기록
        </h4>
        <div id="btnGroupP" className="float-right" />
      </div>
      <div className="card-body">
        <div className="table-data__tool">
          <div className="table-data__tool-left" style={{ width: '80%' }}>
            {/* <div
                    style={{
                      border: '1px solid #b5b5b5',
                      padding: 3,
                      display: 'flex',
                    }}
                  ></div> */}
          </div>
          <div className="table-data__tool-right" style={{ marginBottom: 0 }}>
            <Button type="button" id="enter" className="btn btn-info">
              출근체크
            </Button>
            <Button type="button" id="out" className="btn btn-danger">
              퇴근체크
            </Button>
          </div>
        </div>
        <div className="table-responsive" style={{ overflow: 'auto' }}>
          <DataTable
            title="출퇴근 기록"
            columns={col}
            data={members}
            sortIcon={<SortIcon />}
            pagination
            onRowClicked={e => {}}
          />
        </div>
      </div>
    </div>
  );
}

export default AccessCommuteComponent;
