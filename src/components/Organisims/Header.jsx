import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'styled-icons/boxicons-regular';
import styled from 'styled-components';

/** context **/
import { useAppState } from '../../context/app.context';

/** components **/
import StyledHeaderLinks from '../Styled/StyledHeaderLinks';

/** images **/
import logoMain from '../../assets/img/logo-main.png';

import { routeArr } from '../../routes/Routes';

function Header(props) {
  const { companyInfo, isMobile, setMenuCollapsed } = useAppState();
  const [childRoutes, setChildRoutes] = useState([]);
  const [currentRoute, setCurrentRoute] = useState({});
  const location = useLocation();
  useEffect(() => {
    function findRoute(routes) {
      let route = routes.find(route => location.pathname === route.path);
      if (route) return route;
      for (let i = 0; i < routes.length; i++) {
        const innerRoute = routes[i];
        if (innerRoute.children) route = findRoute(innerRoute.children);
        if (route) break;
      }
      return route;
    }
    const foundRoute = findRoute(routeArr);
    console.log('foundRoute', foundRoute);
  }, [location]);



  return (
    <StyledHeader>
      <div className="header-left">
        <img className="logo" src={logoMain} alt="logo" />
      </div>
      <div className="header-center">
        {!isMobile && (
          <StyledHeaderLinks>
            {routeArr.map(({ children, name, path }) => (
              <div key={path} className="link-wrapper">
                <div className={`link-inner ${location.pathname === path || (children && children.find(child => location.pathname === child.path)) ? 'active' : ''}`}>
                  <Link className="link" to={path}>
                    {name}
                  </Link>
                </div>
              </div>
            ))}
          </StyledHeaderLinks>
        )}
      </div>
      <div className="header-right">
        {isMobile && <Menu className="menu-button" onClick={() => setMenuCollapsed(false)} />}
        {!isMobile && (
          <>
            <div className="contact">CONTACT</div>
            <a className="phone" href={`tel:${companyInfo.phone}`}>
              {companyInfo.phone}
            </a>
          </>
        )}
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  flex: 1 1 auto;
  height: 75px;
  display: flex;
  background-color: ${({ theme }) => theme.colorPrimary};
  color: ${({ theme }) => theme.colorWhite};
  .header-center {
    flex: 1 1 auto;
    display: flex;
    padding-bottom: 10px;
  }
  .header-left {
    .logo {
      max-width: 150px;
      margin: 0 0 5px 20px;
    }
  }
  .header-right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px 20px 5px 10px;
    .contact {
      font-size: 0.8em;
      font-weight: 400;
    }
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
      position: relative;
      font-size: 1.3em;
      font-weight: 200;
      color: ${({ theme }) => theme.colorSecondary};
      text-decoration: none;
      &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 1px;
        bottom: 0;
        left: 0;
        background-color: ${({ theme }) => theme.colorSecondary};
        visibility: hidden;
        transform: scaleX(0);
        transition: all 0.2s;
      }
      &:hover {
        &:before {
          visibility: visible;
          transform: scaleX(0.99);
        }
      }
    }
  }
`;

export default Header;
