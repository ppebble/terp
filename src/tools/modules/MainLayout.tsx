/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import '../css/template.css';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

interface MainLayoutProps {
  children: React.ReactNode;
}

function Mainlayout({ children }: MainLayoutProps) {
  return (
    <div
      id="main-content"
      style={{
        width: '100%',
        backgroundColor: '#f2f2f2',
      }}
    >
      <div style={{ marginLeft: '300px' }}>
        <Container className=".container-fluid">
          <div className="row clearfix">{children}</div>
        </Container>
      </div>
    </div>
  );
}
export default Mainlayout;
