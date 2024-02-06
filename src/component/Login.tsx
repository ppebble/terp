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
} from '../tools/zustand/store.module';
import LoginLayout from '../tools/modules/LoginLayout';
import Mainlayout from '../tools/modules/MainLayout';

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
    if (!param.userId || !param.userPw) {
      AlertComponent({
        inputTitle: '로그인 실패',
        type: 'custom',
        inputText: `아이디, 비밀번호를 입력해주세요`,
      });
      return false;
    }
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
            title: 'CONNECTION ERROR',
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
          inputTitle: 'LOGIN ERROR',
          type: 'login',
          showCancelBtn: false,
        });
      });
    return true;
  };

  return (
    <Mainlayout>
      <main className="main">
        <article className="form-area">
          {isOpenModal && (
            <Modal onClickToggleModal={onClickToggleModal}>
              <FindIdComponent onClose={onClose} findItemType={findItemType} />
            </Modal>
          )}

          <div className="organize-form form-area-signin">
            <h2>SIGN IN</h2>
            <form className="form">
              <div className="form-field">
                <label htmlFor="id">
                  {' '}
                  <input
                    type="text"
                    id="id"
                    defaultValue={userId}
                    onChange={e => {
                      setUserId(e.target.value);
                    }}
                    ref={refUserId}
                    placeholder="ID"
                  />
                </label>{' '}
              </div>
              <div className="form-field">
                <label htmlFor="pwd">
                  {' '}
                  <input
                    type="password"
                    ref={password}
                    id="pwd"
                    placeholder="Password"
                  />
                </label>
              </div>
              <div className="form-field">
                <label htmlFor="remember" className="login-label checkbox">
                  <input
                    type="checkbox"
                    id="remember"
                    name="remember"
                    className="checkbox"
                    onChange={e => {
                      handleOnChange(e);
                    }}
                    checked={isRemember}
                  />
                  {'     '}Remember Me
                </label>
              </div>
              <Button
                className="btn-sign btn-in"
                type="button"
                id="sign_in"
                style={{ width: '50%' }}
                onClick={doLogin}
              >
                로그인
              </Button>{' '}
            </form>
          </div>

          <div className="form-group">
            {/* <button
          type="button"
          id="sign_in"
          className="au-btn au-btn--block au-btn--green m-b-20"
          style={{ width: '100%' }}
          onClick={doLogin}
        >
          로그인
        </button>
        <Button onClick={onClickFindId} style={{ marginRight: '8px' }}>
            ID 찾기
          </Button>
          <Button onClick={onClickFindPw} style={{ marginRight: '8px' }}>
            비밀번호 찾기
          </Button>
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
        </div> */}
            <div style={{ float: 'right' }}>
              <div />
            </div>
          </div>
        </article>
      </main>
    </Mainlayout>
  );
}

export default LoginComponent;
