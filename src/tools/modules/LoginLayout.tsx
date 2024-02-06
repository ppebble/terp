/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import '../css/template.css';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

interface LoginLayoutProps {
  children: React.ReactNode;
}

function LoginLayout({ children }: LoginLayoutProps) {
  return (
    <Container className=".container">
      <div className="row clearfix">{children}</div>
    </Container>
  );
}
export default LoginLayout;
