/** components **/
import AboutRoute from '../routes/About.route';
import ContactRoute from '../routes/Contact.route';
import HomeRoute from '../routes/Home.route';
import ServicesRoute from '../routes/Services.route';
import SubscribeRoute from '../routes/Subscribe.route';

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
