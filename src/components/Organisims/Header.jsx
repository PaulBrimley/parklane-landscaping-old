import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from 'styled-icons/boxicons-regular';
import classNames from 'classnames';
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
  const location = useLocation();

  function clearChildRoutes() {
    setChildRoutes([]);
  }
  function handleLinkHover({ e, children }) {
    setChildRoutes(children);
  }

  return (
    <StyledHeader onMouseLeave={clearChildRoutes}>
      <div className="header-left">
        <img className="logo" src={logoMain} alt="logo" />
      </div>
      <div className="header-center">
        {!isMobile && (
          <StyledHeaderLinks>
            {routeArr.map(({children, name, path}) => (
              <div key={path} className="link-wrapper">
                <div
                  className={classNames('link-inner', {
                    active: location.pathname === path || (children && children.find(child => location.pathname === child.path))
                  })}
                >
                  <Link className="link" to={path} onMouseEnter={e => handleLinkHover({ e, children: children && children.length ? children : [] })}>
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
      <div className={classNames('child-routes', { active: childRoutes.length > 0 && !isMobile })}>
        {childRoutes
          .filter(({ displayInHeader }) => displayInHeader)
          .map(({ headerLinkLines, icon, name, path }) => (
            <Link key={path} className="child-route" to={path} onClick={clearChildRoutes}>
              {headerLinkLines ? headerLinkLines.map((headerLinkLine, index) => <div key={index} className="child-route-name">{headerLinkLine}</div>) : <div className="child-route-name">{name}</div>}
              {icon && <img className="child-route-icon" src={icon} alt={name} />}
            </Link>
          ))}
      </div>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  flex: 75px 0 0;
  position: relative;
  display: flex;
  background-color: ${({ theme }) => theme.colorPrimary};
  color: ${({ theme }) => theme.colorWhite};
  .child-routes {
    display: flex;
    justify-content: center;
    position: absolute;
    top: 75px;
    left: 0;
    right: 0;
    box-sizing: border-box;
    z-index: 1000;
    background-color: ${({ theme }) => theme.colorSecondary};
    height: 0;
    transition: height 0.2s;
    overflow: hidden;
    &.active {
      height: 75px;
    }
    .child-route {
      position: relative;
      margin-top: 5px;
      opacity: 0.8;
      flex: 8% 0 0;
      display: block;
      font-size: 0.6em;
      text-align: center;
      color: inherit;
      text-decoration: none;
      text-transform: uppercase;
      transition: opacity 0.2s;
      &:before {
        position: absolute;
        border-right: 25px solid ${({theme}) => theme.colorWhite};
        border-left: 25px solid ${({theme}) => theme.colorWhite};
        content: '';
        display: block;
        top: 50%;
        left: 0;
        right: 0;
        height: 1px;
        z-index: -1;
      }
      &:first-child {
        &:before {
          border-left: none;
        }
      }
      &:last-child {
        &:before {
          border-right: none;
        }
      }
      &:hover {
        opacity: 1;
      }
      .child-route-icon {
        margin: 0 5px;
        width: 45px;
        height: 45px;
      }
      .child-route-name {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
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
