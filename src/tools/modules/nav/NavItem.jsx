import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Item = styled.li`
  margin: 8px;
`;

function NavItem({ children, disabled = false }) {
  return <Item role={disabled ? 'presentation' : null}>{children}</Item>;
}

export default NavItem;

NavItem.propsTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool.isRequired,
};
