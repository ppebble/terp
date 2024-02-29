import React, { MouseEvent, useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import '../css/styles.css';
import { Button, CloseButton } from 'react-bootstrap';
import 'setimmediate';
import AlertComponent from './alert/AlertComponent';

interface FindIdModalType {
  onClose: () => void;
  findItemType: boolean;
}

function FindIdComponent({ onClose, findItemType }: FindIdModalType) {
  const [beforeSearch, setBeforeSearch] = useState(true);
  const [searchId, setSearchId] = useState('');
  const [certMailNum, setCertMailNum] = useState('');
  const [sendFlag, setSendFlag] = useState(false);
  //   const transporter = nodemailer.createTransport({
  //     service: 'outlook',
  //     port: 587,
  //     host: 'mail.nexmore.co.kr',
  //     auth: {
  //       user: 'jwlee@nexmore.co.kr',
  //       pass: 'nex147200',
  //     },
  //   });

  const onSearchId = () => {
    // Get ... Member Repository에서 findByEmail 로 조회된 member의 id 리턴..

    setSearchId('response.data.userId');
    setBeforeSearch(false);
  };
  const pwEmail = useRef<any>('');
  const inputCertNum = useRef<any>('');
  const onSendCertMail = () => {
    const auth = Math.floor(Math.random() * 9999);
    setCertMailNum(auth.toString());
    setSendFlag(true);
    // transporter.sendMail({
    //   from: 'nex-erp',
    //   to: pwEmail.current.value,
    //   subject: 'Nex-Erp 비밀번호 찾기 안내',
    //   text: `인증번호는 ${certMailNum} 입니다. 인증번호 재요청은 5분 후에 할 수 있습니다.`,
    // });
  };
  const onCertAfter = () => {
    if (sendFlag) {
      if (certMailNum === inputCertNum.current.value) {
        setBeforeSearch(false);
      } else {
        // 인증번호가 올바르지 않습니다
        AlertComponent({
          inputTitle: '메일 발송 실패',
          inputText: `인증번호가 올바르지 않습니다.`,
        });
      }
    } else {
      // 인증메일을 발송하지 않았습니다.
      AlertComponent({
        inputTitle: '메일 발송 실패',
        inputText: `인증메일을 발송하지 않았습니다.`,
      });
    }
    // 인증메일 발송 후 입력한 인증번호와 메일의 인증번호가 같아야함
  };
  useEffect(() => {}, []);
  return (
    <>
      <div
        id="id-area"
        className={classNames({ 'pwd-content': !findItemType })}
      >
        <div className="card" style={{ width: '500px', height: '500px' }}>
          <div className="card">
            <div className="card-header">
              <strong>아이디 찾기</strong>
            </div>
            <div className="card-body card-block">
              <div
                className={classNames({ 'pwd-content': beforeSearch })}
                style={{ margin: 'auto', padding: '30px 0' }}
              >
                <h5>해당 이메일로 등록된 ID는</h5>
                <h5>{searchId}</h5>
                <h5>입니다.</h5>
              </div>
              <div
                className={classNames('form-group idFindStep1', {
                  'pwd-content': !beforeSearch,
                })}
              >
                <label
                  htmlFor="user_email_for_id"
                  className=" form-control-label"
                >
                  이메일 주소
                </label>
                <input
                  className="form-control"
                  id="user_email_for_id"
                  type="text"
                />
              </div>
            </div>
            <div
              className={classNames('card-footer idFindStep1', {
                'pwd-content': beforeSearch,
              })}
            >
              <Button
                type="button"
                className="btn btn-warning btn-nm"
                style={{ marginRight: '6px' }}
                id="nextStep_for_id"
                onClick={onSearchId}
              >
                <i className="far fa-circle" /> 비밀번호 찾기
              </Button>
              <Button
                type="button"
                className="btn btn-primary btn-nm"
                onClick={onClose}
                id="cancel"
              >
                <i className="fa fa-ban" /> 로그인하기
              </Button>
            </div>
            <div
              className={classNames('card-footer idFindStep1', {
                'pwd-content': !beforeSearch,
              })}
            >
              <Button
                type="button"
                className="btn btn-primary btn-nm"
                style={{ marginRight: '6px' }}
                id="nextStep_for_id"
                onClick={onSearchId}
              >
                <i className="far fa-circle" /> 확인
              </Button>
              <Button
                type="button"
                className="btn btn-danger btn-nm"
                onClick={onClose}
                id="cancel"
              >
                <i className="fa fa-ban" /> 취소
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div id="pw-area" className={classNames({ 'pwd-content': findItemType })}>
        <div className="card" style={{ width: '500px', height: '500px' }}>
          <div
            className={classNames('card-body card-block', {
              'pwd-content': !beforeSearch,
            })}
          >
            <div className="card-header">
              <strong>비밀번호 찾기</strong>
            </div>
            <div className="form-group">
              <label className=" form-control-label" htmlFor="user_id">
                아이디
              </label>
              <input className="form-control" id="user_id" type="text" />
            </div>
            <div className="form-group">
              <label
                className=" form-control-label"
                htmlFor='"user_email_for_pwd"'
                ref={pwEmail}
              >
                이메일 주소
              </label>
              <input
                className="form-control"
                id="user_email_for_pwd"
                type="text"
              />
            </div>
            <div className="form-group">
              <label className=" form-control-label" htmlFor="time_for_pwd">
                인증번호
              </label>
              <span id="timer_for_pwd" style={{ float: 'right' }} />
              <div className="input-group">
                <input
                  ref={inputCertNum}
                  className="form-control"
                  id="email_auth_for_pwd"
                  type="text"
                />
                <div className="input-group-append">
                  <Button
                    type="button"
                    className="btn btn-warning btn-nm"
                    style={{ float: 'inherit', marginLeft: '8px' }}
                    id="sendMail_for_pwd"
                    onClick={onSendCertMail}
                  >
                    인증메일 전송
                  </Button>
                </div>
              </div>
            </div>
            <div
              className={classNames('form-group idFindStep1', {
                'pwd-content': !beforeSearch,
              })}
            >
              <Button
                type="button"
                className="btn btn-primary btn-nm"
                style={{ marginRight: '6px' }}
                id="nextStep_for_id"
                onClick={onCertAfter}
              >
                <i className="far fa-circle" /> 확인
              </Button>
              <Button
                type="button"
                className="btn btn-danger btn-nm"
                onClick={onClose}
                id="cancel"
              >
                <i className="fa fa-ban" /> 취소
              </Button>
            </div>
          </div>
          <div
            className={classNames({
              'pwd-content': beforeSearch,
            })}
            id="after"
          >
            <div className="card-header">
              <strong>새로운 비밀번호</strong>
            </div>
            <div className="card-body card-block">
              <div className="form-group newPwd">
                <label className=" form-control-label" htmlFor="pw">
                  새로운 비밀번호
                </label>
                <input
                  className="form-control"
                  id="pw"
                  type="password"
                  placeholder="8 ~ 16자 사이의 문자,숫자,특수문자 조합으로 입력해주세요."
                />
              </div>
              <div className="form-group newPwd">
                <label className=" form-control-label" htmlFor="pw2">
                  새로운 비밀번호 확인
                </label>
                <input
                  className="form-control"
                  id="pw2"
                  type="password"
                  placeholder="8 ~ 16자 사이의 문자,숫자,특수문자 조합으로 입력해주세요."
                />
              </div>
            </div>
            <div className="card-footer">
              <Button
                type="button"
                className="btn btn-primary btn-nm"
                style={{ marginRight: '6px' }}
                id="nextStep_for_id"
                onClick={onSearchId}
              >
                <i className="far fa-circle" /> 변경
              </Button>
              <Button
                type="button"
                className="btn btn-danger btn-nm"
                onClick={onClose}
                id="cancel"
              >
                <i className="fa fa-ban" /> 취소
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default FindIdComponent;
