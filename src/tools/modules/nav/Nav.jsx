import styled from 'styled-components';
import React from 'react';

const Navigation = styled.nav`
  min-width: 200px;
  padding-right: 20px;
  position: sticky;
  display: flex;
  top: 0;
  left: 0;
`;

function Nav({ children }) {
  return <Navigation>{children}</Navigation>;
}

export default Nav;
