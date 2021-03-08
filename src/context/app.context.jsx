import { createContext, useContext, useMemo, useState } from 'react';

/** themes **/
import darkTheme from '../themes/darkTheme';
import lightTheme from '../themes/lightTheme';

const AppContext = createContext();

function useAppState() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppState must be used within AppProvider');
  const [state, setState] = context;

  function handleWidthChange(width) {
    const isMobile = width <= state.mobileWidth;
    setState({
      ...state,
      isMobile,
      width
    });
  }
  function setModal(modalInfo) {
    const modal = {
      body: state.modal.body,
      component: state.modal.component,
      header: state.modal.header,
      shown: false
    };
    if (typeof modalInfo === 'boolean') modal.shown = modalInfo;
    if (modalInfo.body) modal.body = modalInfo.body;
    if (modalInfo.component) modal.component = modalInfo.component;
    if (modalInfo.header) modal.header = modalInfo.header;
    if (modalInfo.hasOwnProperty('shown')) modal.shown = !!modalInfo.shown;
    setState({
      ...state,
      modal
    });
  }
  function setMenuCollapsed(menuCollapsed) {
    setState({
      ...state,
      menuCollapsed
    });
  }

  return {
    companyInfo: state.companyInfo,
    darkMode: state.darkMode,
    isMobile: state.isMobile,
    mobileWidth: state.mobileWidth,
    modal: state.modal,
    menuCollapsed: state.menuCollapsed,
    theme: state.theme,
    width: state.width,

    handleWidthChange,
    setModal,
    setMenuCollapsed
  };
}

function AppProvider(props) {
  const [state, setState] = useState({
    companyInfo: {
      city: 'San Antonio',
      email: 'info@parklanelandscaping.com',
      phone: '210-239-6715',
      poBox: 'P.O. Box 100054',
      state: 'TX',
      street: '2910 N Elmendorf St',
      website: 'www.parklanelandscaping.com',
      zip: '78201'
    },
    darkMode: false,
    isMobile: false,
    mobileWidth: 500,
    modal: {
      body: '',
      component: '',
      header: '',
      shown: false
    },
    menuCollapsed: true,
    theme: lightTheme,
    width: 0
  });
  const value = useMemo(() => [state, setState], [state]);
  return <AppContext.Provider value={value} {...props} />;
}

export {
  AppProvider,
  useAppState
};
