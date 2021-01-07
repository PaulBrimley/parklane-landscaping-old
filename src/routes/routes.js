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
    Component: AboutRoute,
    name: 'About',
    path: routes.ABOUT
  },
  {
    active: true,
    Component: ContactRoute,
    name: 'Contact',
    path: routes.CONTACT
  },
  {
    active: true,
    Component: HomeRoute,
    name: 'Home',
    path: routes.HOME
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
  }
];
