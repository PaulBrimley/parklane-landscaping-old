import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'styled-icons/boxicons-regular';
import styled from 'styled-components';

/** context **/
import { useAppState } from '../../context/app.context';

/** components **/
import StyledLinks from '../Styled/StyledLinks';

import { routeArr } from '../../routes/Routes';

function Header(props) {
  const { companyInfo, isMobile, menuCollapsed, setMenuCollapsed } = useAppState();
  const location = useLocation();

  return (
    <StyledHeader>
      <div className="header-left">
        <img
          className="logo"
          src="http://parklanelandscaping.onshark.com/wp-content/uploads/2019/12/ParkLane-Header-Logo-01-e1576883171409.png"
          alt="logo"
        />
        {!isMobile && (
          <StyledLinks>
            {routeArr.map((route, index) => (
              <Link key={index} className={`link ${location.pathname === route.path ? 'active' : ''}`} to={route.path}>
                {route.name}
              </Link>
            ))}
          </StyledLinks>
        )}
      </div>
      <div className="header-right">
        {isMobile && <Menu className="menu-button" onClick={() => setMenuCollapsed(false)} />}
        {!isMobile && (
          <a className="phone" href={`tel:${companyInfo.phone}`}>
            {companyInfo.phone}
          </a>
        )}
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  flex: 1 1 auto;
  display: flex;
  padding: 5px 10px 0 10px;
  background-color: ${({ theme }) => theme.colorPrimary};
  color: ${({ theme }) => theme.colorWhite};
  .header-left {
    flex: 6 1 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .logo {
      max-width: 200px;
      margin-bottom: 10px;
    }
  }
  .header-right {
    flex: 1 1 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2em;
    font-weight: 300;
    .menu-button {
      height: 30px;
      width: 30px;
      padding: 2px;
      cursor: pointer;
      &:hover,
      &:active {
        color: ${({ theme }) => theme.colorSecondary};
      }
    }
    .phone {
      color: ${({ theme }) => theme.colorWhite};
      text-decoration: none;
      transition: color 0.2s;
      &:hover {
        color: ${({ theme }) => theme.colorSecondary};
      }
    }
  }
`;

export default Header;
