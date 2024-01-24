import styled, { css } from 'styled-components';
import React from 'react';

const Link = styled.a`
  display: block;
  margin: 0 calc(20px * -1);
  padding: 8px 20px;
  border-radius: 4px;
  color: #fffffe;
  text-decoration: none;

  ${p =>
    p.active &&
    css`
      color: #ff8906;
      font-weight: bold;
    `}

  &:hover {
    background: #ff8906;
    color: #fffffe;
    transform: translateY(-2px);
    transition: 1s;
  }

  &:not([href]) {
    color: #a7a9be;
    background: revert;
    transform: none;
  }
`;

function NavLink({ children, to, active }) {
  return (
    <Link
      href={to}
      active={active}
      // aria-current={to ? "page" : null}
    >
      {children}
    </Link>
  );
}

export default NavLink;
