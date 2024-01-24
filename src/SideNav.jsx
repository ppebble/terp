import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './tools/modules/nav';

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
          <Nav.Link to="/signin" active={isActive('/signin')}>
            User
          </Nav.Link>
        </Nav.Item>
        <Nav.List expanded={isActive('/signup')}>
          <Nav.Item>
            <Nav.Link to="/signup" active={isActive('/signup')}>
              Sign Up
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link to="/member" active={isActive('/member')}>
              Members
            </Nav.Link>
          </Nav.Item>
        </Nav.List>
        <Nav.Item>
          <Nav.Link to="/template" active={isActive('/template')}>
            Template
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link to="/grid" active={isActive('/grid')}>
            Grid
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link to="/table" active={isActive('/table')}>
            Table
          </Nav.Link>
        </Nav.Item>
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
