import { useEffect, useState } from 'react';
import { Redirect, Route, Switch, useLocation } from 'react-router-dom';

/** context **/
import { images, useImageState } from '../context/img.context';

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
import MonumentRepairRoute from './MonumentRepair.route';
import ServicesRoute from './Services.route';
import SubscribeRoute from './Subscribe.route';
import TrimmingRoute from './Trimming.route';

/** images **/
const { imgCarnival, imgColoredPencils, imgFence, imgFenceBroken, imgFenceRepair, imgFlowers1, imgGrass, imgGuyPlanting1, imgGuyPlanting2, imgGuyTeaching2, imgHome, imgLandscapeRendering, imgLawnMower1, imgLawnMower2, imgLeaves, imgLighting1, imgLighting2, imgLighting3, imgMonument1, imgMonument2, imgMonument3, imgMonument4, imgMonument5, imgMonument6, imgMonument7, imgMonument8, imgNewsLetter1, imgNewsLetter2, imgNewsLetter3, imgOverhead1, imgOverhead2, imgOverhead3, imgParklaneFamily, imgPictureFrame, imgSprinklers1, imgSprinklers2, imgTrees1, imgTrees2, imgTreeTrimming, logoAnniversary, logoMain } = images;

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
  MONUMENT_REPAIR: '/services/monumentRepair',
  SERVICES: '/services',
  SUBSCRIBE: '/learn-more',
  TRIMMING: '/services/trimming'
};
export const routeArr = [
  {
    active: true,
    children: [],
    Component: HomeRoute,
    name: 'Home',
    path: routes.HOME,
    prefetchImages: [imgGrass, imgHome, logoAnniversary]
  },
  {
    active: true,
    children: [],
    Component: AboutRoute,
    name: 'About',
    path: routes.ABOUT,
    prefetchImages: [imgCarnival, imgMonument6, imgParklaneFamily, imgPictureFrame, imgTrees2, logoMain]
  },
  {
    active: true,
    children: [
      {
        active: true,
        Component: MaintenanceRoute,
        displayInHeader: true,
        headerLinkLines: ['HOA', 'Maintenance'],
        icon: 'lawnMower',
        iconSize: '22px',
        name: 'HOA Maintenance',
        path: routes.MAINTENANCE,
        prefetchImages: [imgLawnMower1, imgLawnMower2]
      },
      {
        active: true,
        Component: IrrigationRoute,
        displayInHeader: true,
        headerLinkLines: ['HOA', 'Irrigation'],
        icon: 'hose',
        iconSize: '22px',
        name: 'HOA Irrigation',
        path: routes.IRRIGATION,
        prefetchImages: [imgSprinklers1, imgSprinklers2]
      },
      {
        active: true,
        Component: LandscapeRoute,
        displayInHeader: true,
        headerLinkLines: ['HOA', 'Landscaping'],
        icon: 'landscape',
        iconSize: '24px',
        name: 'HOA Landscaping',
        path: routes.LANDSCAPE,
        prefetchImages: [imgColoredPencils, imgFlowers1, imgMonument1, imgLandscapeRendering, imgOverhead2, imgOverhead3]
      },
      {
        active: true,
        Component: MonumentRoute,
        displayInHeader: true,
        headerLinkLines: ['HOA Monument', 'Installation'],
        icon: 'monument',
        iconSize: '19px',
        name: 'HOA Monument Installation',
        path: routes.MONUMENT,
        prefetchImages: [imgMonument1, imgMonument4, imgMonument5]
      },
      {
        active: true,
        Component: MonumentRepairRoute,
        displayInHeader: true,
        headerLinkLines: ['HOA Monument', 'Repair'],
        icon: 'masonry',
        iconSize: '20px',
        name: 'HOA Monument Repair',
        path: routes.MONUMENT_REPAIR,
        prefetchImages: [imgMonument2, imgMonument3, imgMonument7, imgMonument8]
      },
      {
        active: true,
        Component: FenceRoute,
        displayInHeader: true,
        headerLinkLines: ['Fence', 'Installation'],
        icon: 'fence',
        iconSize: '22px',
        name: 'Fence Installation',
        path: routes.FENCE,
        prefetchImages: [imgFence, imgFenceBroken, imgFenceRepair]
      },
      {
        active: true,
        Component: LightingRoute,
        displayInHeader: true,
        headerLinkLines: ['HOA Landscape', 'Lighting'],
        icon: 'lightBulb',
        iconSize: '29px',
        name: 'HOA Landscape Lighting',
        path: routes.LIGHTING,
        prefetchImages: [imgLighting1, imgLighting2, imgLighting3]
      },
      {
        active: true,
        Component: TrimmingRoute,
        displayInHeader: true,
        headerLinkLines: ['HOA Tree', 'Pruning'],
        icon: 'trees',
        iconSize: '20px',
        name: 'HOA Tree Pruning',
        path: routes.TRIMMING,
        prefetchImages: [imgLeaves, imgTrees1, imgTreeTrimming]
      }
    ],
    Component: ServicesRoute,
    name: 'Services',
    path: routes.SERVICES,
    prefetchImages: [imgGuyPlanting2, imgGuyTeaching2]
  },
  {
    active: true,
    children: [],
    Component: SubscribeRoute,
    name: 'Get Informed',
    path: routes.SUBSCRIBE,
    prefetchImages: [imgGuyPlanting1, imgNewsLetter1, imgNewsLetter2, imgNewsLetter3]
  },
  {
    active: true,
    children: [],
    Component: ContactRoute,
    name: 'Contact',
    path: routes.CONTACT,
    prefetchImages: [imgLeaves, imgOverhead1]
  }
];

function Routes(props) {
  const { addPrefetchedImages } = useImageState();
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
    const imagesToPreFetch = flattenedRoutes.filter(route => route.path !== location.pathname && route.prefetchImages?.length).reduce((acc, route) => [...acc, ...route.prefetchImages], []);
    addPrefetchedImages(imagesToPreFetch);
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    });
  }, [location?.pathname, flattenedRoutes]);

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
