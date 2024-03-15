import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../tools/css/header.css';
import {
  RootState,
  useAppDispatch,
  useAppSelector,
} from '../tools/redux/store';
import { login } from '../tools/redux/profile';

function Header() {
  const dispatch = useAppDispatch();
  const state = useAppSelector(
    (profileState: RootState) => profileState.profile,
  );
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const loginState = state.value;

  const onClickLogOut = () => {
    dispatch(
      login({
        isAuthorized: false,
        userId: '',
        username: '',
        token: '',
      }),
    );
  };

  let url;

  const handleConnectCart = () => {
    // 장바구니아이콘 클릭 시 로그인 상태 체크 후 라우팅 진행.
    // if (userId === null) {
    //   navigate('/login');
    // } else if (userId !== null) {
    //   navigate('/cart');
    // }
  };

  return (
    <header className="header">
      <div className="back">
        <Link to="/" className="link">
          <h1 className="title">NEX-ERP</h1>
        </Link>
      </div>
      <Link
        to="/signup"
        className={classNames('link', {
          auth: loginState.isAuthorized,
        })}
      >
        <h1 className="title">SIGN UP</h1>
      </Link>
      <Link
        to="/login"
        className={classNames('link', {
          auth: loginState.isAuthorized,
        })}
      >
        <h1 className="title">LOG IN</h1>
      </Link>

      <Link
        to="/login"
        className={classNames('link', {
          auth: !loginState.isAuthorized,
        })}
        onClick={onClickLogOut}
      >
        <h1 className="title">LOG OUT</h1>
      </Link>
    </header>
  );
}

export default Header;
