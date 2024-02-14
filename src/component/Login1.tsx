import React, {
  Children,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import Swal from 'sweetalert2';
import { useCookies } from 'react-cookie';
import { Button } from 'react-bootstrap';
import '../tools/css/styles.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '../tools/resources/images/nexmore1.png';
import ServiceUrls from '../tools/config/ServiceUrls';

import AlertComponent from '../tools/modules/alert/AlertComponent';
import FindIdComponent from '../tools/modules/FindIdComponent';
import Modal from '../tools/modules/Modal';
import { useAppDispatch } from '../tools/redux/store';
// import { login } from '../tools/redux/profile';
import useLoginStore, {
  LoginPersistStore,
  UserInfo,
} from '../tools/zustand/login.store.module';

function LoginComponent() {
  const navigate = useNavigate();
  const refUserId = useRef<any>(null);
  const password = useRef<any>(null);
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const [findItemType, setFindItemType] = useState<boolean>(true);
  const [userId, setUserId] = useState('');
  const [cookies, setCookie, removeCookie] = useCookies(['userId']);
  const [isRemember, setIsRemember] = useState(false);

  const { login } = useLoginStore();

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);
  const onClickFindPw = () => {
    onClickToggleModal();
    setFindItemType(false);
  };
  const onClickFindId = () => {
    onClickToggleModal();
    setFindItemType(true);
  };
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsRemember(e.target.checked);
    if (!e.target.checked) {
      removeCookie('userId');
    }
  };
  useEffect(() => {
    if (cookies.userId !== undefined) {
      setUserId(cookies.userId);
      setIsRemember(true);
    }
  }, [cookies.userId]);
  const onClose = () => {
    onClickToggleModal();
  };
  const doLogin = () => {
    const param = {
      userId: refUserId.current.value,
      userPw: password.current.value,
    };
    axios
      .post(`${ServiceUrls().localUrl}/member/sign-in`, param)
      .then(response => {
        if (response.status === 200) {
          if (isRemember) {
            setCookie('userId', response.data.Data.userId);
          }
          //   dispatch(
          //     login({
          //       isAuthorized: true,
          //       userId: response.data.Data.userId,
          //       username: response.data.Data.userName,
          //       token: response.data.Data.token,
          //     }),
          //   );
          const user: UserInfo = {
            isAuthorized: true,
            userId: response.data.Data.userId,
            username: response.data.Data.userName,
            token: response.data.Data.token,
          };
          login(user);
          navigate('/member');
        } else {
          Swal.fire({
            title: 'ERROR',
            html: `<hr />
                    로그인에 실패하였습니다.
                `,
            showCancelButton: false,
            confirmButtonText: '확인',
          });
        }
      })
      .catch(response => {
        // Swal.fire({
        //   title: 'ERROR',
        //   html: `
        //         <hr />
        //             로그인에 실패하였습니다.
        //             ${response.message}
        //         `,
        //   showCancelButton: false,
        //   confirmButtonText: '확인',
        // });
        AlertComponent({
          inputTitle: '로그인 에러',
          inputText: '로그인에 실패하였습니다.',
          showCancelBtn: false,
        });
      });
  };

  return (
    <div>
      <div className="page-wrapper">
        <div className="page-content--bge5">
          <div className="container">
            <div className="login-wrap" id="login-wrap">
              {isOpenModal && (
                <Modal onClickToggleModal={onClickToggleModal}>
                  <FindIdComponent
                    onClose={onClose}
                    findItemType={findItemType}
                  />
                </Modal>
              )}
              <div className="login-content" id="login-content">
                <div className="login-logo">
                  {' '}
                  <img src={logo} alt="NEXMORE" />
                </div>
                <div className="login-form">
                  <form id="info">
                    <div className="form-group">
                      <label htmlFor="id">ID</label>{' '}
                      <input
                        className="au-input au-input--full"
                        type="text"
                        id="id"
                        defaultValue={userId}
                        onChange={e => {
                          setUserId(e.target.value);
                        }}
                        ref={refUserId}
                        placeholder="ID"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="pwd">Password</label>{' '}
                      <input
                        className="au-input au-input--full"
                        type="password"
                        ref={password}
                        id="pwd"
                        placeholder="Password"
                      />
                    </div>
                    <div className="login-checkbox">
                      <label>
                        {' '}
                        <input
                          type="checkbox"
                          id="remember"
                          name="remember"
                          onChange={e => {
                            handleOnChange(e);
                          }}
                          checked={isRemember}
                        />
                        Remember Me{' '}
                      </label>
                    </div>
                    <div className="form-group">
                      <Button
                        onClick={onClickFindId}
                        style={{ marginRight: '8px' }}
                      >
                        ID 찾기
                      </Button>
                      <Button
                        onClick={onClickFindPw}
                        style={{ marginRight: '8px' }}
                      >
                        비밀번호 찾기
                      </Button>
                      <button
                        type="button"
                        id="sign_in"
                        className="au-btn au-btn--block au-btn--green m-b-20"
                        style={{ width: '100%' }}
                        onClick={doLogin}
                      >
                        로그인
                      </button>
                      <div className="sign-up">
                        <button
                          type="button"
                          className="au-btn au-btn--block au-btn--blue2"
                          style={{ width: '100%' }}
                        >
                          <a href="/signup" style={{ color: 'gray' }}>
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
