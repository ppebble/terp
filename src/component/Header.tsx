import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
import '../tools/css/header.css';
import { useIsAuth, useLoginAction } from '../tools/zustand/login.store.module';

function Header() {
  const isAuthorized = useIsAuth();
  const loginAction = useLoginAction();

  const loginState = isAuthorized;

  const onClickLogOut = () => {
    loginAction.logout();
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
