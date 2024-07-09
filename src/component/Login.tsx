import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useCookies } from 'react-cookie';
import { Button } from 'react-bootstrap';
import '../tools/css/styles.css';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import AlertComponent from '../tools/modules/alert/AlertComponent';
import FindIdComponent from '../tools/modules/FindIdComponent';
import Modal from '../tools/modules/Modal';
import useLoginStore, { UserInfo } from '../tools/zustand/login.store.module';
import Mainlayout from '../tools/modules/MainLayout';
import { LoginModel } from '../tools/model/LoginModel';
import { postLogin } from '../tools/service/ServiceAPI';

function LoginComponent() {
  const navigate = useNavigate();
  const refUserId = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const [findItemType, setFindItemType] = useState<boolean>(true);
  const [userId, setUserId] = useState('');
  const [cookies, setCookie, removeCookie] = useCookies(['userId']);
  const [isRemember, setIsRemember] = useState(false);

  const loginAction = useLoginStore(state => state.action);

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
      //   removeCookie('userId');
    }
  };
  const loginMutation = useMutation({
    mutationKey: ['login'],
    mutationFn: (param: LoginModel) => postLogin(param),
  });
  const onClose = () => {
    onClickToggleModal();
  };
  const doLogin = () => {
    const param = {
      userId: refUserId.current?.value,
      userPw: password.current?.value,
      //   id: 'smlee',
      //   pwd: 'smlee',
    };
    if (!param.userId || !param.userPw) {
      // if (!param.id || !param.pwd) {
      AlertComponent({
        inputTitle: '로그인 실패',
        inputText: `아이디, 비밀번호를 입력해주세요`,
      });
      return false;
    }
    loginMutation.mutate(param, {
      onSuccess: res => {
        if (isRemember) {
          setCookie('userId', res.data.userId, {
            path: '/',
            expires: new Date(Date.now() + 86400000),
          });
        }
        const user: UserInfo = {
          isAuthorized: true,
          //   userId: data.id,
          //   token: data.accessToken,
          userId: res.data.userId,
          userName: res.data.userName,
          token: res.data.token,
        };
        loginAction.login(user);
        navigate('/');
      },
      onError: () => {
        AlertComponent({
          inputTitle: 'Mutation LOGIN ERROR',
          inputText: '로그인에 실패하였습니다.',
          showCancelBtn: false,
        });
      },
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
            </form>
            <Button
              className="btn-sign btn-in"
              type="button"
              id="sign_in"
              style={{ width: '50%' }}
              onClick={doLogin}
            >
              로그인
            </Button>{' '}
            <div className="form-group">
              <Button onClick={onClickFindId} style={{ marginRight: '8px' }}>
                ID 찾기
              </Button>
              <Button onClick={onClickFindPw} style={{ marginRight: '8px' }}>
                비밀번호 찾기
              </Button>
              <div />
            </div>
          </div>
        </article>
      </main>
    </Mainlayout>
  );
}

export default LoginComponent;
