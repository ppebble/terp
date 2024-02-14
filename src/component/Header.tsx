import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../tools/css/header.css';
import { useAppSelector } from '../tools/redux/hook/useCustomHook';
import { RootState, useAppDispatch } from '../tools/redux/store';
import { login } from '../tools/redux/profile';
import useLoginStore from '../tools/zustand/login.store.module';
import SideNav from '../SideNav.jsx';

function Header() {
  //   const dispatch = useAppDispatch();
  //   const state = useAppSelector(
  //     (profileState: RootState) => profileState.profile,
  //   );
  const navigate = useNavigate();
  const { isAuthorized, logout } = useLoginStore();
  const goBack = () => {
    navigate(-1);
  };

  const loginState = isAuthorized;

  const onClickLogOut = () => {
    logout();
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
          auth: loginState,
        })}
      >
        <h1 className="title">SIGN UP</h1>
      </Link>
      <Link
        to="/login"
        className={classNames('link', {
          auth: loginState,
        })}
      >
        <h1 className="title">LOG IN</h1>
      </Link>

      <Link
        to="/login"
        className={classNames('link', {
          auth: !loginState,
        })}
        onClick={onClickLogOut}
      >
        <h1 className="title">LOG OUT</h1>
      </Link>
    </header>
  );
}

export default Header;
