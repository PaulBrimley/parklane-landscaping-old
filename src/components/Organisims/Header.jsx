import React from 'react';
import styled from 'styled-components';

/** context **/
import { useAppState } from '../../context/app.context';

function Header(props) {
  const { setMenuCollapsed, menuCollapsed } = useAppState();
  return (
    <StyledHeader>
      <span>sideBarCollapsed:{menuCollapsed}</span>
      <button onClick={() => setMenuCollapsed(!menuCollapsed)}>Toggle Sidebar</button>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  flex: 50px 0 0;
  transition: background-color 0.2s;
`;

export default Header;
