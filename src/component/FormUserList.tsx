import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../tools/css/template.css';
// import AlertComponent from '../tools/modules/AlertComponent';
import { any } from 'prop-types';
import Mainlayout from '../tools/modules/MainLayout';
import TableComponent from '../tools/modules/TableComponent';
import TableRowComponent from '../tools/modules/TableRowComponent';
import ServiceUrls from '../tools/config/ServiceUrls';
import { fetchProfile } from '../tools/redux/profile';
import { RootState, useAppDispatch } from '../tools/redux/store';
import { useAppSelector } from '../tools/redux/hook/useCustomHook';

// interface ProfilesProps {
//   profiles: any;
//   get: any;
// }

function FormUserList() {
  const [members, setMembers] = useState([]);
  const [alert, setAlert] = useState({
    hasAlert: false,
    message: '',
    type: 'info',
  });

  // redux
  const state = useAppSelector(
    (profileState: RootState) => profileState.profile,
  );
  const dispatch = useAppDispatch();
  // const getProfile = React.useCallback(
  //   (profileState: RootState) =>
  // dispatch(getMember(profileState.profile.data)),
  //   [dispatch],
  // );

  // const getAPI = useCallback(async () => {
  //   const result = await axios.get(`${ServiceUrls().localUrl}/member`);
  //   // console.log("result.data: ", result.data.slice(1, 30));
  //   setMembers(result.data);
  // }, [`${ServiceUrls().localUrl}/member`]);
  // useEffect(() => {
  //   getAPI();
  // }, []);
  useEffect(() => {
    // axios
    //   .get(`${ServiceUrls().localUrl}/member`)
    //   .then(response => {
    //     setMembers(response.data);
    //     // getProfile(response.data);
    //     console.log(state);
    //   })
    //   .catch(error => {
    //     console.error('Error fetching data: ', error);
    //   });
    dispatch(fetchProfile()).then((response: any) => {
      setMembers(response.payload);
    });
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
    <>
      {/* <AlertComponent
        show={alert.hasAlert}
        setAlert={(
          flag: React.SetStateAction<{
            hasAlert: boolean;
            message: string;
            type: string;
          }>,
        ) => setAlert(flag)}
        message={alert.message}
        type={alert.type}
      /> */}
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
        {/* <TableComponent col={col}>
          {Array.from(members).map((item, index) => (
            <TableRowComponent
              length={col.length}
              i={col.map(e => {
                return e.key;
              })}
              data={item}
              rowcount={index}
              key={members[index]}
              id={members[index]}
            />
          ))}
        </TableComponent> */}
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
              {members.map((row, rowIndex) => (
                <tr key={row[rowIndex]}>
                  {col.map((column, colIndex) => (
                    <td key={column.key}>{row[column.key]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Mainlayout>
    </>
  );
}

export default FormUserList;
