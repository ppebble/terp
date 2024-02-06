/* eslint-disable import/extensions */
import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './tools/modules/navjsx';

function isActive(path) {
  // return window.location.pathname.startsWith(path);
  return <Link className="navbarMenu" to={{ path }} />;
}

function SideNav() {
  return (
    <Nav>
      <Nav.List>
        <Nav.Item>
          <Nav.Link to="/" active={isActive('/')}>
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link to="/login" active={isActive('/login')}>
            User
          </Nav.Link>
        </Nav.Item>
        <Nav.List expanded={isActive('/login')}>
          <Nav.Item>
            <Nav.Link to="/member" active={isActive('/member')}>
              Members
            </Nav.Link>
          </Nav.Item>
        </Nav.List>
        <Nav.Item>
          <Nav.Link to="/edu" active={isActive('/edu')}>
            Edu Component
          </Nav.Link>
        </Nav.Item>

        <Nav.Item disabled>
          <Nav.Link>Coming Soon</Nav.Link>
        </Nav.Item>

        <Nav.Separator />

        <Nav.Item>
          <Nav.Link to="/help" active={isActive('/help')}>
            Help
          </Nav.Link>
        </Nav.Item>
      </Nav.List>
    </Nav>
  );
}

export default SideNav;
