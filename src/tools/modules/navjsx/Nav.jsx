import styled from 'styled-components';
import React from 'react';

const Navigation = styled.nav`
  min-width: 300px;
  padding-top: 100px;
  height: 100%;
  display: flex;
  top: 0;
  left: 0;
  position: fixed;
  top: 20px;
  width: 300px;
  margin-left: 0px;
  background-color: #fff;
`;

function Nav({ children }) {
  return <Navigation>{children}</Navigation>;
}

export default Nav;
