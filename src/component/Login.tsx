import React, { useEffect } from 'react';
import './styles.css';

function LoginComponent() {
  useEffect(() => {}, []);

  const findPw = () => {};

  const doLogin = () => {};

  return (
    <div>
      <div className="page-wrapper">
        <div className="page-content--bge5">
          <div className="container">
            <div className="login-wrap" id="login-wrap">
              <div className="pwd-content" id="findId">
                <div className="card">
                  <div className="card-header">
                    <strong>아이디 찾기</strong>
                  </div>
                  <div className="card-body card-block">
                    <div
                      className="row idFindStep2"
                      style={{ margin: 'auto', padding: '30px 0' }}
                    >
                      <h5>요청하신 ID는</h5>
                      <h5>입니다.</h5>
                    </div>
                    <div className="form-group idFindStep1">
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
                  <div className="card-footer idFindStep2">
                    <button
                      type="button"
                      onClick={findPw}
                      className="btn btn-warning waves-effect waves-light m-r-10"
                    >
                      비밀번호 찾기
                    </button>
                    <button
                      type="button"
                      onClick={doLogin}
                      className="btn btn-primary waves-effect waves-light"
                    >
                      로그인하기
                    </button>
                  </div>
                  <div className="card-footer idFindStep1">
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      id="nextStep_for_id"
                    >
                      <i className="far fa-circle" /> 확인
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm"
                      id="cancel"
                    >
                      <i className="fa fa-ban" /> 취소
                    </button>
                  </div>
                </div>
              </div>
              <div className="pwd-content" id="findPwd">
                <div className="card">
                  <div className="card-header">
                    <strong>비밀번호 찾기</strong>
                  </div>
                  <div className="card-body card-block">
                    <div className="form-group">
                      <label className=" form-control-label" htmlFor="user_id">
                        아이디
                      </label>
                      <input
                        className="form-control"
                        id="user_id"
                        type="text"
                      />
                    </div>
                    <div className="form-group">
                      <label
                        className=" form-control-label"
                        htmlFor='"user_email_for_pwd"'
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
                      <label
                        className=" form-control-label"
                        htmlFor="time_for_pwd"
                      >
                        인증번호
                      </label>
                      <span id="timer_for_pwd" style={{ float: 'right' }} />
                      <div className="input-group">
                        <input
                          className="form-control"
                          id="email_auth_for_pwd"
                          type="text"
                        />
                        <div className="input-group-append">
                          <button
                            type="button"
                            className="btn btn-warning btn-sm"
                            style={{ float: 'inherit' }}
                            id="sendMail_for_pwd"
                          >
                            인증메일 전송
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-footer">
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      id="nextStep_for_pwd"
                    >
                      <i className="far fa-circle" /> 확인
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm"
                      id="cancel_find_pwd"
                    >
                      <i className="fa fa-ban" /> 취소
                    </button>
                  </div>
                </div>
              </div>
              <div className="pwd-content" id="pwd-content">
                <div className="card">
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
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      id="pwUpdate"
                    >
                      <i className="far fa-circle" /> 확인
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm"
                      id="cancel2"
                    >
                      <i className="fa fa-ban" /> 취소
                    </button>
                  </div>
                </div>
              </div>
              <div className="login-content" id="login-content">
                <div className="login-logo">
                  {' '}
                  <img src="/resources/images/icon/logo.png" alt="NEXMORE" />
                </div>
                <div className="login-form">
                  <form id="info">
                    <div className="form-group">
                      <label htmlFor="id">ID</label>{' '}
                      <input
                        className="au-input au-input--full"
                        type="text"
                        id="id"
                        placeholder="ID"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="pwd">Password</label>{' '}
                      <input
                        className="au-input au-input--full"
                        type="password"
                        id="pwd"
                        placeholder="Password"
                      />
                    </div>
                    <div className="login-checkbox">
                      <label>
                        {' '}
                        <input type="checkbox" id="remember" name="remember" />
                        Remember Me{' '}
                      </label>
                      <label>
                        {/* <a href="#" id="forgetID" className="forgetPwd">
                          ID 찾기
                        </a>
                        <a className="forgetPwd" style={{ color: 'black' }}>
                          {' '}
                          |{' '}
                        </a>
                        <a href="#" onClick="findPw()" className="forgetPwd">
                          비밀번호 찾기
                        </a> */}
                      </label>
                    </div>
                    <div className="form-group">
                      <button
                        type="button"
                        id="sign_in"
                        className="au-btn au-btn--block au-btn--green m-b-20"
                        style={{ width: '100%' }}
                      >
                        로그인
                      </button>
                      <div className="sign-up">
                        <button
                          type="button"
                          className="au-btn au-btn--block au-btn--blue2"
                          style={{ width: '100%' }}
                        >
                          <a href="/signup" style={{ color: 'white' }}>
                            회원가입
                          </a>
                        </button>
                      </div>
                      <div style={{ float: 'right' }}>
                        {/* <a href="http://59.6.79.198" target="_blank">
                          <i className="fas fa-car">&nbsp;방문차량 주차</i>
                        </a> */}
                        <div />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;
