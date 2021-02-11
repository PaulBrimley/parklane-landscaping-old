import { useEffect, useState } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';

/** context **/
import { useAppState } from '../context/app.context';

/** components **/
import AboutRoute from './About.route';
import ContactRoute from './Contact.route';
import FenceRoute from './Fence.route';
import HomeRoute from './Home.route';
import IrrigationRoute from './Irrigation.route';
import LandscapeRoute from './Landscape.route';
import LightingRoute from './Lighting.route';
import MaintenanceRoute from './Maintenance.route';
import MonumentRoute from './Monument.route';
import ServicesRoute from './Services.route';
import SubscribeRoute from './Subscribe.route';
import TrimmingRoute from './Trimming.route';

/** images **/
import iconFenceRepair from '../assets/img/icon-fence-repair.png';
import iconHoaIrrigation from '../assets/img/icon-hoa-irrigation.png';
import iconHoaLandscape from '../assets/img/icon-hoa-landscape.png';
import iconHoaLighting from '../assets/img/icon-hoa-lighting.png';
import iconHoaMaintenance from '../assets/img/icon-hoa-maintenance.png';
import iconHoaMonumentRepair from '../assets/img/icon-hoa-monument-repair.png';
import imgCarnival from '../assets/img/img-carnival.jpg';
import imgEstatesAtBridgewood from '../assets/img/img-monument-6.jpg';
import imgGrass from '../assets/img/img-grass.jpg';
import imgGuyKneeling from '../assets/img/img-guy-kneeling.jpg';
import imgGuyTeaching from '../assets/img/img-guy-teaching.jpg';
import imgHillsAtAlamoRanch from '../assets/img/img-hills-at-alamo-ranch.jpg';
import imgHome from '../assets/img/img-home.jpg';
import imgLeaves from '../assets/img/img-leaves-2.jpg';
import imgParklaneFamily from '../assets/img/img-parklane-family.jpg';
import imgPictureFrame from '../assets/img/img-picture-frame.png';
import imgServices from '../assets/img/img-guy-planting-2.jpg';
import imgTrees from '../assets/img/img-trees-2.jpg';
import logoAnniversary from '../assets/img/logo-anniversary.png';
import logoMain from '../assets/img/logo-main.png';

export const routes = {
  ABOUT: '/about',
  CONTACT: '/contact',
  FENCE: '/services/fence',
  HOME: '/',
  IRRIGATION: '/services/irrigation',
  LANDSCAPE: '/services/landscape',
  LIGHTING: '/services/lighting',
  MAINTENANCE: '/services/maintenance',
  MONUMENT: '/services/monument',
  SERVICES: '/services',
  SUBSCRIBE: '/subscribe',
  TRIMMING: '/services/trimming'
};
export const routeArr = [
  {
    active: true,
    children: [],
    Component: HomeRoute,
    name: 'Home',
    path: routes.HOME,
    preFetchImages: [imgGrass, imgHome, logoAnniversary]
  },
  {
    active: true,
    children: [],
    Component: AboutRoute,
    name: 'About',
    path: routes.ABOUT,
    preFetchImages: [imgCarnival, imgEstatesAtBridgewood, imgParklaneFamily, imgPictureFrame, imgTrees, logoMain]
  },
  {
    active: true,
    children: [
      {
        active: true,
        Component: MaintenanceRoute,
        displayInHeader: true,
        headerLinkLines: ['HOA', 'Maintenance'],
        icon: iconHoaMaintenance,
        name: 'HOA Maintenance',
        path: routes.MAINTENANCE
      },
      {
        active: true,
        Component: IrrigationRoute,
        displayInHeader: true,
        headerLinkLines: ['HOA', 'Irrigation'],
        icon: iconHoaIrrigation,
        name: 'HOA Irrigation',
        path: routes.IRRIGATION
      },
      {
        active: true,
        Component: LandscapeRoute,
        displayInHeader: true,
        headerLinkLines: ['HOA', 'Landscape'],
        icon: iconHoaLandscape,
        name: 'HOA Landscape',
        path: routes.LANDSCAPE
      },
      {
        active: true,
        Component: MonumentRoute,
        displayInHeader: true,
        headerLinkLines: ['HOA Monument', 'Repair & Design'],
        icon: iconHoaMonumentRepair,
        name: 'HOA Monument Repair & Design',
        path: routes.MONUMENT
      },
      {
        active: true,
        Component: FenceRoute,
        displayInHeader: true,
        headerLinkLines: ['Fence', 'Repair'],
        icon: iconFenceRepair,
        name: 'Fence Repair',
        path: routes.FENCE
      },
      {
        active: true,
        Component: LightingRoute,
        displayInHeader: true,
        headerLinkLines: ['HOA', 'Lighting'],
        icon: iconHoaLighting,
        name: 'HOA Lighting',
        path: routes.LIGHTING
      },
      {
        active: true,
        Component: TrimmingRoute,
        displayInHeader: false,
        headerLinkLines: ['Tree', 'Trimming'],
        icon: '',
        name: 'Tree Trimming',
        path: routes.TRIMMING
      }
    ],
    Component: ServicesRoute,
    name: 'Services',
    path: routes.SERVICES,
    preFetchImages: [imgServices, imgGuyKneeling, imgGuyTeaching, imgHillsAtAlamoRanch]
  },
  {
    active: true,
    children: [],
    Component: SubscribeRoute,
    name: 'Subscribe',
    path: routes.SUBSCRIBE,
    preFetchImages: []
  },
  {
    active: true,
    children: [],
    Component: ContactRoute,
    name: 'Contact',
    path: routes.CONTACT,
    preFetchImages: [imgLeaves]
  }
];

function Routes(props) {
  const { addPrefetchedImages } = useAppState();
  const [flattenedRoutes, setFlattenedRoutes] = useState([]);
  const location = useLocation();

  useEffect(() => {
    function flattenRoutes(routes) {
      return routes.reduce((acc, route) => {
        const childRoutes = route.children && route.children.length ? flattenRoutes(route.children) : [];
        return [...acc, route, ...childRoutes];
      }, []);
    }
    setFlattenedRoutes(flattenRoutes(routeArr));
  }, []);
  /** prefetch images **/
  useEffect(() => {
    const imagesToPreFetch = flattenedRoutes.filter(route => route.path !== location.pathname && route.preFetchImages?.length).reduce((acc, route) => [...acc, ...route.preFetchImages], []);
    addPrefetchedImages(imagesToPreFetch);
  }, [location, flattenedRoutes]);

  return (
    <>
      {flattenedRoutes.length ? (
        <Switch>
          {flattenedRoutes.map(({ Component, path }) => (
            <Route key={path} exact path={path} component={Component} />
          ))}
          <Route path="*" exact={true}>
            <Redirect to={routes.HOME} />
          </Route>
        </Switch>
      ) : (
        <div>Loading</div>
      )}
    </>
  );
}

export default Routes;
