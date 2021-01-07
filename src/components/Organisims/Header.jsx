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
  border: 1px solid blue;
  height: 50px;
  /*background-color: ${({theme}) => theme.colorWhiteOpaque};*/
  transition: background-color 0.2s;
`;

export default Header;
