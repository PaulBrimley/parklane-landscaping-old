import React, { useCallback, useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { ToastContainer, Flip } from 'react-toastify';

/** context **/
import { useAppState } from './context/app.context';

/** custom hooks **/
import useWindowDimensions from './hooks/useWindowDimensions';

/** components **/
import Menu from './components/Atoms/Menu';
import Modal from './components/Molecules/Modal';
import Routes from './routes/Routes';

function App() {
  const { handleWidthChange, isMobile, theme } = useAppState();

  const { width } = useWindowDimensions();
  const transitionTimeout = 200;

  const themeInfo = {
    ...theme,
    isMobile,
    transitionTimeout
  };

  useEffect(() => {
    handleWidthChange(width);
  }, [width]);

  return (
    <ThemeProvider theme={themeInfo}>
      <StyledApp>
        <ToastContainer transition={Flip} hideProgressBar={true}/>
        <Modal />
        <Router>
          <Menu />
          <Routes transitionTimeout={transitionTimeout} />
        </Router>
      </StyledApp>
    </ThemeProvider>
  );
}
const StyledApp = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  overflow: hidden;
`;

export default App;
