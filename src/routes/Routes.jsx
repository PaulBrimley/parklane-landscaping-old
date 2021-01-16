import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
// import { routeArr } from './routes';

/** components **/
import AboutRoute from './About.route';
import ContactRoute from './Contact.route';
import HomeRoute from './Home.route';
import ServicesRoute from './Services.route';
import SubscribeRoute from './Subscribe.route';

export const routes = {
  ABOUT: '/about',
  CONTACT: '/contact',
  HOME: '/',
  SERVICES: '/services',
  SUBSCRIBE: '/subscribe'
};

export const routeArr = [
  {
    active: true,
    Component: HomeRoute,
    name: 'Home',
    path: routes.HOME
  },
  {
    active: true,
    Component: AboutRoute,
    name: 'About',
    path: routes.ABOUT
  },
  {
    active: true,
    Component: ServicesRoute,
    name: 'Services',
    path: routes.SERVICES
  },
  {
    active: true,
    Component: SubscribeRoute,
    name: 'Subscribe',
    path: routes.SUBSCRIBE
  },
  {
    active: true,
    Component: ContactRoute,
    name: 'Contact',
    path: routes.CONTACT
  }
];

function Routes(props) {
  return (
    <Switch>
      {routeArr.map(({ path, Component }) => (
        <Route key={path} exact path={path} component={Component} />
      ))}
      <Route path='*' exact={true}><Redirect to={routes.HOME} /></Route>
    </Switch>
  );
}
export default Routes;
