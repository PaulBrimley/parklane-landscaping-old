import {useEffect, useState} from 'react';
import {useSpring, animated} from 'react-spring';
import { Link, useLocation } from 'react-router-dom';
import { Close } from 'styled-icons/evil';
import styled from 'styled-components';

/** context **/
import { useAppState } from '../../context/app.context';

/** components **/
import StyledLinks from '../Styled/StyledLinks';

import { routeArr } from '../../routes/Routes';
import { defaultConfig, fade, translateHorizontal } from '../../transitions';

function Menu(props) {
  const { menuCollapsed, setMenuCollapsed, theme } = useAppState();
  const [hideMenu, setHideMenu] = useState(true);
  const menuContainerSpring = useSpring({
    ...fade({opacityEnd: menuCollapsed ? 0 : 1, opacityStart: menuCollapsed ? 0 : 0}),
    config: defaultConfig
  });
  const menuSpring = useSpring({
    ...translateHorizontal({positionEnd: menuCollapsed ? 100 : 0, positionStart: menuCollapsed ? 100 : 100}),
    config: defaultConfig,
    onRest: () => setHideMenu(menuCollapsed)
  });

  function handleClose() {
    setMenuCollapsed(true);
  }

  return (
    <StyledMenu className={hideMenu ? 'hidden' : ''}>
      <animated.div className="overlay" style={menuContainerSpring} onClick={handleClose}/>
      <animated.div className="menu" style={menuSpring}>
        <Close className="close-button" onClick={handleClose} />
        <StyledLinks flexDirection="column">
          {routeArr.map((route, index) => (
            <Link key={index} className={`link ${location.pathname === route.path ? 'active' : ''}`} to={route.path} onClick={handleClose}>
              {route.name}
            </Link>
          ))}
        </StyledLinks>
      </animated.div>
    </StyledMenu>
  );
}
const StyledMenu = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  color: ${({ theme }) => theme.colorWhite};
  display: flex;
  justify-content: flex-end;
  &.hidden {
    pointer-events: none;
  }
  .menu {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 200px;
    z-index: 1002;
    background-color: ${({ theme }) => theme.colorPrimary};
    .close-button {
      height: 30px;
      width: 30px;
      padding: 2px;
      cursor: pointer;
      &:hover,
      &:active {
        color: ${({ theme }) => theme.colorSecondary};
      }
    }
  }
  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1001;
    background-color: ${({ theme }) => theme.colorOpaque};
  }
`;
export default Menu;
