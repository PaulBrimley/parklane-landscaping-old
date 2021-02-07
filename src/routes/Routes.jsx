import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
// import { routeArr } from './routes';

/** components **/
import AboutRoute from './About.route';
import ContactRoute from './Contact.route';
import HomeRoute from './Home.route';
import ServicesRoute from './Services.route';
import ServicesFenceRoute from './Services_Fence.route';
import ServicesIrrigationRoute from './Services_Irrigation.route';
import ServicesLandscapeRoute from './Services_Landscape.route';
import ServicesLightingRoute from './Services_Lighting.route';
import ServicesMaintenanceRoute from './Services_Maintenance.route';
import ServicesMonumentRoute from './Services_Monument.route';
import ServicesTrimmingRoute from './Services_Trimming.route';
import SubscribeRoute from './Subscribe.route';

export const routes = {
  ABOUT: '/about',
  CONTACT: '/contact',
  HOME: '/',
  SERVICES: '/services',
  SERVICES_FENCE: '/services/fence',
  SERVICES_IRRIGATION: '/services/irrigation',
  SERVICES_LANDSCAPE: '/services/landscape',
  SERVICES_LIGHTING: '/services/lighting',
  SERVICES_MAINTENANCE: '/services/maintenance',
  SERVICES_MONUMENT: '/services/monument',
  SERVICES_TRIMMING: '/services/trimming',
  SUBSCRIBE: '/subscribe'
};
export const routeArr = [
  {
    active: true,
    Component: HomeRoute,
    name: 'Home',
    path: routes.HOME,
    children: []
  },
  {
    active: true,
    Component: AboutRoute,
    name: 'About',
    path: routes.ABOUT,
    children: []
  },
  {
    active: true,
    Component: ServicesRoute,
    name: 'Services',
    path: routes.SERVICES,
    children: [
      {
        active: true,
        Component: ServicesFenceRoute,
        name: 'Services Fencing',
        path: routes.SERVICES_FENCE
      },
      {
        active: true,
        Component: ServicesIrrigationRoute,
        name: 'Services Irrigation',
        path: routes.SERVICES_IRRIGATION
      },
      {
        active: true,
        Component: ServicesLandscapeRoute,
        name: 'Services Landscape',
        path: routes.SERVICES_LANDSCAPE
      },
      {
        active: true,
        Component: ServicesLightingRoute,
        name: 'Services Lighting',
        path: routes.SERVICES_LIGHTING
      },
      {
        active: true,
        Component: ServicesMaintenanceRoute,
        name: 'Services Maintenance',
        path: routes.SERVICES_MAINTENANCE
      },
      {
        active: true,
        Component: ServicesMonumentRoute,
        name: 'Services Monument',
        path: routes.SERVICES_MONUMENT
      },
      {
        active: true,
        Component: ServicesTrimmingRoute,
        name: 'Services Trimming',
        path: routes.SERVICES_TRIMMING
      }
    ]
  },
  {
    active: true,
    Component: SubscribeRoute,
    name: 'Subscribe',
    path: routes.SUBSCRIBE,
    children: []
  },
  {
    active: true,
    Component: ContactRoute,
    name: 'Contact',
    path: routes.CONTACT,
    children: []
  }
];

function Routes(props) {
  function flattenRoutes(routes) {
    return routes.reduce((acc, route) => {
      const childRoutes = route.children && route.children.length ? flattenRoutes(route.children) : [];
      return [...acc, route, ...childRoutes];
    }, []);
  }
  return (
    <Switch>
      {flattenRoutes(routeArr).map(({ Component, path }) => (
        <Route key={path} exact path={path} component={Component} />
      ))}
      <Route path='*' exact={true}><Redirect to={routes.HOME} /></Route>
    </Switch>
  );
}
export default Routes;
