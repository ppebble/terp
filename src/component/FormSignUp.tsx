/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useEffect, useRef, useState } from 'react';
import '../tools/css/template.css';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import moment from 'moment/moment';
import ServiceUrls from '../tools/config/ServiceUrls';
// import AlertComponent from '../tools/modules/AlertComponent';
import EduComponent from '../tools/EduComponent';
import ComboBoxComponent from '../tools/ComboBoxComponent';
import TextBlockDivide2Componet from '../tools/TextBlockDivide2Component';
import TextBlockDivide1Componet from '../tools/TextBlockDivide1Component';
import RadioComponent from '../tools/RadioComponent';

function FormSignIn() {
  const [alert, setAlert] = useState({
    hasAlert: false,
    message: '',
    type: 'info',
  });
  const spot = useRef<any>(null);
  const name = useRef<any>(null);
  const userId = useRef<any>(null);
  const password = useRef<any>(null);
  const regNoFront = useRef<any>(null);
  const regNoEnd = useRef<any>(null);
  const female = useRef<any>(null);
  const male = useRef<any>(null);
  const engName = useRef<any>(null);
  const dept = useRef<any>(null);
  const empNoF = useRef<any>(null);
  const empNoB = useRef<any>(null);
  const enterDate = useRef<any>(null);
  const famRelation = useRef<any>(null);
  const enlistmentDate = useRef<any>(null);
  const dischargeDate = useRef<any>(null);
  const militarySub = useRef<any>(null);
  const birthDay = useRef<any>(null);
  const contact = useRef<any>(null);
  const email = useRef<any>(null);
  const address = useRef<any>(null);
  const eduHis = useRef<any>(null);
  const techLvl = useRef<any>(null);
  const position = useRef<any>(null);
  const workType = useRef<any>(null);
  const workPlace = useRef<any>(null);
  const uniDate = useRef<any>(null);
  const uniMajor = useRef<any>(null);
  const uniSchool = useRef<any>(null);
  const uniFlag = useRef<any>(null);
  const gradDate = useRef<any>(null);
  const highSchool = useRef<any>(null);
  const highFlag = useRef<any>(null);
  const highDate = useRef<any>(null);
  const gradMajor = useRef<any>(null);
  const gradSchool = useRef<any>(null);
  const gradFlag = useRef<any>(null);
  const doubleMajor1 = useRef<any>(null);
  const doubleMajor2 = useRef<any>(null);
  const ntisNoF = useRef<any>(null);
  const ntisNoB = useRef<any>(null);

  const techLevelList = ['없음', '초급', '중급', '고급', '특급'];
  const spotList = [
    '주임',
    '대리',
    '과장',
    '차장',
    '부장',
    '이사',
    '상무',
    '대표',
    '회장',
  ];
  const positionList = [
    '-',
    'CEO',
    '사업부장',
    '본부장',
    '연구소장',
    '실장',
    '팀장',
    '파트장',
  ];
  const taskList = [
    'SC사업부',
    'SF&amp;신사업부',
    '경영팀',
    '기술개발본부',
    '기업부설연구소',
    '없음',
  ];
  const workTypeList = ['내근', '파견', '지사'];
  const initSelectItem = (itemList: any[]) => {
    const shape = { label: null, value: null };
    const initItems: any[] = [];
    itemList.forEach((item: null) => {
      const initItem = { ...shape };
      initItem.label = item;
      initItem.value = item;
      initItems.push(initItem);
    });
    return initItems;
  };
  useEffect(() => {}, []);
  const nowDate = moment().format('YYYY-MM-DD HH:mm:ss');
  const NotNullList = [userId, password, name];
  const [workPlaceOptions, setWorkPlaceOptions] = useState();
  const checkNull = (notNullList: string | any[]) => {
    for (let i = 0; i < notNullList.length; i += 1) {
      if (!notNullList[i].current.value) {
        setAlert({
          ...alert,
          hasAlert: true,
          message: ` 값이 비었습니다. ${notNullList[i].current.id} 는 필수값 입니다.`,
          type: 'validation',
        });
        return false;
      }
    }
    return true;
  };
  const Post = () => {
    const gender = male.current.checked
      ? male.current.value
      : female.current.value;
    const regNo = `${regNoFront.current.value}-${regNoEnd.current.value}`;
    const empNo = `${empNoF.current.value}-${empNoB.current.value}`;
    const param = {
      userId: userId.current.value,
      userPw: password.current.value,
      userName: name.current.value,
      residentNumber: regNo,
      gender,
      engName: engName.current.value,
      task: dept.current.value,
      empNo,
      hiredate: enterDate.current.value,
      family: famRelation.current.value,
      armyStart: enlistmentDate.current.value,
      armyEnd: dischargeDate.current.value,
      armyBranch: militarySub.current.value,
      birthday: birthDay.current.value,
      tel: contact.current.value,
      emergencyTel: contact.current.value,
      userEmail: email.current.value,
      address: address.current.value,
      // education: eduHis.current.value,
      techGrade: techLvl.current.value,
      position: position.current.value,
      spot: position.current.value,
      loc: workType.current.value,
      locDetail: workPlace.current.value,
      admincheck: 0,
      createTime: '',
    };
    param.createTime = nowDate;
    axios
      .post(`${ServiceUrls().localUrl}/member/save`, param)
      .then(response => {
        if (response.data === 'success') {
          setAlert({
            ...alert,
            hasAlert: true,
            message: `가입이 완료되었습니다.`,
            type: 'info',
          });
        } else {
          setAlert({
            ...alert,
            hasAlert: true,
            message: response.data,
            type: 'validation',
          });
        }
      })
      .catch(response => {
        setAlert({
          ...alert,
          hasAlert: true,
          message: response.message,
          type: 'access',
        });
      });
  };
  const onSaveClick = () => {
    const flag = checkNull(NotNullList);
    if (!flag) {
      return false;
    }
    Post();
    return true;
  };
  const onWorkTypeChangeHandler = (e: { value: any }) => {
    let valList: string[] = [];
    switch (e.value) {
      case '내근':
        valList = ['본사'];
        break;
      case '파견':
        valList = ['미라콤', '윤선생', '하나마이크론(안산)'];
        break;
      case '지사':
        valList = ['안산'];
        break;
      default:
        break;
    }
    let list: any = [];
    list = initSelectItem(valList);
    setWorkPlaceOptions(list);
  };

  const handleRegex = (e: { target: { id: any; value: string } }) => {
    let regex!: RegExp;
    let desc!: string;
    switch (e.target.id) {
      case 'reg_number_b':
        regex = /^[0-9]{0,7}$/;
        desc = '주민번호 뒷자리';
        break;
      case 'reg_number_f':
        regex = /^[0-9]{0,6}$/;
        desc = '주민번호 앞자리';
        break;
      case 'contact_number':
        regex = /^[0-9]{0,13}$/;
        desc = '연락처';
        break;
      default:
        break;
    }
    if (!regex.test(e.target.value)) {
      setAlert({
        ...alert,
        hasAlert: true,
        message: `입력 값이 올바르지 않습니다. ${desc}`,
        type: 'validation',
      });
      e.target.value = '';
    }
  };

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
      <div className="body">
        <form className="form">
          <TextBlockDivide1Componet
            label="아이디"
            id="user_id"
            ref1={userId}
            type="text"
            placeHolder=""
          />
          <br />
          <TextBlockDivide1Componet
            placeHolder=""
            id="password"
            label="암호"
            ref1={password}
            type="password"
          />
          <br />
          <TextBlockDivide1Componet
            label="이름"
            ref1={name}
            type="text"
            placeHolder=""
            id="user_name"
          />
          <br />
          <TextBlockDivide2Componet
            label="주민등록번호"
            handler={handleRegex}
            id1="reg_number_f"
            id2="reg_number_b"
            ref1={regNoFront}
            ref2={regNoEnd}
            type1="text"
            type2="text"
          />
          <br />
          <TextBlockDivide1Componet
            label="영문명"
            ref1={engName}
            type="text"
            placeHolder=""
            id="engName"
          />
          <br />
          <TextBlockDivide2Componet
            label="사원번호"
            id1="emp_no_f"
            id2="emp_no_b"
            ref1={empNoF}
            ref2={empNoB}
            type1="text"
            type2="text"
          />
          <br />
          <TextBlockDivide1Componet
            label="입사일"
            ref1={enterDate}
            placeHolder=""
            id="hiredate"
            type="date"
          />
          <br />
          <TextBlockDivide1Componet
            label="가족관계"
            ref1={famRelation}
            type="text"
            placeHolder=""
            id="family"
          />
          <br />
          <TextBlockDivide2Componet
            label="입대 / 제대 날짜"
            ref1={enlistmentDate}
            ref2={dischargeDate}
            type1="date"
            type2="date"
            id1="army_enter"
            id2="army_end"
          />
          <br />
          <TextBlockDivide1Componet
            label="병과"
            ref1={militarySub}
            type="text"
            placeHolder=""
            id="army_branch"
          />
          <RadioComponent
            label="성별"
            val1="남자"
            ref1={male}
            val2="여자"
            ref2={female}
            onChangeHandler={undefined}
          />
          <br />
          <TextBlockDivide1Componet
            label="생일"
            ref1={birthDay}
            type="date"
            placeHolder=""
            id="birth"
          />
          <br />
          <TextBlockDivide1Componet
            label="연락처"
            ref1={contact}
            id="contact_number"
            placeHolder="-을 제외하고 숫자만 작성해주세요"
            type="number"
          />
          <TextBlockDivide1Componet
            label="이메일"
            ref1={email}
            type="text"
            placeHolder=""
            id="user_email"
          />
          <br />
          <TextBlockDivide1Componet
            label="주소"
            ref1={address}
            type="text"
            placeHolder=""
            id="address"
          />
          <br />
          <ComboBoxComponent
            label="기술등급"
            ref1={techLvl}
            options={initSelectItem(techLevelList)}
          />
          <br />
          {/* <TextBlockDivide1Componet
            label="사진첨부"
            type="file"
            // ref1="d"
            placeHolder=""
            id=""
          /> */}
          <br />
          <ComboBoxComponent
            label="직급"
            ref1={spot}
            options={initSelectItem(spotList)}
          />
          <ComboBoxComponent
            label="직책"
            ref1={position}
            options={initSelectItem(positionList)}
          />
          <ComboBoxComponent
            label="부서"
            ref1={dept}
            options={initSelectItem(taskList)}
          />
          <TextBlockDivide2Componet
            label="과학기술번호"
            ref1={ntisNoF}
            ref2={ntisNoB}
            type1="number"
            type2="number"
            id1="ntisf"
            id2="ntisb"
          />
          <br />
          <ComboBoxComponent
            label="근무 형태"
            ref1={workType}
            handler={onWorkTypeChangeHandler}
            options={initSelectItem(workTypeList)}
          />
          <br />
          <ComboBoxComponent
            label="근무지"
            ref1={workPlace}
            options={workPlaceOptions}
          />
          <EduComponent
            school="고등학교"
            refGradDate={highDate}
            refGradFlag={highFlag}
            refSchool={highSchool}
            refMajor={null}
          />
          <EduComponent
            school="대학교"
            refGradDate={uniDate}
            refGradFlag={uniFlag}
            refMajor={uniMajor}
            refSchool={uniSchool}
          />
          <EduComponent
            school="대학원"
            refGradDate={gradDate}
            refGradFlag={gradFlag}
            refMajor={gradMajor}
            refSchool={gradSchool}
          />
          <TextBlockDivide1Componet
            ref1={doubleMajor1}
            label="복수전공1"
            type="text"
            placeHolder=""
            id="doubleMajor1"
          />
          <TextBlockDivide1Componet
            ref1={doubleMajor2}
            label="복수전공2"
            type="text"
            placeHolder=""
            id="doubleMajor2"
          />
          <br />
          <Button className="inputInfo" onClick={onSaveClick}>
            제출
          </Button>
        </form>
      </div>
    </>
  );
}
export default FormSignIn;